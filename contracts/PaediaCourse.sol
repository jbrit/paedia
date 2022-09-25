// contracts/GameItem.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./PCC.sol";

contract PaediaCourse is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter private _courseIds;
    PaediaCommunityCoin public pcc;

    struct Course {
        uint256 score;
    }

    mapping(address =>  mapping(uint256 => bool)) public minted;
    mapping(uint256 => Course) public courses;

    constructor() ERC721("PaediaCourse", "PDIC") {
        // start index at 1
        _courseIds.increment();
        pcc = new PaediaCommunityCoin();

    }

    /// @dev Mints an NFT course
    function completeCourse(uint256 courseId, string memory tokenURI)
        public
        returns (uint256)
    {
        require(!minted[msg.sender][courseId], "You have already completed this course");
        require(courseId > 0, "Course does not exist");
        require(courseId <= _courseIds.current(), "Course does not exist");
        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        pcc.mint(msg.sender, courses[courseId].score);

        _tokenIds.increment();
        minted[msg.sender][courseId] = true;
        return newItemId;
    }

    function createCourse(uint256 score) public onlyOwner {
        courses[_courseIds.current()] = Course(score); 
        _courseIds.increment();
    }
}
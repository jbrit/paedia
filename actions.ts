import { coinContract, courseContract, nftContract } from "contract-factory";
import { BigNumber } from "ethers";

export const holdsSBT = async (provider: any, address: string) => {
  const count = await nftContract(provider).balanceOf(address);
  return count.gte(1);
};

export const completeCourse = async (
  provider: any,
  courseId: BigNumber,
  tokenURI: string
) => {
  const transaction = await courseContract(provider).completeCourse(courseId, tokenURI);
  await transaction.wait(3);
  alert(`Course Completed Successfully!`);
};

export const receiveCoin = async (
    provider: any,
    address: string,
    amount: BigNumber
  ) => {
    const transaction = await coinContract(provider).mint(address, amount);
    await transaction.wait(3);
    alert(`NFT sent to ${address}`);
    alert(`300 PCC sent to ${address}`);
  };
  
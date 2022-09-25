export const courses = [
  {
    id: 1,
    name: "Getting Started With NFTs",
    creator: "0xcD4bde67fe7C6Eb601d03a35Ea8a55eB2b136965",
    description: "NFTs are a new tech in the space, you should learn about it",
    lessons: [
      "NFTs or Non-fungible tokens are smart contracts that represent the ownership of unique items (digital art, videos, music, tickets to an event, legal documents, etc.)",
      `When something is "Non-fungible," it simply means it is unique and cannot be replaced with something else. For example, a dollar bill is a fungible item as one dollar bill can be replaced by another and be considered and worth the same. A "Non-fungible" item outside the crypto world is assets like diamonds, land, and even baseball cards. A Non-fungible item is not interchangeable with other items because of its unique properties.`,
      "NFT's only have one official owner, and the transaction and contract are secured and recorded on the Ethereum blockchain.",
    ],
    tokenScore: 300,
  },
  {
    id: 2,
    name: "Learn more about NFTs v2",
    creator: "0xcD4bde67fe7C6Eb601d03a35Ea8a55eB2b136965",
    description: "Get started with flipping NFTs",
    lessons: [
      "Before we get to the step-by-step guide on how to buy and flip NFTs, let's understand what exactly is NFT flipping? Flipping is a recently coined term that refers to buying an asset and selling it quickly for a profit. It's not limited to non-fungible tokens only, you can flip any valuable asset including trading cards, cars, real estate, or antiques.",
      `When it comes to NFTs, to flip just means to buy low and sell high. It usually refers to a short-term trade. If you hold an asset for a long time before selling, that's not exactly flipping. `,
      "There's always a risk when you invest in any asset. Flipping is a relatively riskier means of earning money, but if you strategize, it can help you make a handsome amount of money in a short period of time. Remember that it's not a sure-fire way to make money, but you're likely to succeed if you tread carefully and follow a strategy.",
    ],
    tokenScore: 300,
  },
];

export const getCourseById = (id: number) => {
  return courses.find((course) => course.id === id);
};

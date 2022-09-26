import { Paedia__factory, PaediaCommunityCoin__factory, PaediaCourse__factory } from "typechain-types";

export const nftContract = (provider: any) => {
    return Paedia__factory.connect("0x5D61B537C30597B6378C7e968eCB8a9cFdC9195e", provider)
};

export const coinContract = (provider: any) => {
    return PaediaCommunityCoin__factory.connect("0xE79DaD9Fdb2FdA15428831a2e77F337EE534214f", provider)
};

export const courseContract = (provider: any) => {
    return PaediaCourse__factory.connect("0x21DAE3F5Cc8882C50F38A0374fcba74408B0EA7a", provider)
};

export const PCC_ADDR = "0xE79DaD9Fdb2FdA15428831a2e77F337EE534214f";
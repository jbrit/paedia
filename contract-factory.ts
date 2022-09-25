import { Paedia__factory, PaediaCommunityCoin__factory, PaediaCourse__factory } from "typechain-types";

export const nftContract = (provider: any) => {
    return Paedia__factory.connect("0xC8666cfb6f441dFCd6DF20861d5E4771604FA502", provider)
};

export const coinContract = (provider: any) => {
    return PaediaCommunityCoin__factory.connect("0xE79DaD9Fdb2FdA15428831a2e77F337EE534214f", provider)
};

export const courseContract = (provider: any) => {
    return PaediaCourse__factory.connect("0x0", provider)
};

export const PCC_ADDR = "0xE79DaD9Fdb2FdA15428831a2e77F337EE534214f";
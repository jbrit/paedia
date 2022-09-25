import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { WagmiConfig } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chains, wagmiClient } from "$utils/rainbow";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <WagmiConfig client={wagmiClient}>
        <FluentProvider theme={teamsLightTheme}>
          <RainbowKitProvider chains={chains}>
            <Component {...pageProps} />
          </RainbowKitProvider>
        </FluentProvider>
      </WagmiConfig>
    </Web3ReactProvider>
  );
}

export default MyApp;

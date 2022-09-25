import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { WagmiConfig } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chains, wagmiClient } from "$utils/rainbow";
import { teamsLightTheme } from "@fluentui/react-components";
import {
  createDOMRenderer,
  FluentProvider,
  GriffelRenderer,
  SSRProvider as SSRP,
  RendererProvider as RP,
  webLightTheme,
} from "@fluentui/react-components";
import React from "react";
import { type } from "os";

type EnhancedAppProps = AppProps & { renderer?: GriffelRenderer };

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

type NSSRP = typeof SSRP & React.FC<{ children: React.ReactNode }>;

const SSRProvider = SSRP as NSSRP;

interface RendererProviderProps {
  /** An instance of Griffel renderer. */
  renderer: GriffelRenderer;
  /**
   * Document used to insert CSS variables to head
   */
  targetDocument?: Document;
  children: React.ReactNode;
}

type NSRP = typeof RP & React.FC<RendererProviderProps>;

const RendererProvider = RP as NSRP;

function MyApp({ Component, pageProps, renderer }: EnhancedAppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <RendererProvider renderer={renderer || createDOMRenderer()}>
            <SSRProvider>
              <FluentProvider theme={teamsLightTheme}>
                <Component {...pageProps} />
              </FluentProvider>
            </SSRProvider>
          </RendererProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </Web3ReactProvider>
  );
}

export default MyApp;

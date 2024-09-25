"use client";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { WagmiProvider } from "wagmi";
import { config } from "./config";

const wagmiQueryClient = new QueryClient();

const Web3Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={wagmiQueryClient}>
          <RainbowKitProvider>{children}</RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
};

export default Web3Providers;

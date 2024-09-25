"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import { Button } from "./Button";

const MigrateButton = () => {
  const handleMigrate = () => {
    console.log("migrate");
  };

  return (
    <ConnectButton.Custom>
      {({ account, chain, openChainModal, openConnectModal, mounted }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted;
        const connected = ready && account && chain;

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    disabled={false}
                    onClick={openConnectModal}
                    className="w-full bg-blue-700 py-6 text-white disabled:bg-blue-100"
                    type="button"
                  >
                    Connect Wallet
                  </Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }

              return (
                <div>
                  <Button
                    disabled={false}
                    onClick={handleMigrate}
                    className="w-full bg-blue-700 py-6 text-white disabled:bg-blue-100"
                    type="button"
                  >
                    Migrate
                  </Button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default MigrateButton;

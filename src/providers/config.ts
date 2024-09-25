import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { bscTestnet } from "wagmi/chains";

export const config = getDefaultConfig({
  projectId: "55d1265cfd18193768c20b65157e6223",
  appName: "Swap Exercise",
  chains: [bscTestnet],
  ssr: true,
});

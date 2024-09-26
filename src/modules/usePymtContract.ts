import { useAccount, useReadContract } from "wagmi";
import { useSwapContract } from "./useSwapContract";
import { pymtAbi } from "~/abi/pymt-abi";

export const usePymtContract = () => {
  const { isConnected, address } = useAccount();

  const { appAddress } = useSwapContract();

  const {
    data: balance,
    error: balanceError,
    isLoading: isBalanceLoading,
  } = useReadContract({
    abi: pymtAbi,
    functionName: "balanceOf",
    args: [address!],
    address: appAddress,
    query: {
      enabled: isConnected,
    },
  });
  if (balanceError) {
    console.log(balanceError);
  }

  const {
    data: decimals,
    error: decimalsError,
    isLoading: isDecimalsLoading,
  } = useReadContract({
    abi: pymtAbi,
    functionName: "decimals",
    address: appAddress,
    query: {
      enabled: isConnected,
    },
  });
  if (decimalsError) {
    console.log(decimalsError);
  }

  return { balance: balance ?? 0n, decimals: decimals ?? 0 };
};

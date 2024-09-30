import { useAccount, useReadContract } from "wagmi";
import { useSwapContract } from "./useSwapContract";
import { pymtAbi } from "~/abi/pymt-abi";

export const usePymtContract = () => {
  const { isConnected, address } = useAccount();
  const { appAddress } = useSwapContract();

  const {
    data: balance,
    refetch: refetchBalance,
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
    data: allowance,
    refetch: refetchAllowance,
    error: allowanceError,
    isLoading: isAllowanceLoading,
  } = useReadContract({
    abi: pymtAbi,
    functionName: "allowance",
    args: [address!, "0x007fFBE15c8c0E4Eb9bC7E8ac2431eAfb4bAa75A"],
    address: appAddress,
    query: {
      enabled: isConnected,
    },
  });
  if (allowanceError) {
    console.log(allowanceError);
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

  return {
    balance: balance ?? 0n,
    refetchBalance,
    allowance: allowance ?? 0n,
    refetchAllowance,
    decimals: decimals ?? 0,
  };
};

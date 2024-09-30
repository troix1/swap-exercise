import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";

export const useSwapTokens = () => {
  const {
    writeContractAsync: swapTokens,
    data: swapData,
    isPending: swapPending,
    error: swapError,
  } = useWriteContract();

  const { isLoading: isSwapConfirming, isSuccess: isSwapConfirmed } =
    useWaitForTransactionReceipt({
      hash: swapData,
    });

  return {
    swapTokens,
    swapData,
    swapPending,
    swapError,
    isSwapConfirming,
    isSwapConfirmed,
  };
};

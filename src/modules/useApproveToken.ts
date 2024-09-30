import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";

const useApproveToken = () => {
  const {
    writeContractAsync: approveToken,
    data: approveHash,
    isPending: approvePending,
    error: approveError,
  } = useWriteContract();

  const { isLoading: isApprovalConfirming, isSuccess: isApprovalConfirmed } =
    useWaitForTransactionReceipt({
      hash: approveHash,
    });

  return {
    approveToken,
    approveHash,
    approveError,
    isLoading: isApprovalConfirming,
    isApprovalConfirmed,
  };
};

export default useApproveToken;

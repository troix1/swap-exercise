import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { swapAbi } from "~/abi/swap-abi";

export const useSwapContract = () => {
  const { isConnected } = useAccount();
  const {
    writeContractAsync,
    data: swapData,
    error: swapError,
  } = useWriteContract();
  const swapContractAddress = "0x007fFBE15c8c0E4Eb9bC7E8ac2431eAfb4bAa75A";

  const {
    data: startTime,
    error: startTimeError,
    isLoading: isStartTimeLoading,
  } = useReadContract({
    abi: swapAbi,
    functionName: "startTime",
    address: swapContractAddress,
    query: {
      enabled: isConnected,
    },
  });

  const {
    data: endTime,
    error: endTimeError,
    isLoading: isEndTimeLoading,
  } = useReadContract({
    abi: swapAbi,
    functionName: "endTime",
    address: swapContractAddress,
    query: {
      enabled: isConnected,
    },
  });

  const {
    data: appAddress,
    error: appAddressError,
    isLoading: isAppAddressLoading,
  } = useReadContract({
    abi: swapAbi,
    functionName: "app",
    address: swapContractAddress,
    query: {
      enabled: isConnected,
    },
  });

  const {
    data: rwaxAddress,
    error: rwaxAddressError,
    isLoading: isRwaxAddressLoading,
  } = useReadContract({
    abi: swapAbi,
    functionName: "rwax",
    address: swapContractAddress,
    query: {
      enabled: isConnected,
    },
  });

  const swap = async (amount: bigint) => {
    await writeContractAsync({
      abi: swapAbi,
      address: swapContractAddress,
      functionName: "swap",
      args: [amount],
    });

    return swapData ?? swapError;
  };

  if (startTimeError || endTimeError || appAddressError || rwaxAddressError) {
    console.error("Error fetching contract data");
  }

  const isLoading =
    isStartTimeLoading ||
    isEndTimeLoading ||
    isAppAddressLoading ||
    isRwaxAddressLoading;

  return {
    startTime,
    endTime,
    rwaxAddress,
    appAddress,
    swap,
    isLoading,
  };
};

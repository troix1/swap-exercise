"use client";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/Input";
import MigrateButton from "./MigrateButton";
import { usePymtContract } from "~/modules/usePymtContract";
import { formatUnits, parseUnits } from "viem";
import { Button } from "./ui/Button";
import { useSwapContract } from "~/modules/useSwapContract";
import { pymtAbi } from "~/abi/pymt-abi";
import useApproveToken from "~/modules/useApproveToken";
import { useSwapTokens } from "~/modules/useSwapTokens";
import { swapAbi } from "~/abi/swap-abi";

const MigrateTokens = () => {
  const { allowance, refetchAllowance, balance, refetchBalance, decimals } =
    usePymtContract();
  const { swapTokens, isSwapConfirmed, isSwapConfirming, swapPending } =
    useSwapTokens();
  const {
    approveToken,
    isLoading: isApprovalLoading,
    approveError,
  } = useApproveToken();
  const [inputValue, setInputValue] = useState("");
  const { startTime, endTime, paused, swapContractAddress, appAddress } =
    useSwapContract();

  const handleSetMaxValue = () => {
    setInputValue(formatUnits(balance, decimals));
  };

  const handleMigrate = async () => {
    const parsedInputValue = parseUnits(inputValue, decimals);
    if (parsedInputValue > allowance) {
      await approveToken({
        abi: pymtAbi,
        address: appAddress!,
        functionName: "approve",
        args: [swapContractAddress!, parseUnits(inputValue, decimals)],
      });
    }
  };

  useEffect(() => {
    if (!isApprovalLoading) {
      refetchAllowance();
      handleSwap();
    }
  }, [isApprovalLoading]);

  useEffect(() => {
    if (isSwapConfirmed) {
      refetchAllowance();
      refetchBalance();
      setInputValue("");
    }
  }, [isSwapConfirmed]);

  const handleSwap = async () => {
    // check startTime, endTime, pause
    const now = BigInt(Math.floor(Date.now() / 1000));
    if (now > startTime && now < endTime && paused === false) {
      await swapTokens({
        abi: swapAbi,
        address: swapContractAddress,
        functionName: "swap",
        args: [parseUnits(inputValue, decimals)],
      });
    } else {
      console.log("Swap not allowed");
    }
  };

  return (
    <div className="py-4">
      <div className="mb-2 text-sm font-semibold">Migrate</div>
      <Input
        type="number"
        placeholder="0.00"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="mt-2 flex items-center justify-between">
        <Button
          variant="link"
          size="sm"
          onClick={handleSetMaxValue}
          className="p-0"
        >
          MAX
        </Button>
        {balance !== undefined && (
          <div>Available {formatUnits(balance, decimals)}</div>
        )}
        {allowance !== undefined && (
          <div>Allowance {formatUnits(allowance, decimals)}</div>
        )}
      </div>
      <div className="mt-4">
        {isApprovalLoading || isSwapConfirming || swapPending ? (
          <div className="text-center">Loading...</div>
        ) : (
          <MigrateButton onClick={handleMigrate} />
        )}
      </div>
    </div>
  );
};

export default MigrateTokens;

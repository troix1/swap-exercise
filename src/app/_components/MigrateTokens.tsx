"use client";
import React, { useCallback, useEffect, useState } from "react";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BuyAmountValidationSchema } from "~/modules/validation/buy-form.validation";
import { z } from "zod";

const MigrateTokens = () => {
  const { allowance, refetchAllowance, balance, refetchBalance, decimals } =
    usePymtContract();
  const { swapTokens, isSwapConfirmed, isSwapConfirming, swapPending } =
    useSwapTokens();
  const {
    approveToken,
    isLoading: isApprovalLoading,
    isApprovalConfirmed,
  } = useApproveToken();
  const [inputValue, setInputValue] = useState("");
  const { startTime, endTime, paused, swapContractAddress, appAddress } =
    useSwapContract();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(BuyAmountValidationSchema({ maxDecimals: decimals })),
  });

  const handleSetMaxValue = () => {
    setValue("amount", formatUnits(balance, decimals));
  };

  const handleMigrate = async (amount: string) => {
    const parsedAmountValue = parseUnits(amount, decimals);
    if (parsedAmountValue > allowance) {
      await approveToken({
        abi: pymtAbi,
        address: appAddress!,
        functionName: "approve",
        args: [swapContractAddress!, parseUnits(amount, decimals)],
      });
    } else {
      handleSwap();
    }
  };

  useEffect(() => {
    if (!isApprovalLoading && isApprovalConfirmed) {
      refetchAllowance();
      handleSwap();
    }
  }, [isApprovalLoading, isApprovalConfirmed]);

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
        args: [parseUnits(getValues("amount"), decimals)],
      });
    } else {
      console.log("Swap not allowed");
    }
  };

  const form = useForm<z.infer<ReturnType<typeof BuyAmountValidationSchema>>>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: zodResolver(
      BuyAmountValidationSchema({
        maxDecimals: decimals,
        max: balance,
      }),
    ),
    defaultValues: {
      amount: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit((values) => {
        handleMigrate(values?.amount);
      })}
    >
      <div className="py-4">
        <div className="mb-2 text-sm font-semibold">Migrate</div>
        <Input {...register("amount")} type="string" placeholder="0.00" />
        {errors.amount && <div>{errors.amount.message?.toString()}</div>}
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
            <MigrateButton />
          )}
        </div>
      </div>
    </form>
  );
};

export default MigrateTokens;

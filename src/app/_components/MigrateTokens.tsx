"use client";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/Input";
import MigrateButton from "./MigrateButton";
import { usePymtContract } from "~/modules/usePymtContract";
import { formatUnits } from "viem";
import { Button } from "./ui/Button";
import { useSwapContract } from "~/modules/useSwapContract";

const MigrateTokens = () => {
  const { balance } = usePymtContract();
  const [inputValue, setInputValue] = useState("");
  const { swap } = useSwapContract();

  const handleMigrate = async () => {
    const result = await swap(BigInt(inputValue));
    console.log(result);
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
          onClick={() => setInputValue(balance.toString())}
          className="p-0"
        >
          MAX
        </Button>
        {balance !== undefined && <div>Available {balance.toString()}</div>}
      </div>
      <div className="mt-4">
        <MigrateButton onClick={handleMigrate} />
      </div>
    </div>
  );
};

export default MigrateTokens;

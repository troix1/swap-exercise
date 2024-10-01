import { formatUnits, parseUnits } from "viem";
import { z } from "zod";

type BuyAmountValidationSchemaProps = {
  maxDecimals?: number;
  max?: bigint;
};
export const BuyAmountValidationSchema = ({
  maxDecimals = 0,
  max,
}: BuyAmountValidationSchemaProps) =>
  z.object({
    amount: z
      .string()
      .superRefine((val, ctx) => {
        const spacesRegex = /[\s]+/;
        if (spacesRegex.test(val)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `No spaces.`,
          });
          return z.NEVER;
        }

        if (val.trim().startsWith("-")) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Must be positive.`,
          });
          return z.NEVER;
        }

        const validNumberRegex = /[^\d\,\.]+/;
        if (validNumberRegex.test(val)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Not a number.`,
          });
          return z.NEVER;
        }

        const validDecimalSepRegex = /[\,|\.]{2,}/;
        if (validDecimalSepRegex.test(val.replaceAll(/\d/gm, ""))) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Too many decimal separators.`,
          });
          return z.NEVER;
        }

        const decimalPart = getDecimalPart(val);
        if (decimalPart.length > maxDecimals) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Too many decimals. Max: ${maxDecimals}, found: ${decimalPart.length}.`,
          });
          return z.NEVER;
        }

        if (max && parseUnits(val, maxDecimals) > max) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Bigger than max: ${formatUnits(max, maxDecimals)}.`,
          });
          return z.NEVER;
        }
      })
      .optional(),
  });

function getDecimalPart(numeric: string): string {
  const lastDot = numeric.lastIndexOf(".");
  const lastComma = numeric.lastIndexOf(",");
  const lastIndex = Math.max(lastDot, lastComma);
  return lastIndex ? numeric.substring(lastIndex + 1) : "";
}

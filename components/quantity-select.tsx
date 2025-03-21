import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { SelectProps } from "@radix-ui/react-select";

type QuantitySelectProps = SelectProps;

export function QuantitySelect({ ...selectProps }: QuantitySelectProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="quantity-select" className="pl-1">
        Number of words
      </Label>
      <Select {...selectProps}>
        <SelectTrigger id="quantity-select" className="w-[180px]">
          <SelectValue placeholder="Select a language" />
        </SelectTrigger>
        <SelectContent>
          {[2, 3, 5].map((q, i) => (
            <SelectItem key={i} value={q.toString()}>
              {q} words
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

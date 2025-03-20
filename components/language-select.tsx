import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { languages } from "@/lib/language-data";
import { Label } from "@/components/ui/label";
import { SelectProps } from "@radix-ui/react-select";

type LanguageSelectProps = SelectProps;

export function LanguageSelect({ ...selectProps }: LanguageSelectProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="language-select" className="pl-1">
        Select Language
      </Label>
      <Select {...selectProps}>
        <SelectTrigger id="language-select" className="w-[180px]">
          <SelectValue placeholder="Select a language" />
        </SelectTrigger>
        <SelectContent>
          {languages.map((l) => (
            <SelectItem key={l.id} value={l.id}>
              {l.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

"use client";

import { languages } from "@/lib/language-data";
import { useState } from "react";
import { LanguageSelect } from "@/components/language-select";
import { FlashcardDeck } from "@/components/flashcard-deck";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { QuantitySelect } from "@/components/quantity-select";

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages.at(0)?.id);
  const [wordsLearned, setWordsLearned] = useState(0);
  const [wordsQuantity, setWordsQuantity] = useState(5);

  function handleLanguageChange(languageId: string) {
    setSelectedLanguage(languageId);
    setWordsLearned(0);
  }

  return (
    <div className="flex flex-col gap-12 items-center py-8 px-4">
      <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Learn New Language
      </h1>
      <div className="max-w-md w-full flex items-center gap-4 flex-wrap justify-between">
        <LanguageSelect
          value={selectedLanguage}
          onValueChange={handleLanguageChange}
        />
        <QuantitySelect
          value={wordsQuantity.toString()}
          onValueChange={(val) => setWordsQuantity(parseInt(val, 10))}
        />
      </div>
      <div className="max-w-md w-full space-y-8">
        <div className="space-y-2">
          <Label>Progress</Label>
          <Progress value={Math.ceil((wordsLearned / wordsQuantity) * 100)} />
        </div>
        {selectedLanguage && (
          <FlashcardDeck
            cardsQuantity={wordsQuantity}
            language={selectedLanguage}
            onProgress={setWordsLearned}
          />
        )}
      </div>
    </div>
  );
}

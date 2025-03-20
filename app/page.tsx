"use client";

import { languages } from "@/lib/language-data";
import { useState } from "react";
import { LanguageSelect } from "@/components/language-select";
import { FlashcardDeck } from "@/components/flashcard-deck";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages.at(0)?.id);
  const [wordsLearned, setWordsLearned] = useState(0);
  const totalWords =
    languages.find((language) => language.id === selectedLanguage)?.wordCount ??
    0;

  function handleLanguageChange(languageId: string) {
    setSelectedLanguage(languageId);
    setWordsLearned(0);
  }

  return (
    <div className="flex flex-col gap-12 items-center py-8 px-4">
      <h1 className="text-2xl font-medium">Learn New Language</h1>
      <div>
        <LanguageSelect
          value={selectedLanguage}
          onValueChange={handleLanguageChange}
        />
      </div>
      <div className="max-w-md w-full space-y-8">
        <div className="space-y-2">
          <Label>Progress</Label>
          <Progress value={Math.ceil((wordsLearned / totalWords) * 100)} />
        </div>
        {selectedLanguage && (
          <FlashcardDeck
            language={selectedLanguage}
            onProgress={setWordsLearned}
          />
        )}
      </div>
    </div>
  );
}

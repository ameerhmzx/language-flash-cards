"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Flashcard } from "@/components/flashcard";
import { getFlashcards } from "@/lib/language-data";
import { ChevronLeft, ChevronRight, RotateCcw, Volume2 } from "lucide-react";

export function FlashcardDeck({
  language,
  onProgress,
  cardsQuantity,
}: {
  language: string;
  onProgress: (wordsLearned: number) => void;
  cardsQuantity?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [knownCards, setKnownCards] = useState<string[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null);
  const cards = getFlashcards(language).slice(0, cardsQuantity);

  const currentCard = cards[currentIndex];

  useEffect(() => {
    // Reset state when language changes
    // setCards(getFlashcards(language));
    setCurrentIndex(0);
    setIsFlipped(false);
    setCompleted(false);
    setKnownCards([]);
  }, [language]);

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
      onProgress(currentIndex + 1);
    } else {
      onProgress(cards.length);
      setCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      onProgress(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped && audioRef.current) {
      // Play audio when card is flipped to reveal answer
      audioRef.current
        .play()
        .catch((error) => console.error("Audio playback failed:", error));
    }
  };

  const handleKnown = () => {
    if (!knownCards.includes(currentCard.id)) {
      setKnownCards([...knownCards, currentCard.id]);
    }
    handleNext();
  };

  const handleUnknown = () => {
    // If card was previously marked as known, remove it
    if (knownCards.includes(currentCard.id)) {
      setKnownCards(knownCards.filter((id) => id !== currentCard.id));
    }
    handleNext();
  };

  const handleReset = () => {
    onProgress(0);
    setCurrentIndex(0);
    setIsFlipped(false);
    setCompleted(false);
    setKnownCards([]);
  };

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((error) => console.error("Audio playback failed:", error));
    }
  };

  if (completed) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Session Complete!</h2>
          <p className="mb-6">
            You&apos;ve reviewed {cards.length} cards and knew{" "}
            {knownCards.length} of them.
          </p>
          <div className="flex justify-center">
            <Button onClick={handleReset} className="flex items-center gap-2">
              <RotateCcw className="h-4 w-4" />
              Start Again
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          Card {currentIndex + 1} of {cards.length}
        </span>
        <Button variant="outline" size="icon" onClick={handlePlayAudio}>
          <Volume2 className="h-4 w-4" />
          <span className="sr-only">Play pronunciation</span>
        </Button>
      </div>

      <audio ref={audioRef} src={currentCard.audioUrl} preload="auto" />

      <Flashcard
        front={currentCard.word}
        back={currentCard.translation}
        example={currentCard.example}
        isFlipped={isFlipped}
        onFlip={handleFlip}
      />

      <div className="mt-6 flex items-center justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="flex items-center gap-1"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        {isFlipped ? (
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleUnknown}>
              I don&apos;t know
            </Button>
            <Button
              className="bg-primary text-primary-foreground"
              onClick={handleKnown}
            >
              I know
            </Button>
          </div>
        ) : (
          <Button onClick={handleNext} className="flex items-center gap-1">
            Skip
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}

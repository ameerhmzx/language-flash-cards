"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FlashcardProps {
  front: string;
  back: string;
  example?: string;
  isFlipped: boolean;
  onFlip: () => void;
}

export function Flashcard({
  front,
  back,
  example,
  isFlipped,
  onFlip,
}: FlashcardProps) {
  return (
    <div
      className="relative h-[300px] w-full perspective cursor-pointer"
      onClick={onFlip}
    >
      <div
        className={cn(
          "absolute inset-0 transition-all duration-500 preserve-3d",
          isFlipped ? "rotate-y-180" : "",
        )}
      >
        <div className="absolute inset-0 backface-hidden rounded-lg">
          <Card className="h-full flex items-center justify-center">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">{front}</h3>
              <p className="text-sm text-muted-foreground">Click to flip</p>
            </CardContent>
          </Card>
        </div>

        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-lg">
          <Card className="h-full flex flex-col">
            <CardContent className="p-6 flex-1 flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-4">{back}</h3>
              {example && (
                <div className="mt-2 p-3 bg-muted rounded-md text-sm">
                  <p className="italic">{example}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

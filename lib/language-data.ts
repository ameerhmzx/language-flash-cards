export interface Language {
  id: string;
  name: string;
  wordCount: number;
}

export interface Flashcard {
  id: string;
  word: string;
  translation: string;
  example?: string;
  audioUrl: string;
}

export const languages: Language[] = [
  {
    id: "spanish",
    name: "Spanish",
    wordCount: 5,
  },
  {
    id: "french",
    name: "French",
    wordCount: 5,
  },
  {
    id: "german",
    name: "German",
    wordCount: 5,
  },
];

// Mock data for flashcards
const spanishFlashcards: Flashcard[] = [
  {
    id: "es1",
    word: "Hola",
    translation: "Hello",
    example: "¡Hola! ¿Cómo estás?",
    audioUrl: "/audio/spanish/hola.mp3",
  },
  {
    id: "es2",
    word: "Gracias",
    translation: "Thank you",
    example: "Muchas gracias por tu ayuda.",
    audioUrl: "/audio/spanish/gracias.mp3",
  },
  {
    id: "es3",
    word: "Por favor",
    translation: "Please",
    example: "Por favor, pásame el libro.",
    audioUrl: "/audio/spanish/por-favor.mp3",
  },
  {
    id: "es4",
    word: "Adiós",
    translation: "Goodbye",
    example: "Adiós, hasta mañana.",
    audioUrl: "/audio/spanish/adios.mp3",
  },
  {
    id: "es5",
    word: "Amigo",
    translation: "Friend",
    example: "Él es mi mejor amigo.",
    audioUrl: "/audio/spanish/amigo.mp3",
  },
];

const frenchFlashcards: Flashcard[] = [
  {
    id: "fr1",
    word: "Bonjour",
    translation: "Hello",
    example: "Bonjour, comment allez-vous?",
    audioUrl: "/audio/french/bonjour.mp3",
  },
  {
    id: "fr2",
    word: "Merci",
    translation: "Thank you",
    example: "Merci beaucoup pour votre aide.",
    audioUrl: "/audio/french/merci.mp3",
  },
  {
    id: "fr3",
    word: "S'il vous plaît",
    translation: "Please",
    example: "S'il vous plaît, passez-moi le livre.",
    audioUrl: "/audio/french/sil-vous-plait.mp3",
  },
  {
    id: "fr4",
    word: "Au revoir",
    translation: "Goodbye",
    example: "Au revoir, à demain.",
    audioUrl: "/audio/french/au-revoir.mp3",
  },
  {
    id: "fr5",
    word: "Ami",
    translation: "Friend",
    example: "Il est mon meilleur ami.",
    audioUrl: "/audio/french/ami.mp3",
  },
];

const germanFlashcards: Flashcard[] = [
  {
    id: "de1",
    word: "Hallo",
    translation: "Hello",
    example: "Hallo, wie geht es dir?",
    audioUrl: "/audio/german/hallo.mp3",
  },
  {
    id: "de2",
    word: "Danke",
    translation: "Thank you",
    example: "Vielen Danke für deine Hilfe.",
    audioUrl: "/audio/german/danke.mp3",
  },
  {
    id: "de3",
    word: "Bitte",
    translation: "Please",
    example: "Bitte, gib mir das Buch.",
    audioUrl: "/audio/german/bitte.mp3",
  },
  {
    id: "de4",
    word: "Auf Wiedersehen",
    translation: "Goodbye",
    example: "Auf Wiedersehen, bis morgen.",
    audioUrl: "/audio/german/auf-wiedersehen.mp3",
  },
  {
    id: "de5",
    word: "Freund",
    translation: "Friend",
    example: "Er ist mein bester Freund.",
    audioUrl: "/audio/german/freund.mp3",
  },
];

// Function to get language data by ID
export function getLanguageData(languageId: string): Language | undefined {
  return languages.find((lang) => lang.id === languageId);
}

// Function to get flashcards for a specific language
export function getFlashcards(languageId: string): Flashcard[] {
  switch (languageId) {
    case "spanish":
      return spanishFlashcards;
    case "french":
      return frenchFlashcards;
    case "german":
      return germanFlashcards;
    default:
      return [];
  }
}

import { Note } from "@/types";

interface INoteForm {
  currentNote?: Note;
  onSave: () => void;
  onEditCancel: () => void;
}

export type { INoteForm };

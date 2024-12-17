import { Note } from "@/types";

interface INoteForm {
  currentNote?: Note;
  onSave: () => void;
  onEditCancel: () => void;
}

interface INoteList {
  onEdit: (note: Note) => void;
  onEditCancel: () => void;
}

interface INoteListItem {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
}

export type { INoteForm, INoteList, INoteListItem };

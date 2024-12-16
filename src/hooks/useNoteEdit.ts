import { useState } from "react";
import { Note } from "@/types";

const useNoteEdit = () => {
  const [currentNote, setCurrentNote] = useState<Note | undefined>(undefined);

  const handleEdit = (note: Note) => setCurrentNote(note);
  const handleSave = () => setCurrentNote(undefined);
  const handleEditCancel = () => setCurrentNote(undefined);

  return { currentNote: currentNote, handleEdit, handleSave, handleEditCancel };
};

export default useNoteEdit;

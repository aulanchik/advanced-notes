import { FC, useState } from "react";
import { RootState } from "@/store";
import { deleteNote } from "@/store/reducers/notes";
import { useSelector, useDispatch } from "react-redux";
import { INoteList } from "@/interfaces";
import NoteListItem from "./NoteListItem";

const NoteList: FC<INoteList> = ({ onEdit, onEditCancel }): JSX.Element => {
  const notes = useSelector((state: RootState) => state.notes.notes);
  const dispatch = useDispatch();

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const sortedNotes =
    notes.length > 1
      ? notes.slice().sort((a, b) => {
          if (sortOrder === "asc") return a.title.localeCompare(b.title);
          return b.title.localeCompare(a.title);
        })
      : notes;

  const handleDelete = (id: string) => {
    dispatch(deleteNote(id));
    onEditCancel();
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end mb-4">
        <button onClick={toggleSortOrder}>
          Sort: {sortOrder === "asc" ? "Ascending" : "Descending"}
        </button>
      </div>
      {sortedNotes.map((note) => (
        <NoteListItem
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default NoteList;

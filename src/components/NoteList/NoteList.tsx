import { FC } from "react";
import { RootState } from "@/store";
import { deleteNote } from "@/store/reducers/notes";
import { useSelector, useDispatch } from "react-redux";
import { INoteList } from "@/interfaces";
import NoteListItem from "./NoteListItem";

const NoteList: FC<INoteList> = ({ onEdit, onEditCancel }): JSX.Element => {
  const notes = useSelector((state: RootState) => state.notes.notes);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteNote(id));
    onEditCancel();
  };

  return (
    <div className="space-y-4">
      {notes.map((note) => (
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

import { FC } from "react";
import { INoteListItem } from "@/interfaces";

const NoteListItem: FC<INoteListItem> = ({
  note,
  onEdit,
  onDelete,
}): JSX.Element => (
  <div className="bg-gray-100 border border-gray-300 rounded-lg">
    <div className="flex justify-between p-4">
      <div className="flex flex-col justify-center line-clamp-3 text-ellipsis w-[300px]">
        <p className="text-lg font-bold">{note.title}</p>
        <p className="text-gray-700">{note.content}</p>
      </div>
      <div className="flex flex-col align-center space-y-4">
        <button className="btn btn--primary" onClick={() => onEdit(note)}>
          Edit
        </button>
        <button className="btn btn--danger" onClick={() => onDelete(note.id)}>
          Delete
        </button>
      </div>
    </div>
  </div>
);

export default NoteListItem;

import { FC } from "react";
import { useNoteEdit } from "@/hooks";
import { NoteForm, NoteList } from "@/components";

const App: FC = (): JSX.Element => {
  const { currentNote, handleEdit, handleSave, handleEditCancel } =
    useNoteEdit();

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
        <NoteForm
          onSave={handleSave}
          currentNote={currentNote}
          onEditCancel={handleEditCancel}
        />
        <NoteList onEdit={handleEdit} onEditCancel={handleEditCancel} />
      </div>
    </main>
  );
};

export default App;

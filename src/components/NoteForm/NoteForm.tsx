import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, editNote } from "@/store/reducers/notes";
import { INoteForm } from "@/interfaces";
import { generateUUID } from "@/utils";
import { RootState } from "@/store";

const NoteForm: FC<INoteForm> = ({
  onSave,
  currentNote,
  onEditCancel,
}): JSX.Element => {
  const [formState, setFormState] = useState({ title: "", content: "" });
  const { title, content } = formState;
  const dispatch = useDispatch();

  const notes = useSelector((state: RootState) => state.notes.notes);

  useEffect(() => {
    if (currentNote && notes.find((note) => note.id === currentNote.id)) {
      setFormState({
        title: currentNote.title,
        content: currentNote.content,
      });
    } else {
      resetForm();
      onEditCancel();
    }
  }, [currentNote, notes, onEditCancel]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      id: currentNote?.id || generateUUID(),
      title: title,
      content: content,
    };

    dispatch(currentNote ? editNote(payload) : addNote(payload));
    resetForm();
    onSave();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const resetForm = () => setFormState({ title: "", content: "" });

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-lg py-4">
      <h1 className="text-3xl font-bold text-center">Todo List</h1>
      <input
        name="title"
        value={title}
        placeholder="Title"
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition duration-200"
        required
      />
      <textarea
        name="content"
        value={content}
        onChange={handleChange}
        placeholder="Content"
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition duration-200"
        rows={4}
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white rounded-lg p-3 hover:bg-blue-600 transition duration-200"
      >
        {currentNote ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
};

export default NoteForm;

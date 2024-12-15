import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./initState";
import { Note } from "@/types";

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    editNote: (state, action: PayloadAction<Note>) => {
      const index = state.notes.findIndex(
        (note: Note) => note.id === action.payload.id,
      );

      if (index != -1) state.notes[index] = action.payload;
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter(
        (note: Note) => note.id === action.payload,
      );
    },
  },
});

export const { addNote, editNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    entities: [], // array of todos
  },
  reducers: {
    todoAdded(state, action) {
      state.entities.push({
        id: uuid(), // use the uuid function to generate a unique id
        text: action.payload,
      });
    },
    todoRemoved(state, action){
      const index = state.entities.findIndex((todo)=>todo.id===action.payload);
      state.entities.splice(index,1);
    }
  },
});

export const { todoAdded , todoRemoved } = todosSlice.actions;

export default todosSlice.reducer;

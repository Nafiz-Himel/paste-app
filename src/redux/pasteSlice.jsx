import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  paste: localStorage.getItem('paste')
  ? JSON.parse(localStorage.getItem('paste'))
  : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPaste: (state, action) => {
        const paste = action.payload

        //add a check to avoid duplicate paste
        
        state.paste.push(paste)
        localStorage.setItem('paste', JSON.stringify(state.paste));
        toast("paste added successfully")
    },
    updateToPaste: (state, action) => {
        const paste = action.payload;
        const index = state.paste.findIndex((item) => 
            item._id === paste._id);
        if (index >= 0) {
            state.paste[index] = paste;

            localStorage.setItem('paste', JSON.stringify(state.paste));
            toast("paste updated successfully")
        }
      
    },
    resetAllPaste: (state, action) => {
      state.paste = [];
      localStorage.setItem('paste');
    },
    removeFromPaste: (state, action) => {
      const index = state.paste.findIndex((item) => 
        item._id === action.payload);
      if (index >= 0) {
        state.paste.splice(index, 1);

        localStorage.setItem('paste', JSON.stringify(state.paste));
        
        toast("paste removed successfully")
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPaste, updateToPaste, resetAllPaste, removeFromPaste } = pasteSlice.actions

export default pasteSlice.reducer
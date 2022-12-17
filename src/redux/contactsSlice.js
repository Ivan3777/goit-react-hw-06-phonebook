import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts.items = action.payload;
      state.contacts.isLoading = false;
    });
    builder.addCase(fetchContacts.pending, state => {
      state.contacts.isLoading = true;
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.contacts.error = action.payload;
      state.contacts.isLoading = false;
    });

    builder.addCase(addContact.fulfilled, (state, action) => {
      state.contacts.items.push(action.payload);
      state.contacts.isLoading = false;
    });
    builder.addCase(addContact.pending, state => {
      state.contacts.isLoading = true;
    });
    builder.addCase(addContact.rejected, (state, action) => {
      state.contacts.error = action.payload;
      state.contacts.isLoading = false;
    });

    builder.addCase(deleteContact.fulfilled, (state, action) => {
      const index = state.contacts.items.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.items.splice(index, 1);
      state.contacts.isLoading = false;
    });
    builder.addCase(deleteContact.pending, state => {
      state.contacts.isLoading = true;
    });
    builder.addCase(deleteContact.rejected, (state, action) => {
      state.contacts.error = action.payload;
      state.contacts.isLoading = false;
    });
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.contacts.items;

export const getFilter = state => state.filter;

export const getIsLoading = state => state.contacts.isLoading;

export const getFilteredContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
    const filterContactsList = contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
      });
      return filterContactsList;
})
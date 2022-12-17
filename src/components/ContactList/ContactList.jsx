import { useSelector, useDispatch } from 'react-redux';
import { getIsLoading, getFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wraperContactList}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul className={css.contactList}>
          {contacts.map((contact, id) => (
            <li key={id} className={css.contactListItem}>
              {contact.name}: {contact.number}
              <button
                type="button"
                className={css.contactListItemBtn}
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

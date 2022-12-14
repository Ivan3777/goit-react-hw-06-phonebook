import { setFilter } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue));
  };

  return (
    <div>
      <label className={css.filterLabel}>Find contacts by Name </label>
      <input
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Enter filter"
        onChange={handleChange}
      />
    </div>
  );
};


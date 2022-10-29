import { FilterTitle, FilterInput } from './Filter.styled';

const Filter = ({ filter, handleChange }) => {
  return (
    <>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={e => handleChange(e.target.value)}
        title="Search field"
        required
        placeholder="Enter name"
      />
    </>
  );
};

export default Filter;
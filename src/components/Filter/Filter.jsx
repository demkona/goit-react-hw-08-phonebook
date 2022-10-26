import { FilterTitle, FilterInput } from './Filter.styled';

const Filter = ({ filter, handleChange }) => {
  return (
    <div>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={e => handleChange(e.target.value)}
        title="Search field"
        required
      />
    </div>
  );
};

export default Filter;
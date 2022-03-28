import { useState } from "react";
import Button from "../../../Design/Button/Button";
import Input from "../../../Design/Input/Input";

const SearchForm = ({ onSearch, minLength = 4 }) => {
  const [search, setSearch] = useState("");

  const isSearchAllowed = search.length > minLength;

  const handleReset = () => {
    setSearch("");
    onSearch(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSearchAllowed) {
      onSearch(search);
    }
  };

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <Input
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button disabled={!isSearchAllowed} type="submit">
        Search
      </Button>
      <Button color="secondary" type="reset">
        Reset
      </Button>
    </form>
  );
};

export default SearchForm;

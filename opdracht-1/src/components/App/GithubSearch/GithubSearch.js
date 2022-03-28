import { useEffect, useState } from "react";
import Container from "../../Design/Container/Container";
import SearchForm from "../Shared/SearchForm/SearchForm";
import GithubSearchResults from "./Results/GithubSearchResults";
import GithubUserDetail from "./User/GithubUserDetail";

const GithubSearch = () => {
  const [query, setQuery] = useState();
  const [currentUserName, setCurrentUserName] = useState();

  const handleSearch = (search) => {
    setQuery(search);
  };

  const handleUserClick = (user) => {
    setCurrentUserName(user.login);
  };

  useEffect(() => {
    // set current user to null every time query changes (side effect)
    setCurrentUserName(null);
  }, [query]);

  return (
    <Container>
      <SearchForm onSearch={handleSearch} minLength={4} />
      <div>
        {query && (
          <GithubSearchResults query={query} onUserClick={handleUserClick} />
        )}
        {currentUserName && <GithubUserDetail username={currentUserName} />}
      </div>
    </Container>
  );
};

export default GithubSearch;

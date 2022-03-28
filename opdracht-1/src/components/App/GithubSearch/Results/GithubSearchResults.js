import useGithubApi from "../../../../core/hooks/useGithubApi";
import Alert from "../../../Design/Alert/Alert";
import Loading from "../../../Design/Loading/Loading";
import GithubUsersList from "../List/GithubUsersList";

const GithubResults = ({ query, onUserClick }) => {
  const { isLoading, data, error } = useGithubApi(`/search/users?q=${query}`);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Alert color="warning">{error}</Alert>;
  }

  const { items: users } = data;
  if (users.length === 0) {
    return <Alert color="info">Geen resultaten</Alert>;
  }

  return <GithubUsersList users={users} onItemClick={onUserClick} />;
};

export default GithubResults;

import useGithubApi from "../../../../core/hooks/useGithubApi";
import Alert from "../../../Design/Alert/Alert";
import Loading from "../../../Design/Loading/Loading";
import GithubUsersList from "../List/GithubUsersList";

const GithubFollowers = ({ username }) => {
  const {
    isLoading,
    data: followers,
    error,
  } = useGithubApi(`/users/${username}/followers`);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Alert color="warning">{error}</Alert>;
  }

  if (followers.length === 0) {
    return <Alert color="info">No followers</Alert>;
  }

  return <GithubUsersList users={followers} />;
};

export default GithubFollowers;

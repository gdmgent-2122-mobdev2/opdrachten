import useGithubApi from "../../../../core/hooks/useGithubApi";
import Alert from "../../../Design/Alert/Alert";
import Loading from "../../../Design/Loading/Loading";
import GithubFollowers from "../Followers/GithubFollowers";

const GithubUser = ({ username }) => {
  const { isLoading, data: user, error } = useGithubApi(`/users/${username}`);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Alert color="warning">{error}</Alert>;
  }

  return (
    <>
      <h2>{user.login} </h2>
      <h3>Followers</h3>
      <GithubFollowers username={user.login} />
    </>
  );
};

export default GithubUser;

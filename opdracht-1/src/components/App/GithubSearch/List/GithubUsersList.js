import List from "../../../Design/List/List";
import ListItem from "../../../Design/List/ListItem";

const GithubUsersList = ({ users, onItemClick }) => {
  return (
    <List>
      {users.map((item) => (
        <ListItem
          key={item.login}
          onClick={onItemClick ? () => onItemClick(item) : null}
          name={item.login}
          img={item.avatar_url}
        />
      ))}
    </List>
  );
};

export default GithubUsersList;

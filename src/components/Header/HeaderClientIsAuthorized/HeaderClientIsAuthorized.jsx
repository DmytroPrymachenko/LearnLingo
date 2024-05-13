import { useSelector } from "react-redux";
import { selectUser } from "../../../store/selected";

const HeaderClientIsAuthorized = () => {
  const user = useSelector(selectUser);
  return <div>{user.name}</div>;
};

export default HeaderClientIsAuthorized;

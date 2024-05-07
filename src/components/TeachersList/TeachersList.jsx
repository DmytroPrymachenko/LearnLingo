import { TeachersListDiv, TeachersListUl } from "./TeachersList.Styles";

import { nanoid } from "nanoid";
import TeachersItem from "../TeachersItem/TeachersItem";

const TeachersList = ({ data }) => {
  console.log(data);

  return (
    <>
      <TeachersListDiv>
        <TeachersListUl>
          {data &&
            data.map((item) => <TeachersItem key={nanoid()} item={item} />)}
        </TeachersListUl>
        <button>Load more</button>
      </TeachersListDiv>
    </>
  );
};

export default TeachersList;

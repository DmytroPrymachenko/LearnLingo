// import { useState } from "react";
import { ModalTrialLessonDiv } from "./ModalTrialLesson.Styled";

const ModalTrialLesson = ({ item }) => {
  //   const [trialLesson, setTrialLesson] = useState(null);
  console.log(item);
  return (
    <ModalTrialLessonDiv>
      <div>
        <h1>Book trial lesson</h1>
        <span>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </span>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </ModalTrialLessonDiv>
  );
};

export default ModalTrialLesson;

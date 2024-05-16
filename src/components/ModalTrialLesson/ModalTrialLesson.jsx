// import { useState } from "react";
import { useState } from "react";
import {
  ModalTrialAvatarImg,
  ModalTrialLessonDiv,
} from "./ModalTrialLesson.Styled";

const ModalTrialLesson = ({ item }) => {
  const [trialLesson, setTrialLesson] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
  });
  console.log(trialLesson);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTrialLesson((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setTrialLesson((prevData) => ({
      ...prevData,
      reason: value,
    }));
  };

  return (
    <ModalTrialLessonDiv>
      <form>
        <h1>Book trial lesson</h1>
        <span>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </span>
        <div>
          <div>
            <ModalTrialAvatarImg src={item.avatar_url}></ModalTrialAvatarImg>
          </div>
          <div>
            <span>Your teacher</span>
            <span>
              {item.name} {item.surname}
            </span>
          </div>
        </div>
        <h2>What is your main reason for learning English?</h2>
        <ul>
          <li>
            <input
              type="radio"
              id="career"
              name="reason"
              value="Career and business"
              onChange={handleRadioChange}
            />
            <label htmlFor="career">Career and business</label>
          </li>
          <li>
            <input
              type="radio"
              id="Lesson"
              name="reason"
              value="Lesson for kids"
              onChange={handleRadioChange}
            />
            <label htmlFor="Lesson">Lesson for kids</label>
          </li>
          <li>
            <input
              type="radio"
              id="Living"
              name="reason"
              value="Living abroad"
              onChange={handleRadioChange}
            />
            <label htmlFor="Living">Living abroad</label>
          </li>
          <li>
            <input
              type="radio"
              id="Exams"
              name="reason"
              value="Exams and coursework"
              onChange={handleRadioChange}
            />
            <label htmlFor="Exams">Exams and coursework</label>
          </li>
          <li>
            <input
              type="radio"
              id="Culture"
              name="reason"
              value="Culture, travel or hobby"
              onChange={handleRadioChange}
            />
            <label htmlFor="Culture">Culture, travel or hobby</label>
          </li>
        </ul>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={trialLesson.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={trialLesson.email}
            onChange={handleInputChange}
          />
          <input
            type="phone"
            name="phone"
            placeholder="Your phone"
            value={trialLesson.phone}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Book</button>
      </form>
    </ModalTrialLessonDiv>
  );
};

export default ModalTrialLesson;

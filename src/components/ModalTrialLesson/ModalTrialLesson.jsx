// import { useState } from "react";
import { useState } from "react";
import {
  ModalTrialAvatarImg,
  ModalTrialLessonDiv,
} from "./ModalTrialLesson.Styled";
import { useForm } from "react-hook-form";

const ModalTrialLesson = ({ item }) => {
  const { register, handleSubmit, errors } = useForm();
  const [reason, setReason] = useState("");

  const handleRadioChange = (e) => {
    setReason(e.target.value);
  };

  const submit = (data) => {
    console.log(...data, reason);
  };

  return (
    <ModalTrialLessonDiv>
      <form onSubmit={handleSubmit(submit)}>
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
              ref={register({ required: true })}
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
              ref={register({ required: true })}
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
              ref={register({ required: true })}
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
              ref={register({ required: true })}
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
              ref={register({ required: true })}
            />
            <label htmlFor="Culture">Culture, travel or hobby</label>
          </li>
        </ul>
        {errors.reason && (
          <span>Please select a reason for learning English</span>
        )}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            ref={register({ required: true })}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your phone"
            ref={register({ required: true, pattern: /^[0-9]{10}$/ })}
          />
        </div>
        <button type="submit">Book</button>
      </form>
    </ModalTrialLessonDiv>
  );
};

export default ModalTrialLesson;

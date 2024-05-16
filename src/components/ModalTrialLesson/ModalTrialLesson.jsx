// import { useState } from "react";
import { useState } from "react";
import {
  ModalTrialAvatarImg,
  ModalTrialLessonDiv,
} from "./ModalTrialLesson.Styled";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  name: yup
    .string()
    .min(3, "The name must contain a min of 3 characters")
    .max(15, "The name must contain a maximum of 32 characters")
    .required("The name is required"),
  email: yup
    .string()
    .email("Please write a valid email")
    .matches(
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
    )
    .required("The email is required"),

  phone: yup
    .string()
    .matches(
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
      "Please enter a valid phone number"
    )
    .required("The phone number is required"),
  reason: yup.string().required("Необхідно вибрати"),
});

const ModalTrialLesson = ({ item }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  // const [reason, setReason] = useState("");
  const [value, setValue] = useState("");
  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const submit = ({ name, email, phone, reason }) => {
    const data = { name, email, phone, reason };
    console.log(data);
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
            {value === "Career and business" ? (
              <p>активна</p>
            ) : (
              <p>не активна</p>
            )}
            <input
              {...register("reason")}
              type="radio"
              id="career"
              value="Career and business"
              // checked
              onChange={handleRadioChange}
            />
            <span>{errors.reason?.message}</span>
            <label htmlFor="career">Career and business</label>
          </li>
          <li>
            <input
              {...register("reason")}
              type="radio"
              id="Lesson"
              // name="reason"
              value="Lesson for kids"
              onChange={handleRadioChange}
            />
            <label htmlFor="Lesson">Lesson for kids</label>
          </li>
          <li>
            <input
              {...register("reason")}
              type="radio"
              id="Living"
              value="Living abroad"
              onChange={handleRadioChange}
            />
            <label htmlFor="Living">Living abroad</label>
          </li>
          <li>
            <input
              {...register("reason")}
              type="radio"
              id="Exams"
              value="Exams and coursework"
              onChange={handleRadioChange}
            />
            <label htmlFor="Exams">Exams and coursework</label>
          </li>
          <li>
            <input
              {...register("reason")}
              type="radio"
              id="Culture"
              value="Culture, travel or hobby"
              onChange={handleRadioChange}
            />
            <label htmlFor="Culture">Culture, travel or hobby</label>
          </li>
        </ul>
        {errors.reason && (
          <span>Please select a reason for learning English</span>
        )}
        <div>
          <>
            <input
              {...register("name")}
              type="text"
              id="name"
              placeholder="Your name"
            />
            <span>{errors.name?.message}</span>
          </>
          <input
            {...register("email")}
            type="email"
            id="email"
            placeholder="Your email"
          />
          <>
            <input
              {...register("phone")}
              type="tel"
              id="phone"
              placeholder="Your phone"
            />
            <span>{errors.phone?.message}</span>
          </>
        </div>
        <button type="submit">Book</button>
      </form>
    </ModalTrialLessonDiv>
  );
};

export default ModalTrialLesson;

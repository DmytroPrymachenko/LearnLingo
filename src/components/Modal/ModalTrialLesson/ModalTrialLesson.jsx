// import { useState } from "react";
import { useState } from "react";
import {
  ModalTrialAvatarImg,
  ModalTrialAvatarNameDiv,
  ModalTrialAvatarTitleDiv,
  ModalTrialButton,
  ModalTrialExperienced,
  ModalTrialForm,
  ModalTrialH1,
  ModalTrialH2,
  ModalTrialInput,
  ModalTrialInputDiv,
  ModalTrialLessonDiv,
  ModalTrialNameSpan,
  ModalTrialSpanError,
  ModalTrialTitleDiv,
  ModalTrialYourTeacherSpan,
  RadioInput,
  RadioInputDiv,
  RadioInputIconDiv,
  RadioLabel,
  RadioLi,
  RadioUl,
} from "./ModalTrialLesson.Styled";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import RadioButtonInactive from "../../../images/svg/radioButton/RadioButtonInactive";
import RadioButtonActive from "../../../images/svg/radioButton/RadioButtonActive";

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
      <ModalTrialForm>
        <form onSubmit={handleSubmit(submit)}>
          <ModalTrialTitleDiv>
            <ModalTrialH1>Book trial lesson</ModalTrialH1>
            <ModalTrialExperienced>
              Our experienced tutor will assess your current language level,
              discuss your learning goals, and tailor the lesson to your
              specific needs.
            </ModalTrialExperienced>
            <ModalTrialAvatarTitleDiv>
              <div>
                <ModalTrialAvatarImg
                  src={item.avatar_url}
                ></ModalTrialAvatarImg>
              </div>
              <ModalTrialAvatarNameDiv>
                <ModalTrialYourTeacherSpan>
                  Your teacher
                </ModalTrialYourTeacherSpan>
                <ModalTrialNameSpan>
                  {item.name} {item.surname}
                </ModalTrialNameSpan>
              </ModalTrialAvatarNameDiv>
            </ModalTrialAvatarTitleDiv>
          </ModalTrialTitleDiv>
          <ModalTrialH2>
            What is your main reason for learning English?
          </ModalTrialH2>
          <RadioUl>
            <RadioLi>
              <RadioInputDiv>
                <RadioInputIconDiv>
                  {value === "Career and business" ? (
                    <RadioButtonActive />
                  ) : (
                    <RadioButtonInactive />
                  )}
                </RadioInputIconDiv>
                <RadioInput
                  {...register("reason")}
                  type="radio"
                  id="career"
                  value="Career and business"
                  // checked
                  onChange={handleRadioChange}
                />
              </RadioInputDiv>

              <RadioLabel htmlFor="career">Career and business</RadioLabel>
            </RadioLi>
            <RadioLi>
              <RadioInputDiv>
                <RadioInputIconDiv>
                  {value === "Lesson for kids" ? (
                    <RadioButtonActive />
                  ) : (
                    <RadioButtonInactive />
                  )}
                </RadioInputIconDiv>
                <RadioInput
                  {...register("reason")}
                  type="radio"
                  id="Lesson"
                  // name="reason"
                  value="Lesson for kids"
                  onChange={handleRadioChange}
                />
              </RadioInputDiv>
              <RadioLabel htmlFor="Lesson">Lesson for kids</RadioLabel>
            </RadioLi>
            <RadioLi>
              <RadioInputDiv>
                <RadioInputIconDiv>
                  {value === "Living abroad" ? (
                    <RadioButtonActive />
                  ) : (
                    <RadioButtonInactive />
                  )}
                </RadioInputIconDiv>
                <RadioInput
                  {...register("reason")}
                  type="radio"
                  id="Living"
                  value="Living abroad"
                  onChange={handleRadioChange}
                />
              </RadioInputDiv>
              <RadioLabel htmlFor="Living">Living abroad</RadioLabel>
            </RadioLi>
            <RadioLi>
              <RadioInputDiv>
                <RadioInputIconDiv>
                  {value === "Exams and coursework" ? (
                    <RadioButtonActive />
                  ) : (
                    <RadioButtonInactive />
                  )}
                </RadioInputIconDiv>
                <RadioInput
                  {...register("reason")}
                  type="radio"
                  id="Exams"
                  value="Exams and coursework"
                  onChange={handleRadioChange}
                />
              </RadioInputDiv>
              <RadioLabel htmlFor="Exams">Exams and coursework</RadioLabel>
            </RadioLi>
            <RadioLi>
              <RadioInputDiv>
                <RadioInputIconDiv>
                  {value === "Culture, travel or hobby" ? (
                    <RadioButtonActive />
                  ) : (
                    <RadioButtonInactive />
                  )}
                </RadioInputIconDiv>
                <RadioInput
                  {...register("reason")}
                  type="radio"
                  id="Culture"
                  value="Culture, travel or hobby"
                  onChange={handleRadioChange}
                />
              </RadioInputDiv>
              <RadioLabel htmlFor="Culture">
                Culture, travel or hobby
              </RadioLabel>
            </RadioLi>
          </RadioUl>
          <ModalTrialSpanError>{errors.reason?.message}</ModalTrialSpanError>
          <ModalTrialInputDiv>
            <>
              <ModalTrialInput
                {...register("name")}
                type="text"
                id="name"
                placeholder="Your name"
              />
              <ModalTrialSpanError>
                {errors.name?.message || ""}
              </ModalTrialSpanError>
            </>
            <>
              <ModalTrialInput
                {...register("email")}
                type="email"
                id="email"
                placeholder="Your email"
              />
              <ModalTrialSpanError>{errors.email?.message}</ModalTrialSpanError>
            </>
            <>
              <ModalTrialInput
                {...register("phone")}
                type="tel"
                id="phone"
                placeholder="Your phone"
              />
              <ModalTrialSpanError>{errors.phone?.message}</ModalTrialSpanError>
            </>
          </ModalTrialInputDiv>
          <ModalTrialButton type="submit">Book</ModalTrialButton>
        </form>
      </ModalTrialForm>
    </ModalTrialLessonDiv>
  );
};

export default ModalTrialLesson;

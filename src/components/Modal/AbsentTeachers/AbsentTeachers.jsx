import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AbsentTeachersDiv } from "./AbsentTeachers.Styled";

const AbsentTeachers = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(7);

  useEffect(() => {
    if (countdown <= 0) {
      if (location.pathname === "/favorites") {
        navigate("/teachers");
      } else if (location.pathname === "/teachers") {
        navigate("/");
      }
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, location.pathname, navigate]);

  return (
    <AbsentTeachersDiv>
      <>
        {location.pathname === "/favorites" ? (
          <>
            <h1>
              Hello, name! You haven&apos;t chose a favorite teacher. You will
              be redirected to the Teachers page in {countdown} seconds. Press
              the button to move faster.
            </h1>
            <Link
              to="/teachers"
              aria-label="Home teachers"
              style={{ textDecoration: "none" }}
            >
              Кнопка
            </Link>
          </>
        ) : location.pathname === "/teachers" ? (
          <>
            <h1>
              Hello, name! We&apos;re sorry, but a technical error occured.
              Service is unavaliable. Please, try again later. You will be
              redirected to the Main page in {countdown} seconds. Press the
              button to move faster.
            </h1>
            <Link
              to="/"
              aria-label="Home button"
              style={{ textDecoration: "none" }}
            >
              Кнопка
            </Link>
          </>
        ) : null}
      </>
    </AbsentTeachersDiv>
  );
};

export default AbsentTeachers;

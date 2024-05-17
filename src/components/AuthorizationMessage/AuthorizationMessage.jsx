import {
  AuthorizationDiv,
  AuthorizationMessageDiv,
} from "./AuthorizationMessage.Styled";

const AuthorizationMessage = ({ openModalLogin, openModalRegister }) => {
  return (
    <AuthorizationMessageDiv>
      <AuthorizationDiv>
        <h1>Привіт Друг!</h1>
        <span>
          Для можливості користування додатковими послугами сервісу необхідна
          авторизація
        </span>
        <button onClick={openModalLogin}>Залогінитись</button>
        <span>
          Друг у разі якщо ти ще не зареєструвався, рекомендуємо натиснути на цю
          кнопочку для реєстрації
          {/* <TapSVG /> */}
        </span>
        <button onClick={openModalRegister}>Реєстрація</button>
      </AuthorizationDiv>
    </AuthorizationMessageDiv>
  );
};

export default AuthorizationMessage;

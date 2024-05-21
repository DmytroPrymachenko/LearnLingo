import { Link } from "react-router-dom";
import HomePicture from "../../images/png/HomePicture";
import DottedLineHome from "../../images/svg/DottedLineHome";
import {
  HomeDivLeft,
  HomeDivTitle,
  HomeDottedLineDiv,
  HomeFrameLanguage,
  HomeStatisticsDiv,
  HomeStatisticsSpanNumber,
  HomeStatisticsSpanText,
  HomeStatisticsUl,
  HomeStatisticsli,
  HomeTitleButton,
  HomeTitleH1,
  HomeTitleSpan,
} from "./Home.Styled";

const Home = () => {
  return (
    <>
      <section>
        <HomeDivLeft>
          <HomeDivTitle>
            <HomeTitleH1>
              Unlock your potential with the best
              <HomeFrameLanguage>language</HomeFrameLanguage> tutors
            </HomeTitleH1>
            <HomeTitleSpan>
              Embark on an Exciting Language Journey with Expert Language
              Tutors: Elevate your language proficiency to new heights by
              connecting with highly qualified and experienced tutors.
            </HomeTitleSpan>
            <Link to="/teachers">
              <HomeTitleButton>Get started</HomeTitleButton>
            </Link>
          </HomeDivTitle>
          <div>
            <HomePicture />
          </div>
        </HomeDivLeft>
      </section>
      <section>
        <HomeStatisticsDiv>
          <HomeDottedLineDiv>
            <DottedLineHome />
          </HomeDottedLineDiv>
          <HomeStatisticsUl>
            <HomeStatisticsli>
              <HomeStatisticsSpanNumber>32,000 +</HomeStatisticsSpanNumber>
              <HomeStatisticsSpanText>
                Experienced tutors
              </HomeStatisticsSpanText>
            </HomeStatisticsli>
            <HomeStatisticsli>
              <HomeStatisticsSpanNumber>300,000 +</HomeStatisticsSpanNumber>
              <HomeStatisticsSpanText>
                5-star tutor reviews
              </HomeStatisticsSpanText>
            </HomeStatisticsli>
            <HomeStatisticsli>
              <HomeStatisticsSpanNumber>120 +</HomeStatisticsSpanNumber>
              <HomeStatisticsSpanText>Subjects taught</HomeStatisticsSpanText>
            </HomeStatisticsli>
            <HomeStatisticsli>
              <HomeStatisticsSpanNumber>200 +</HomeStatisticsSpanNumber>
              <HomeStatisticsSpanText>
                Tutor nationalities
              </HomeStatisticsSpanText>
            </HomeStatisticsli>
          </HomeStatisticsUl>
        </HomeStatisticsDiv>
      </section>
    </>
  );
};

export default Home;

import style from "./step.module.scss";
import Header from "../../widgets/Header/Header";
import StepCard from "../../shared/ui/StepCard/StepCard";
import RoundedLabel from "../../shared/ui/RoundedLabel/RoundedLabel";
import word from "./assets/word.png";
import sentence from "./assets/sentence.png";
import dictation from "./assets/dictation.png";
import antonym from "./assets/antonym.png";
import { useNavigate } from "react-router-dom";

const Step1 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <section className={style["step-container"]}>
        <RoundedLabel text="1단계" />
        <div className={style["card-container"]}>
          <StepCard
            imageSrc={word}
            title={"단어 맞추기"}
            onClick={() => navigate("/word")}
          />
          <StepCard
            imageSrc={sentence}
            title={"문장 순서 맞추기"}
            onClick={() => navigate("/sentence")}
          />
          <StepCard
            imageSrc={dictation}
            title={"받아쓰기"}
            onClick={() => navigate("/dictation")}
          />

          <StepCard imageSrc={antonym} title={"반의어 찾기"} />
        </div>
      </section>
    </div>
  );
};

export default Step1;

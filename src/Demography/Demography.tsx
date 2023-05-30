import { useAppContext } from "src/App";
import MaleSymbol from "./Resource/male-symbol.png";
import FemaleSymbol from "./Resource/female-symbol.png";
import "./demography.css";

/**
 * 이벤트 참여자 인구통계 정보 수집 페이지
 * @author 현웅
 */
export const Demography = () => {
  const { goNextStep, input } = useAppContext();

  const genderButtonValues: {
    gender: "MALE" | "FEMALE";
    src: string;
  }[] = [
    { gender: "MALE", src: MaleSymbol },
    { gender: "FEMALE", src: FemaleSymbol },
  ];

  const ageGroupButtonValues: { text: string; ageGroup: string }[] = [
    { text: "10대", ageGroup: "TEEN" },
    { text: "20대", ageGroup: "TWENTY" },
    { text: "30대", ageGroup: "THIRTY" },
    { text: "40대", ageGroup: "FOUTY" },
    { text: "50대", ageGroup: "FIFTY" },
    { text: "60대", ageGroup: "SIXTY" },
  ];

  const showNextStepButton = input.gender && input.ageGroup;

  return (
    <div className="global-container">
      <div style={{ flex: 1 }}></div>

      {/* 성별 선택 */}
      <div className="global-row demog__row" style={{ flex: 5, gap: 160 }}>
        {genderButtonValues.map((value) => (
          <GenderButton key={value.gender} {...value} />
        ))}
      </div>

      {/* 나이대 선택 */}
      <div className="global-row demog__row" style={{ flex: 3, gap: 64 }}>
        {ageGroupButtonValues.map((value) => (
          <AgeGroupButton
            key={value.text}
            text={value.text}
            ageGroup={value.ageGroup}
          />
        ))}
      </div>

      {/* 다음 단계 넘어가기 (성별, 나이대 선택 시에만 활성화) */}
      <div className="global-row demog__row" style={{ flex: 1 }}>
        <div
          className={`demog__button start ${
            !showNextStepButton && "invisible"
          }`}
          onClick={goNextStep}
        >{`테스트 시작하기!`}</div>
      </div>

      <div style={{ flex: 1 }}></div>
    </div>
  );
};

const GenderButton = ({
  gender,
  src,
}: {
  gender: "MALE" | "FEMALE";
  src: string;
}) => {
  const { input, updateInput } = useAppContext();

  const onClick = () => {
    updateInput({ gender });
  };

  const className = () => {
    if (!input.gender) return "";
    return input.gender === gender ? "selected" : "unselected";
  };

  return (
    <div
      id={gender}
      className={`demog__button gender ${className()}`}
      onClick={onClick}
    >
      <img className={`demog__image gender`} src={src} />
    </div>
  );
};

const AgeGroupButton = ({
  text,
  ageGroup,
}: {
  text: string;
  ageGroup: string;
}) => {
  const { input, updateInput } = useAppContext();

  const onClick = () => {
    updateInput({ ageGroup });
  };

  return (
    <div
      className={`demog__button ageGroup ${
        input.ageGroup === ageGroup && "selected"
      }`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

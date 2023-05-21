import { useAppContext } from "src/App";
import "./demography.css";

/**
 * 이벤트 참여자 인구통계 정보 수집 페이지
 * @author 현웅
 */
export const Demography = () => {
  const { goNextStep, input } = useAppContext();

  const genderButtonValues: { text: string; gender: "MALE" | "FEMALE" }[] = [
    { text: "남성", gender: "MALE" },
    { text: "여성", gender: "FEMALE" },
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
    <div className="demog container">
      {/* 성별 선택 */}
      <div className="demog row">
        {genderButtonValues.map((value) => (
          <GenderButton
            key={value.text}
            text={value.text}
            gender={value.gender}
          />
        ))}
      </div>

      {/* 나이대 선택 */}
      <div className="demog row">
        {ageGroupButtonValues.map((value) => (
          <AgeGroupButton
            key={value.text}
            text={value.text}
            ageGroup={value.ageGroup}
          />
        ))}
      </div>

      {/* 다음 단계 넘어가기 (성별, 나이대 선택 시에만 활성화) */}
      <div className="demog row">
        <div
          className={`demog item ${!showNextStepButton && "invisible"}`}
          onClick={goNextStep}
        >{`나의 선호는 미각에 기반한걸까?\n확인해보기!`}</div>
      </div>
    </div>
  );
};

const GenderButton = ({
  text,
  gender,
}: {
  text: string;
  gender: "MALE" | "FEMALE";
}) => {
  const { input, updateInput } = useAppContext();

  const onClick = () => {
    updateInput({ gender });
  };

  return (
    <div
      className={`demog item ${input.gender === gender && "selected"}`}
      onClick={onClick}
    >
      {text}
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
      className={`demog item ${input.ageGroup === ageGroup && "selected"}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

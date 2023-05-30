import { useAppContext } from "src/App";
import "./preference.css";

/**
 * 이벤트 첫 단계. 선호하는 음료 선택 페이지
 * @author 현웅
 */
export const Preference = () => {
  const { goNextStep, updateInput } = useAppContext();

  const onPressCoke = () => {
    goNextStep();
    updateInput({ preference: "COKE" });
  };
  const onPressPepsi = () => {
    goNextStep();
    updateInput({ preference: "PEPSI" });
  };

  return (
    <div
      className="global-container"
      style={{
        position: "relative",
        flexDirection: "row",
      }}
    >
      {/* 제목 부분 */}
      <div className="pref__title positioner">
        <div className="pref__title container">
          <span className="pref__title text">당신의 선택은?</span>
        </div>
      </div>

      {/* 선택 부분 */}
      <div className="pref__button" id="coke" onClick={onPressCoke}>
        코카콜라
      </div>
      <div className="pref__button" id="pepsi" onClick={onPressPepsi}>
        펩시
      </div>
    </div>
  );
};

import { useAppContext } from "src/App";
import CocaCola from "src/Resource/coca-cola.png";
import Pepsi from "src/Resource/pepsi.png";
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
      className="global-container pref__container"
      style={{
        position: "relative",
        flexDirection: "row",
      }}
    >
      {/* 제목 부분 */}
      <div className="pref__title positioner">
        <div className="pref__title container">
          <span className="pref__title text">더 맛있는 콜라는 어느쪽?</span>
        </div>
      </div>

      {/* 선택 부분 */}
      <div className="pref__button area" onClick={onPressCoke}>
        <div className="pref__button container">
          <img className="pref__image" id="coke" src={CocaCola} />
          <h1 className="pref__button text">
            Since 1886!
            <br />
            전통강자 근본의 코카콜라
          </h1>
        </div>
      </div>

      <div className="pref__button area" onClick={onPressPepsi}>
        <div className="pref__button container">
          <img className="pref__image" id="pepsi" src={Pepsi} />
          <span className="pref__button text">
            코카콜라의 명성은 마케팅!
            <br />
            실용주의 펩시
          </span>
        </div>
      </div>
    </div>
  );
};

import { useAppContext } from "src/App";
import "./preference.css";

/**
 * 이벤트 첫 단계. 선호하는 음료 선택 페이지
 * @author 현웅
 */
export const Preference = () => {
  const { goNextStep } = useAppContext();

  return (
    <div>
      <span>Preference</span>
      <button onClick={goNextStep}>다음 단계</button>
    </div>
  );
};

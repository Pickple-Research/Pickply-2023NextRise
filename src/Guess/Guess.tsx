import { useAppContext } from "src/App";
import "./guess.css";

/**
 * 시음한 음료 맞추는 페이지
 * @author 현웅
 */
export const Guess = () => {
  const { goNextStep } = useAppContext();

  return (
    <div>
      <span>Guess</span>
      <button onClick={goNextStep}>다음 단계</button>
    </div>
  );
};

import { useEffect } from "react";
import { useAppContext } from "src/App";
import "./loading.css";

/**
 * 시음한 음료 선택 후 결과 나오기 전 로딩 화면
 * @author 현웅
 */
export const Loading = () => {
  const { goNextStep } = useAppContext();

  useEffect(() => {
    setTimeout(goNextStep, 2400);
  }, []);

  return (
    <div
      className="global-container"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <img
        className="result__image"
        src="https://media.tenor.com/TU_NPEczh6gAAAAd/nervous-waiting.gif"
        alt="waiting nervous..."
      />
      {/* https://media.tenor.com/XnsTR7efvvQAAAAC/anxious-waiting.gif */}
      {/* https://media1.giphy.com/media/SFTwIa20m0Kg9WoDxA/giphy.gif */}
      {/* https://media.tenor.com/AVfr3NUQSJgAAAAM/sweating-intense-sweating.gif */}

      <span className="result__text">두구두구...</span>
    </div>
  );
};

import { useEffect } from "react";
import { useAppContext } from "src/App";
import "./standBy.css";

/**
 * 결과 발표 전 대기 페이지
 * @author 현웅
 */
export const StandBy = () => {
  const { goNextStep } = useAppContext();

  useEffect(() => {
    document.addEventListener("keydown", goNextStep);

    return () => {
      document.removeEventListener("keydown", goNextStep);
    };
  }, []);

  return (
    <div className="standBy container">버튼을 눌러 결과를 확인하세요!</div>
  );
};

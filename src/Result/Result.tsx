import { useAppContext } from "src/App";
import "./result.css";

/**
 * 블라인드 테스트 결과 페이지
 * @author 현웅
 */
export const Result = () => {
  const { goNextStep } = useAppContext();

  return (
    <div>
      <span>Result</span>
      <button onClick={goNextStep}>다음 단계</button>
    </div>
  );
};

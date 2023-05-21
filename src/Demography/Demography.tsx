import { useAppContext } from "src/App";
import "./demography.css";

/**
 * 이벤트 참여자 인구통계 정보 수집 페이지
 * @author 현웅
 */
export const Demography = () => {
  const { goNextStep, updateInput } = useAppContext();

  return (
    <div>
      <span>Demography</span>
      <button onClick={goNextStep}>다음 단계</button>
    </div>
  );
};

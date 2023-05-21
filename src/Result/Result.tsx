import { useAppContext } from "src/App";
import "./result.css";

/**
 * 블라인드 테스트 결과 페이지
 * @author 현웅
 */
export const Result = () => {
  const { goNextStep } = useAppContext();

  return (
    <div className="result container">
      <div className="result__content container">
        <Content />
      </div>

      <div className="result__button" onClick={goNextStep}>
        처음으로 돌아가기
      </div>
    </div>
  );
};

const Content = () => {
  const { input } = useAppContext();

  if (input.preference === "COKE") {
    if (input.selection === "COKE") {
      return (
        <span>{`역시 근본은 코카콜라지!\n콜잘알 픽플러님 축하드립니다!`}</span>
      );
    }
    if (input.selection === "PEPSI") {
      return (
        <span>{`부끄러워 하지 않아도 됩니다.\n펩시가 더 맛있는 걸 어쩌겠어요?`}</span>
      );
    }
  }

  if (input.preference === "PEPSI") {
    if (input.selection === "COKE") {
      return (
        <span>{`부끄러워 하지 않아도 됩니다.\n코카콜라가 더 맛있는 걸 어쩌겠어요?`}</span>
      );
    }
    if (input.selection === "PEPSI") {
      return (
        <span>{`역시 콜라는 펩시지~\n콜잘알 픽플러님 축하드립니다!`}</span>
      );
    }
  }

  return null;
};

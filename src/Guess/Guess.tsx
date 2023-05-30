import { useEffect } from "react";
import { useAppContext } from "src/App";
import "./guess.css";

/**
 * 시음한 음료 중 더 맛있었던 음료 선택 페이지
 * @author 현웅
 */
export const Guess = () => {
  const { goNextStep, updateInput } = useAppContext();

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key.toUpperCase() === "R") {
      updateInput({ selection: "COKE" });
      goNextStep();
    }
    if (e.key.toUpperCase() === "B") {
      updateInput({ selection: "PEPSI" });
      goNextStep();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className="global-container"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <img
        className="guess__image"
        style={{ width: "50%" }}
        src={
          "https://www.shutterstock.com/image-photo/portrait-elegant-senior-sommelier-on-260nw-1793378884.jpg"
        }
      />
      <span className="guess__content">
        충분히 고민하셨나요? 더 맛있었던 쪽의 버튼을 눌러주세요!
      </span>
    </div>
  );
};

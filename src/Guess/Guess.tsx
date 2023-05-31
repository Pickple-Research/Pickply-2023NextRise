import { useEffect } from "react";
import axios from "axios";
import { useAppContext } from "src/App";
import "./guess.css";

/**
 * 시음한 음료 중 더 맛있었던 음료 선택 페이지
 * @author 현웅
 */
export const Guess = () => {
  const { input, goNextStep, updateInput } = useAppContext();

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key.toUpperCase() === "R") {
      axios.request({
        method: "POST",
        url: "https://api.pickply.com/marketing/nextrise",
        headers: { "Acess-Control-Allow-Origin": "*" },
        data: { ...input, selection: "COKE" },
      });
      updateInput({ selection: "COKE" });
      goNextStep();
    }
    if (e.key.toUpperCase() === "B") {
      axios.request({
        method: "POST",
        url: "https://api.pickply.com/marketing/nextrise",
        headers: { "Acess-Control-Allow-Origin": "*" },
        data: { ...input, selection: "PEPSI" },
      });
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
          "https://st2.depositphotos.com/1468291/6867/i/600/depositphotos_68672715-stock-photo-couple-at-wine-tasting.jpg"
        }
      />
      <span className="guess__content">
        충분히 고민하셨나요? 더 맛있었던 쪽의 버튼을 눌러주세요!
      </span>
    </div>
  );
};

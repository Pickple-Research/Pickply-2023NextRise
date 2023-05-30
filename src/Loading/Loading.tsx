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
    setTimeout(goNextStep, 3200);
  }, []);

  const images = [
    "https://media.tenor.com/TU_NPEczh6gAAAAd/nervous-waiting.gif",
    "https://media1.giphy.com/media/nWxjCm3xxXLKKrpSAa/200w.gif?cid=6c09b95205r7z1yb39s5e3592vqn2ycbgsfelklfzhzru5gd&ep=v1_gifs_search&rid=200w.gif&ct=g",
    "https://gifdb.com/images/file/twiddling-thumbs-waiting-tina-fey-anxious-n0r5no4qwwjdpamv.gif",
    "https://media.tenor.com/ivOak2EP_IQAAAAC/nervous-anxious.gif",
    "https://media1.giphy.com/media/SFTwIa20m0Kg9WoDxA/giphy.gif",
    "https://i.kym-cdn.com/photos/images/newsfeed/001/485/098/245.gif",
  ];

  return (
    <div
      className="global-container"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <img
        className="result__image"
        src={images[Math.floor(Math.random() * images.length)]}
        alt="waiting nervous..."
      />

      <span className="result__text">두구두구...</span>
    </div>
  );
};

import { useAppContext } from "./App.provider";
import { Preference } from "src/Preference";
import { Demography } from "src/Demography";
import { Guess } from "src/Guess";
import { Loading } from "src/Loading";
import { StandBy } from "src/StandBy";
import { Result } from "src/Result";
import "./app.css";

export const AppContainer = () => {
  const { step } = useAppContext();

  const RenderStep = () => {
    switch (step) {
      case "PREFERENCE":
        return <Preference />;
      case "DEMOGRAPHY":
        return <Demography />;
      case "GUESS":
        return <Guess />;
      case "LOADING":
        return <Loading />;
      case "STANDBY":
        return <StandBy />;
      case "RESULT":
        return <Result />;
    }
  };

  return (
    <div className="global-container">
      <RenderStep />
    </div>
  );
};

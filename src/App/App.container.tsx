import { useAppContext } from "./App.provider";
import { Preference } from "src/Preference";
import { Demography } from "src/Demography";
import { Guess } from "src/Guess";
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
      case "RESULT":
        return <Result />;
    }
    return null;
  };

  return (
    <div className="app_container">
      <RenderStep />
    </div>
  );
};

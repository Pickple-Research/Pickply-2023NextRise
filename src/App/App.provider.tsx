import { useContext, createContext, useState } from "react";

type Step = "PREFERENCE" | "DEMOGRAPHY" | "GUESS" | "RESULT";
const allSteps: Step[] = ["PREFERENCE", "DEMOGRAPHY", "GUESS", "RESULT"];

type Input = {
  preference: "COKE" | "PEPSI" | undefined;
  gender: "MALE" | "FEMALE" | undefined;
  age: number | undefined;
};

export const AppContext = createContext({
  step: "PREFERENCE",
  goNextStep: () => {},
  updateInput: (key: keyof Input, value: Input[keyof Input]) => {},
});

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }: { children: any }) => {
  /** 이벤트 진행 단계 */
  const [step, setStep] = useState<Step>("PREFERENCE");
  const [input, setInput] = useState<Input>({
    preference: undefined,
    gender: undefined,
    age: undefined,
  });

  const goNextStep = () => {
    const nextStepIndex = allSteps.indexOf(step) + 1;
    if (nextStepIndex < allSteps.length) {
      setStep(allSteps[nextStepIndex]);
      return;
    }
    setStep("PREFERENCE");
    setInput({
      preference: undefined,
      gender: undefined,
      age: undefined,
    });
  };

  const updateInput = (key: keyof Input, value: Input[keyof Input]) => {
    setInput({ ...input, [key]: value });
  };

  const appContext = {
    step,
    goNextStep,
    updateInput,
  };

  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
};

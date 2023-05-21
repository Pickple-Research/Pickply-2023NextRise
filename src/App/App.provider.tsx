import { useContext, createContext, useState } from "react";

type Step = "PREFERENCE" | "DEMOGRAPHY" | "GUESS" | "LOADING" | "RESULT";
const allSteps: Step[] = [
  "PREFERENCE",
  "DEMOGRAPHY",
  "GUESS",
  "LOADING",
  "RESULT",
];

type Option = "COKE" | "PEPSI" | undefined;

type Input = {
  preference: Option;
  selection: Option;
  gender: "MALE" | "FEMALE" | undefined;
  ageGroup: string | undefined;
};

type AppContextType = {
  step: Step;
  goNextStep: () => void;
  input: Input;
  updateInput: (updatedInput: Partial<Input>) => void;
};

export const AppContext = createContext<AppContextType>({
  step: "PREFERENCE",
  goNextStep: () => {},
  input: {
    preference: undefined,
    selection: undefined,
    gender: undefined,
    ageGroup: undefined,
  },
  updateInput: (updatedInput: Partial<Input>) => {},
});

export const useAppContext = () => useContext(AppContext);

/**
 * 앱 전체에서 사용할 컨텍스트를 제공합니다.
 * @author 현웅
 */
export const AppProvider = ({ children }: { children: any }) => {
  /** 이벤트 진행 단계 */
  const [step, setStep] = useState<Step>("PREFERENCE");
  const [input, setInput] = useState<Input>({
    preference: undefined,
    selection: undefined,
    gender: undefined,
    ageGroup: undefined,
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
      selection: undefined,
      gender: undefined,
      ageGroup: undefined,
    });
  };

  const updateInput = (updatedInput: Partial<Input>) => {
    setInput({ ...input, ...updatedInput });
  };

  const appContext = {
    step,
    goNextStep,
    input,
    updateInput,
  };

  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
};

import { AppProvider } from "./App.provider";
import { AppContainer } from "./App.container";

export const App = () => {
  return (
    <AppProvider>
      <AppContainer />
    </AppProvider>
  );
};

import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ThemeContext } from "./context/theme";
import { ArticlesProvider } from "./context/articles/context";
import { TeamsProvider } from "./context/teams/context";
import { PreferencesProvider } from "./context/preferences/context";
import { MatchesProvider } from "./context/matches/context";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`h-screen w-full mx-auto py-2 ${
        theme === "dark" ? "dark" : ""
      }`}
    >
      <ArticlesProvider>
        <TeamsProvider>
          <MatchesProvider>
            <PreferencesProvider>
              <RouterProvider router={router} />
            </PreferencesProvider>
          </MatchesProvider>
        </TeamsProvider>
      </ArticlesProvider>
    </div>
  );
};
export default App;

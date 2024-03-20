import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ThemeContext } from "./context/theme";
import { ArticlesProvider } from "./context/articles/context";
import { TeamsProvider } from "./context/teams/context";
import { PreferencesProvider } from "./context/preferences/context";
import { MatchesProvider } from "./context/matches/context";
import "./i18n"
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://5870d3cad95f022e4c80a2c8a586a2d4@o4505114365001728.ingest.us.sentry.io/4506931357483008",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["http://localhost:5173/", import.meta.env.PRODUCTION_URL],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

function shakeIt() {
  return "I do nothing"
}

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

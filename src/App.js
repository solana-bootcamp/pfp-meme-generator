import "./App.css";
import Home from "./Home";
import Auth from "./Auth";
import { DynamicContextProvider} from "@dynamic-labs/sdk-react";

function App() {

  return (
    <DynamicContextProvider
      settings={{
        environmentId: "82f0f545-b18f-45f4-9b54-8793b95849cb",
        initialAuthenticationMode: "connect-and-sign",
        multiWallet: false,
        onAuthSuccess: ({ authToken, user }) => {
          return (
              <div>
                <Home user={user} />
              </div>
          );
          /// Your logic goes here....
          // API calls, window.location.assign('/success'), etc.
        },
      }}
    >
      <Home />
    </DynamicContextProvider>
  );
}

export default App;

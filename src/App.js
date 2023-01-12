import "./App.css";
import Auth from "./Auth";
import { DynamicContextProvider} from "@dynamic-labs/sdk-react";

function App() {

  return (
      <DynamicContextProvider
        settings={{
          environmentId: "82f0f545-b18f-45f4-9b54-8793b95849cb",
          initialAuthenticationMode: "connect-and-sign",
          multiWallet: false,
        }}
        >
        <Auth />
      </DynamicContextProvider>
  );
}

export default App;

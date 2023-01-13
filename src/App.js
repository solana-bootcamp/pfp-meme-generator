import "./styles/App.css";
import Nav from "./Nav";
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
            <Nav />
      </DynamicContextProvider>
  );
}

export default App;

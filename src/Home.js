import { useDynamicContext, DynamicWidget } from "@dynamic-labs/sdk-react";
import { useState, useEffect } from "react";
import "./Home.css";
import { useForm } from "react-hook-form";
import UpdatedGallery from "./components/UpdatedGallery";
import Nav from "./Nav";
import Generator from "./pages/Generator";

// DEPLOY ME

function Home() {
  const [currentwallet, setCurrentWallet] = useState(null);


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const onSubmit = () => {
  //   navigate('./edit', {state: {
  //     backgroundImageURL: "https://scaleflex.airstore.io/demo/stephen-walker-unsplash.jpg", 
  //     pfpImageURL: "https://scaleflex.airstore.io/demo/stephen-walker-unsplash.jpg", 
  //     text: "hey"
  //   }})
  // }

  return (
      <div className="Homer">
        <div className="Home-header">
          <p className="pw">WARETA</p>
          <div className="button">
          <DynamicWidget/>
          </div>
        </div>
        <Generator />
      </div>
  );
}

export default Home;

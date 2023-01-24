import { useDynamicContext } from "@dynamic-labs/sdk-react";
import { useState, useEffect } from "react";
import "../styles/Generator.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Feed from "./Feed";
import BackgroundTemplates from "../components/BackgroundTemplates";
import get_nfts from "../utils/get_nfts";
import TabPicker from "../components/TabPicker";

function Generator() {
  const navigate = useNavigate();

  const [currentwallet, setCurrentWallet] = useState(null);
  const [owned_NFTs, set_owned_NFTs] = useState("");
  const [selectedNFTImage, setSelectedNFTImage] = useState("");
  const [selectedNFTBackgroundImage, setSelectedNFTBackgroundImage] = useState(
    []
  );

  const [isOGActive, setIsOGActive] = useState(true);
  const [isAIActive, setIsAIActive] = useState(false);
  const [isCustomActive, setIsCustomActive] = useState(false);

  const {
    user,
    handleLogOut,
    setShowAuthFlow,
    showAuthFlow,
    walletConnector,
    authToken,
  } = useDynamicContext();

  useEffect(() => {
    if (user.walletPublicKey != null) {
      const fetch_NFTs = async () => {
        try {
          // let testaddress = "Ee6rCpsPJkEQZbNMv3itLP7s71rRSyWedYHQphn7MwKn"
          setCurrentWallet(user.walletPublicKey);
          if (owned_NFTs === "") {
            const nfts2 = await get_nfts(user.walletPublicKey);
            set_owned_NFTs(nfts2);
          }
        } catch (error) {
          console.log(error);
        }
      };
      fetch_NFTs();
      console.log(owned_NFTs);
    }
  }, [user, walletConnector]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleNFTCallback = (childData) => {
    setSelectedNFTImage(childData);
    console.log("Called Callback!");
    console.log("selected: " + JSON.stringify(childData));
  };

  const setTabs = (ogstatus, aistatus, customstatus) => {
    setIsOGActive(ogstatus);
    setIsAIActive(aistatus);
    setIsCustomActive(customstatus);
  };

  return (
    <div>
      <div className="leftcolumn">
        <div>
          <p className="title">MEME GENERATOR</p>
        </div>
        <div className="Generator-body">
          <div className="button-group">
            <button
              className={isOGActive ? "activeTabButton" : "inactiveTabButton"}
              onClick={() => setTabs(true, false, false)}
            >
              <p>OG</p>
            </button>
            <button
              className={isAIActive ? "activeTabButton" : "inactiveTabButton"}
              onClick={() => setTabs(false, true, false)}
            >
              <p>AI</p>
            </button>

            <button
              className={
                isCustomActive ? "activeTabButton" : "inactiveTabButton"
              }
              onClick={() => setTabs(false, false, true)}
            >
              <p>CUSTOM</p>
            </button>
          </div>
          <TabPicker
            handleNFTCallback={handleNFTCallback}
            owned_NFTs={owned_NFTs}
            isOGActive={isOGActive}
            isAIActive={isAIActive}
            isCustomActive={isCustomActive}
          />
        </div>
      </div>
      <div className="rightcolumn">
        <Feed currentwallet={user.walletPublicKey} />
      </div>
    </div>
  );
}

export default Generator;

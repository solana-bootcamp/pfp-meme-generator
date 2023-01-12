import { useDynamicContext, DynamicWidget } from "@dynamic-labs/sdk-react";
import { useState, useEffect } from "react";
import "./Home.css";
import { Box, Select, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

function Home() {
  // const {
  //   user,
  //   handleLogOut,
  //   setShowAuthFlow,
  //   showAuthFlow,
  //   walletConnector,
  //   authToken,
  // } = useDynamicContext();

  // const [currentwallet, setCurrentWallet] = useState(null);

  // useEffect(() => {
  //   if (user.walletPublicKey != null) {
  //     setCurrentWallet(user.walletPublicKey);
  //   }
  // }, [user.walletPublicKey]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="Homer">
      <Box w="100%" bg="#ED1C24" className="Home-header">
        <p className="p">WARETA</p>
        {/* <DynamicWidget className="logout-button"/> */}
      </Box>
      <Box className="Home-body">
        <Box className="form-widget">
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="p2">WARETA</p>
{/* 
            <div>
              <div className="Gallery"></div>
              <div className="Gallery-header">
                <p>Choose your NFT</p>
              </div>
            </div> */}
            <div>
              <Select placeholder="Select option">
                <option value="option1">Deep Fry</option>
                <option value="option2">Pixelate</option>
              </Select>{" "}
            </div>
            <div>
              <Input type="submit" />
            </div>
          </form>
        </Box>
      </Box>
    </div>
  );
}

export default Home;

import {useEffect, useContext} from 'react';
import {LoginButtonS} from '../../style/components/Header';
import useArConnect from 'use-arconnect';
import {ctx} from '../../utils';
import GlobalAccountButton from './GlobalAccountButton';

const arConnectPermissions = [
  "ACCESS_ADDRESS",
  "ACCESS_ALL_ADDRESSES",
  "SIGN_TRANSACTION",
];

function LoginButton() {
  const arConnect = useArConnect();
  const {walletAddr, setWalletAddr} = useContext(ctx);

  useEffect(() => {
    if (!arConnect) return;
    (async () => {
      try {
        if ((await arConnect.getPermissions()).includes("ACCESS_ADDRESS")) {
          setWalletAddr(await arConnect.getActiveAddress());
        }
      } catch {
        alert("Error: Could not get ACCESS_ADDRESS permission");
      }
    })();
  }, [arConnect, walletAddr, setWalletAddr]);

  const connectWallet = async () => {
    if (!arConnect) return window.open("https://arconnect.io");
    try {
      await arConnect.connect(arConnectPermissions);
      setWalletAddr(await arConnect.getActiveAddress());
    } catch {
      alert("Error: Could not connect to ArConnect");
    }
  };
  

  return(
    walletAddr === ""
    ? <LoginButtonS variant="outlined" color="inherit" onClick={connectWallet}>
        {arConnect ? "Log In" : "Sign up"} 
      </LoginButtonS>
    : <GlobalAccountButton />
  );
}

export default LoginButton;

import { useMemo } from "react";
import "./App.css"
import {Route, BrowserRouter} from "react-router-dom"
import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from "@solana/wallet-adapter-wallets";
import {WalletDialogButton} from "@solana/wallet-adapter-material-ui"
import {
  ConnectionProvider,
  WalletProvider,
  useWallet,
} from "@solana/wallet-adapter-react";
import "bootstrap/dist/css/bootstrap.min.css"
import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Registry from './pages/Registry'
import Home from './pages/Home'
const treasury = new anchor.web3.PublicKey(
  process.env.REACT_APP_TREASURY_ADDRESS!
);

const config = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_CONFIG!
);

const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID!
);

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)


const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
        getPhantomWallet(),
        getSlopeWallet(),
        getSolflareWallet(),
        getSolletWallet({ network }),
        getSolletExtensionWallet({ network })
    ],
    []
  );
const wallet=useWallet()
  return (<>
    
      
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect={true}>
            <WalletDialogProvider>
             
             
             <BrowserRouter>
             
               <Route exact path="/" component={()=><Home/>} />             
               <Route path="/registry" component={()=><Registry candyMachineId={candyMachineId}
               config ={config} connection={connection} startDate={startDateSeed} treasury={treasury} 
                txTimeout={txTimeout}
               />} />
               </BrowserRouter>
              
            </WalletDialogProvider>
          </WalletProvider>
        </ConnectionProvider>
      
</>
  );
};

export default App;

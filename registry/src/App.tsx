
import { useMemo } from "react";
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
import {
  ConnectionProvider,
  WalletProvider,
  useAnchorWallet,
} from "@solana/wallet-adapter-react";
import "bootstrap/dist/css/bootstrap.min.css"
import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import Registry from './pages/Registry'
import Home from './pages/Home'
import { NewProject } from "./pages/NewProject";
import React from "react"
import Signup from "./components/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./context/AuthContext"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"
import UpdateProfile from "./components/UpdateProfile"
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
const wallet=useAnchorWallet()
  return (<>
    
      
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect={true}>
            <WalletDialogProvider>
            <AuthProvider>
             <Router>
               <Switch>
             <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
               <Route exact path="/" component={()=><Home/>} />  
               <Route path="/submitAProject" component={
                 ()=><NewProject wallet={
                   wallet 
                  }connection={connection}/>
                   }
                   />
                 
                   
                 
              
               <Route path="/registry" component={()=><Registry candyMachineId={candyMachineId}
               config ={config} connection={connection} startDate={startDateSeed} treasury={treasury} 
                txTimeout={txTimeout}
               />} />
               <Route path="/signup" component={()=><Signup/>}/>
               <Route path="/login" component={()=><Login/>}/>
               </Switch>
               </Router>   
               </AuthProvider>
            </WalletDialogProvider>
          </WalletProvider>
        </ConnectionProvider>
      
</>
  );
};

export default App;

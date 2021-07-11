
import './App.css';
import { ethers } from 'ethers'
import { useState, useEffect, useCallback  } from 'react'
import contractAbi from './abi';

function App() {
  const contractAddress = '0xD470D600A255DBa6aCc6F2259B044aCD5a51E947';
  const [connected, setconnected] = useState(0);
  const [walletAddress, setwalletAddress] = useState(0);
  const [contract, setContract] = useState(0)
  
  
  // const checkConnection = useCallback(async () => {
  //   const { ethereum } = window.ethereum;
  //   if (ethereum) {
  //       var provider = new ethers.providers.Web3Provider(ethereum);
  //       const signer = provider.getSigner()
  //       console.log(signer)
  //       try {
  //         const res = await signer.getAddress()
  //         console.log(res)
  //         const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer)
  //         setwalletAddress(res) 
  //         setContract(contractInstance)
  //         console.log(contractInstance)
  //       }catch(err){
  //         console.log(err)
  //       }

  //       const isMetaMaskConnected = async () => {
  //         const accounts = await provider.listAccounts();
  //         return accounts.length > 0;
  //     }
      
  //      await isMetaMaskConnected().then((connected) => {
  //         if (connected) {
  //             // metamask is connected
  //             // console.log(contract.address)
                     
  //             setconnected(connected)
  //             console.log(connected)
              
  //         } else {
  //             setconnected(false);
  //             // metamask is not connected
  
  //         }
  //     });
        
  //   }

    
    
  //  }, [])

  //  useEffect( () => {
  
  //   checkConnection();
     
  //  }, [checkConnection])
 
  const connectWallet = async () => {
    await window.ethereum.request({ method: 'eth_requestAccounts' })
    var provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()
    signer.getAddress()
    .then(res=> setwalletAddress(res));
    // console.log(addr)
    //  
   }

  return (
    <div className="App">
      <header className="App-header">
        <p>PROCESS REIMBURSEMENT</p>
      </header>
      <div className="heading">
        <p>STEP 1: Connect Your Web3 Wallet</p>
      </div>
      <div className="button">
        { walletAddress ?
        (<button className="addressBtn">Connected {walletAddress}</button>) :
        (<button className="myButton" onClick={connectWallet} >Connect Wallet</button>)
      }
        
      </div>

      <div className="heading">
        <p>STEP 2: Approve EVOT smart contract transfer</p>
      </div>
      <div className="button">
        <input type="text" className="myinput" placeholder="Enter EVOT amount"/>
        <button className="myButton">Approve</button>
      </div>
      <div className="heading">
        <p>STEP 3: Swap EVOT for USDC</p>
      </div>
      <div className="button">
        <button className="myButton swap">Swap</button>
      </div>
    </div>
  );
}

export default App;

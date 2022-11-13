import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { ethers } from 'ethers';

import { contractABI } from '../utils/constants';
import { contractAddress } from '../utils/constants';

export const TranContext = React.createContext();
const {ethereum} = window;

const getEthereum = () =>{
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contractTransaction = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({ provider, signer, contractTransaction});
}

export const TransactionProvider = ({ children}) => {
    //const [conectedAccount, setConectedAccount] = useState(initialState)
    const chekWallet = async() =>{
        if(!ethereum){
            return alert("Instale o METAMASK");
        }
        const accounts =  await ethereum.request({method: 'eth_accounts'});

        console.log(accounts);
    }

    const conect = async() =>{
        try{
            if (!ethereum) return alert("Instale o METAMASK");

            const accounts = await ethereum.request({method: 'eth_requestAccounts'});

            setCurrentAccount(accounts[0]);
        }catch(error){
            throw new Error("Nenhum objeto Ethereum");
        }
    }

    useEffect(() =>{
        chekWallet();
    }, []);

    return(
        <TranContext.Provider value={{ conect }}> 
            { children }
        </TranContext.Provider>
    )
}

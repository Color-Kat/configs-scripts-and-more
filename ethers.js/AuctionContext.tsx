import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import useEth from "../hooks/useEth";
import { } from "../utils/smartContracts";
import { toEth } from "../utils/ethFunctions";

export const AuctionContext = React.createContext<any>(null);

export const AuctionProvider: React.FC = ({ children }: any) => {
    const [installMetamask, setInstallMetamask] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const {
        currentAccount,
        checkInstallMetamask,
        connectWallet,
        checkIfWalletConnected
    } = useEth(setError, setIsLoading, setInstallMetamask);

    /**
     * Connect user to nigga system
     * Set current user from event "UserConnect"
     */
    const connectUser = async () => {
        try {
            if (!checkInstallMetamask()) return;
            // localStorage.setItem('user_contract_address', '');
            // Try to get user addres from localStorage
            let userContractAddress = localStorage.getItem('user_contract_address') || '';

            const initUser = async (userAddress: string) => {
                let userContractInstance: ethers.Contract = userContract(userAddress); // Create user contract
                setCurrentUserContract(userContractInstance);
                setUser(new User(userContractInstance, setError, setIsLoading));
            }

            setIsLoading(true); // Turn on the loader

            if (!userContractAddress) { // User is not connected to nigga system yet
                // Connect user to nigga system
                await usersContract().connectUser();

                // Listen events to get connected user
                await new Promise<boolean>(resolve => {
                    usersContract().on("UserConnect", (user) => {
                        localStorage.setItem('user_contract_address', user); // Save user contract address to use in future after reload
                        initUser(user);
                        resolve(true);
                    })
                });
            } else initUser(userContractAddress);

            setIsLoading(false); // turn off the loader
        } catch (error) {
            console.log(error);
            setError("Не удалось подключить пользователя к nigga-system");
        }
    }

    useEffect(() => {
        // connectUser();s
        // getAuctions();

        // if (user) getAuctions();
        // if (user) console.log(user.finalizeAuction(0));
        connectUser();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setError("");
        }, 7000);
    }, [error]);



    return (
        <AuctionContext.Provider
            value={{
                error, // errors messages
                isLoading, // loading state
                installMetamask, // is metamask installed
                connectWallet, // function to connect metamask
                currentAccount, // get current connected account
            }}
        >
            {children}
        </AuctionContext.Provider>
    );
};

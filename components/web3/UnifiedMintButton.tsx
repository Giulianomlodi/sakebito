'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt, useReadContract } from 'wagmi';
import { parseEther } from 'viem';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { abi } from '@/contract-abi';
import Toast from '../layout/Toast';
import BatchDetails from './BatchDetails';
import { useWhitelistStatus } from './useWhitelistStatus';

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`;

const MintButton: React.FC = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [mintAmount, setMintAmount] = useState<number>(1);
    const { address, isConnected } = useAccount();
    const { isWhitelisted, merkleProof } = useWhitelistStatus(address);
    const [hasClaimedWhitelist, setHasClaimedWhitelist] = useState<boolean>(false);

    const { writeContract, data: hash, isPending, error } = useWriteContract();

    const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
        hash: hash,
    });

    const { data: whitelistClaimed } = useReadContract({
        address: CONTRACT_ADDRESS,
        abi,
        functionName: 'whitelistClaimed',
        args: address ? [address] : undefined
    });

    useEffect(() => {
        setIsMounted(true);
        if (whitelistClaimed !== undefined) {
            setHasClaimedWhitelist(whitelistClaimed as boolean);
        }
    }, [whitelistClaimed]);

    useEffect(() => {
        if (isMounted && isConfirmed && hash) {
            setToastMessage(`Mint successful! Transaction hash: ${hash}`);
            if (isWhitelisted && !hasClaimedWhitelist) {
                setHasClaimedWhitelist(true);
            }
        }
    }, [isMounted, isConfirmed, hash, isWhitelisted, hasClaimedWhitelist]);

    const mint = useCallback(async (amount: number) => {
        if (!address) {
            setToastMessage('Please connect your wallet to mint.');
            return;
        }

        try {
            if (isWhitelisted && !hasClaimedWhitelist) {
                writeContract({
                    address: CONTRACT_ADDRESS,
                    abi,
                    functionName: 'whitelistMint',
                    args: [merkleProof],
                    value: parseEther((0.14 * 0.856).toString()),
                });
            } else {
                writeContract({
                    address: CONTRACT_ADDRESS,
                    abi,
                    functionName: 'mint',
                    args: [BigInt(amount)],
                    value: parseEther((0.14 * amount).toString()),
                });
            }
        } catch (err) {
            console.error('Error minting:', err);
            setToastMessage('Error minting. Please try again.');
        }
    }, [address, isWhitelisted, hasClaimedWhitelist, merkleProof, writeContract]);

    useEffect(() => {
        if (isMounted && error) {
            setToastMessage(`Error: ${(error as Error).message}`);
        }
    }, [isMounted, error]);

    const closeToast = () => {
        setToastMessage(null);
    };

    if (!isMounted) {
        return null;
    }

    const buttonText = isPending || isConfirming ? 'Minting...' :
        (isWhitelisted && !hasClaimedWhitelist) ? 'Whitelist Mint' : 'Mint';

    return (
        <div className="flex flex-col justify-center items-center bg-white bg-opacity-20 rounded-2xl shadow-lg backdrop-blur-sm border border-white border-opacity-30 p-8 w-full max-w-md">
            <BatchDetails contractAddress={CONTRACT_ADDRESS} />
            {isConnected ? (
                <>
                    {!(isWhitelisted && !hasClaimedWhitelist) && (
                        <div className="flex items-center justify-center mb-4 bg-white rounded-md">
                            <button
                                onClick={() => setMintAmount(Math.max(1, mintAmount - 1))}
                                className="bg-blue-950 text-white px-4 py-2 text-lg rounded-l-md hover:bg-[#12082283] transition-colors duration-300"
                            >
                                -
                            </button>
                            <span className="mx-4 text-lg text-black">{mintAmount}</span>
                            <button
                                onClick={() => setMintAmount(Math.min(3, mintAmount + 1))}
                                className="bg-blue-950 text-white px-4 py-2 text-lg rounded-r-md hover:bg-[#12082283] transition-colors duration-300"
                            >
                                +
                            </button>
                        </div>
                    )}
                    <button
                        className={`bg-[#b29b49] text-white px-6 py-2 rounded-[8px] hover:opacity-60 transition-opacity duration-500 text-center md:text-left mb-8 mt-4 font-bold`} // Added font-bold for weight 700
                        onClick={() => mint(mintAmount)}
                        disabled={isPending || isConfirming}
                    >
                        {buttonText} {!(isWhitelisted && !hasClaimedWhitelist) && `${mintAmount} SAKEbito`}
                    </button>
                    {isWhitelisted && !hasClaimedWhitelist && (
                        <p className="mt-4 text-green-500 font-bold">You are whitelisted! Enjoy a 15% discount on your mint.</p>
                    )}
                </>
            ) : (
                <ConnectButton />
            )}
            {toastMessage && <Toast onClose={closeToast}>{toastMessage}</Toast>}
        </div>
    );
};

export default MintButton;
'use client'

import React, { useEffect, useState } from 'react';
import { useReadContract } from 'wagmi';
import { abi } from '@/contract-abi';
import { XIcon } from 'lucide-react';

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`;
const MOONPAY_API_KEY = process.env.NEXT_PUBLIC_MOONPAY_API_KEY;

const MoonPayNFTLiteModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [nextTokenId, setNextTokenId] = useState<string | null>(null);
    const [moonpayWidgetUrl, setMoonpayWidgetUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const { data: batchData } = useReadContract({
        abi,
        address: CONTRACT_ADDRESS,
        functionName: 'batches',
        args: [BigInt(1)], // Reading batch with ID 1
    });

    useEffect(() => {
        if (batchData && Array.isArray(batchData) && batchData.length >= 8) {
            const minted = batchData[7] as bigint;
            setNextTokenId((minted + BigInt(1)).toString());
        }
    }, [batchData]);

    useEffect(() => {
        if (nextTokenId && MOONPAY_API_KEY) {
            try {
                const widgetUrl = `https://buy.moonpay.com/?apiKey=${MOONPAY_API_KEY}&currencyCode=eth&walletAddress=${CONTRACT_ADDRESS}&externalTransactionId=${nextTokenId}`;
                setMoonpayWidgetUrl(widgetUrl);
            } catch (error) {
                console.error('Error setting up MoonPay widget:', error);
                setError('Failed to set up MoonPay widget. Please try again later.');
            }
        }
    }, [nextTokenId]);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <button
                onClick={openModal}
                className="bg-blue-950 text-white px-6 py-2 rounded-[8px] hover:opacity-60 transition-opacity duration-500 text-center md:text-left mb-8 mt-4 font-bold"
            >
                Pay with Card
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-top justify-center">
                    <div className="absolute inset-0 bg-black opacity-70" onClick={closeModal}></div>
                    <div className="relative bg-transparent rounded-lg w-full max-w-3xl max-h-[90vh] overflow-hidden">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            <XIcon size={24} />
                        </button>
                        {error ? (
                            <div className="p-6 text-red-500">{error}</div>
                        ) : moonpayWidgetUrl ? (
                            <iframe
                                src={moonpayWidgetUrl}
                                width="100%"
                                height="600px"
                                allow="accelerometer; autoplay; camera; gyroscope; payment"
                            ></iframe>
                        ) : (
                            <div className="p-6">Loading MoonPay widget...</div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default MoonPayNFTLiteModal;

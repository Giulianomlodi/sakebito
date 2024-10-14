"use client";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MenuVoices from "./MenuVoices";
import MenuMobile from "./MenuMobile";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function ClientSideMenu() {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [handleItemClick] = useState(() => () => { });

    return isMobile ? (
        <MenuMobile />
    ) : (
        <>
            <MenuVoices onItemClick={handleItemClick} />
            <ConnectButton />
        </>
    );
}

export default ClientSideMenu;
import React from "react";
import styles from "@/app/styles/header.module.css";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const ClientSideMenu = dynamic(() => import("./ClientSideMenu"), {
  ssr: false
});

function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.stickyHeader}>
        <div className={styles.leftArea}>
          <span className={styles.LogoClass}>
            <Link scroll={true} href="/">
              <Image
                src="/Logo.png"
                alt="SAKEbito Logo"
                width={180}
                height={39}
              />
            </Link>
          </span>
        </div>
        <div className={styles.rightArea}>
          <ClientSideMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
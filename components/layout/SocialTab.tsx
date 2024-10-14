
import { FaInstagram } from "react-icons/fa";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";
import { SiFarcaster } from "react-icons/si";
import styles from "@/app/styles/menu.module.css";

interface SocialTab {
    onItemClick: () => void;
}

const SocialTab: React.FC<SocialTab> = () => {

    // Removed onItemClick from props
    // const handleClick = () => { // Removed handleClick function
    //     onItemClick();
    // };

    return (
        <nav className={styles.nav}>
            <ul className={styles.menuList}>
                <li className={styles.socialIcons}>
                    <a
                        href="https://twitter.com/wearesakebito"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaXTwitter />
                    </a>
                    <a
                        href="https://www.instagram.com/sakebito.japan"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://t.me/+hDMg4hVPy6VlNDQ0"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTelegram />
                    </a>
                    <a
                        href="https://warpcast.com/sakebito"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiFarcaster />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default SocialTab;
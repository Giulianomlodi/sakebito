import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";
import { SiFarcaster } from "react-icons/si";
import styles from "@/app/styles/menu.module.css";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface MenuVoicesProps {
  onItemClick: () => void;
}

const MenuVoices: React.FC<MenuVoicesProps> = ({ onItemClick }) => {
  const handleClick = () => {
    onItemClick();
  };

  return (
    <nav className={styles.nav}>
      <NavigationMenu>
        <NavigationMenuList className={styles.menuList}>
          <NavigationMenuItem>
            <Link href="/" onClick={handleClick}>
              <NavigationMenuLink>Home</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Partnered Breweries</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className={styles.dropdownList}>
                <li>
                  <Link target="_blank" href="https://sakebito.mozello.shop/" onClick={handleClick}>
                    <NavigationMenuLink>Tachibana</NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/partners/itano-shuzo" onClick={handleClick}>
                    <NavigationMenuLink>Itano-Shuzo</NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/partners/takanoi-shuzo" onClick={handleClick}>
                    <NavigationMenuLink>Takanoi-Shuzo</NavigationMenuLink>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="https://sakebito.com/#sakebito-shop" onClick={handleClick}>
              <NavigationMenuLink>Shop</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/membership" onClick={handleClick}>
              <NavigationMenuLink>Membership</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className={styles.socialIcons}>
            <a
              href="https://twitter.com/wearesakebito"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onItemClick}
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/sakebito.japan"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onItemClick}
            >
              <FaInstagram />
            </a>
            <a
              href="https://t.me/+hDMg4hVPy6VlNDQ0"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onItemClick}
            >
              <FaTelegram />
            </a>
            <a
              href="https://warpcast.com/sakebito"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onItemClick}
            >
              <SiFarcaster />
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default MenuVoices;
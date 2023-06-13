import { useState } from "react";
import styles from "./Navbar.module.css";

import youtube from "../../images/youtube.svg";
import instagram from "../../images/instagram.svg";
import behance from "../../images/behance.svg";
import linkedin from "../../images/linkedin.svg";
import logo from "../../images/logo.svg";
import menu from "../../images/menu.svg";

function Navbar() {
  const [onOff, setOnOff] = useState<boolean>(false);
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <img src={logo} alt='logo' />
        </div>
        <div className={styles.center}>
          {/* linkler */}
          <ul>
            <a>Hakkımızda</a>
            <a>Jüri - Yarışma Yazılımı</a>
            <a>Word Ninja</a>
            <a>Word Pyramids</a>
          </ul>
        </div>
        {/* sosyal medya iconları */}
        <div className={styles.right}>
          <img src={youtube} alt='youtube' />
          <img src={instagram} alt='instagram' />
          <img src={behance} alt='behance' />
          <img src={linkedin} alt='linkedin' />
        </div>
        <span
          id='menuBtn'
          onClick={() => setOnOff((prev) => !prev)}
          className={styles.menuBtn}
        >
          <img src={menu} alt='menu' />
        </span>
      </nav>
      {onOff && (
        <div className={styles.menu}>
          {/* mini ekran linkler */}
          <ul>
            <a>Hakkımızda</a>
            <a>Jüri - Yarışma Yazılımı</a>
            <a>Word Ninja</a>
            <a>Word Pyramids</a>
          </ul>
          {/* mini ekran sosyal medya iconları */}
          <div className={styles.menuSocial}>
            <img src={youtube} alt='youtube' />
            <img src={instagram} alt='instagram' />
            <img src={behance} alt='behance' />
            <img src={linkedin} alt='linkedin' />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

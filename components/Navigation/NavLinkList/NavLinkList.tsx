import Link from "next/link";

import styles from "./NavLinkList.module.css";

export const NavLinkList = () => {
  return (
    <nav className={styles.wrap}>
      <ul className={styles.nav_list}>
        <li>
          <Link href="/">Головна</Link>
        </li>
        <li>
          <Link href="/synopsis">Конспект</Link>
        </li>
        <li>
          <Link href="">Тести</Link>
        </li>
        <li>
          <Link href="">Інфо</Link>
        </li>
      </ul>
    </nav>
  );
};

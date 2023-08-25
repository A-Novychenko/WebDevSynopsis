import Link from "next/link";

import styles from "./SynopsisLinks.module.css";

export const SynopsisLinks = () => {
  return (
    <div className={styles.wrap}>
      <ul className={styles.nav_list}>
        <li>
          <Link href="">HTML+CSS</Link>
        </li>
        <li>
          <Link href="/synopsis/javascrypt">JS</Link>
        </li>
        <li>
          <Link href="">REACT</Link>
        </li>
        <li>
          <Link href="">NEXT</Link>
        </li>
        <li>
          <Link href="">TS</Link>
        </li>
        <li>
          <Link href="">NODE</Link>
        </li>
        <li>
          <Link href="">REACT-NATIVE</Link>
        </li>
      </ul>
    </div>
  );
};

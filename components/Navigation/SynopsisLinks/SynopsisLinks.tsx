"use client";

import Link from "next/link";
import {useSelectedLayoutSegment} from "next/navigation";

import styles from "./SynopsisLinks.module.css";

export const SynopsisLinks = () => {
  const segment = useSelectedLayoutSegment();
  // console.log("segment", segment);
  // const isActive = "javascrypt" === segment;

  return (
    <div className={styles.wrap}>
      <ul className={styles.nav_list}>
        <li>
          <Link
            href="/synopsis/htmlcss"
            style={{color: "htmlcss" === segment ? "green" : "white"}}
          >
            HTML+CSS
          </Link>
        </li>
        <li>
          <Link
            href="/synopsis/javascrypt"
            style={{color: "javascrypt" === segment ? "green" : "white"}}
          >
            JS
          </Link>
        </li>
        <li>
          <Link
            href="/synopsis/react"
            style={{color: "react" === segment ? "green" : "white"}}
          >
            REACT
          </Link>
        </li>
        <li>
          <Link
            href="/synopsis/next"
            style={{color: "next" === segment ? "green" : "white"}}
          >
            NEXT
          </Link>
        </li>
        <li>
          <Link
            href="/synopsis/ts"
            style={{color: "ts" === segment ? "green" : "white"}}
          >
            TS
          </Link>
        </li>
        <li>
          <Link
            href="/synopsis/node"
            style={{color: "node" === segment ? "green" : "white"}}
          >
            NODE
          </Link>
        </li>
        <li>
          <Link
            href="/synopsis/reactnative"
            style={{color: "reactnative" === segment ? "green" : "white"}}
          >
            REACT-NATIVE
          </Link>
        </li>
      </ul>
    </div>
  );
};

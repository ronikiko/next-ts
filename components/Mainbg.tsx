import Image from "next/image";
import React from "react";
import styles from "/styles/Home.module.css";
import { MainProps } from '../types'



export default function Mainbg({ children }:MainProps) {
  return (
    <main className={styles.main}>
      <div className={styles.l2}>
        <Image src="/images/l2.png" width={400} height={600} />
      </div>

      <div className={styles.content}>{children}</div>

      <div className={styles.l1}>
        <Image src="/images/l1.png" width={422} height={554} />
      </div>
    </main>
  );
}

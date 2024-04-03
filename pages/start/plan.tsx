import Head from "next/head";
import styles from "@/styles/Start.module.css";
import { useState } from "react";
import Book from "@/components/BookProgress"

export default function Home() {
let [progress, setProgress] = useState<number>(1);

  return (
    <>
      <Head>
        <title>Era Website Development</title>
        <meta name="description" content="Modern customized website design and building." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      {/* <div className={styles.backgroundabs} style={{backgroundImage: `url(${backgroundimg.src})`}}></ div> */}
        <Book progress={progress} />

      </main>
    </>
  );
}
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brqz Prod</title>
        <meta name="description" content="produccion audiovisual" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>

      <footer className={styles.footer}>
        <a
          href="https://www.pedrogarrido.tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Created by belcaik. © 2022</p>
        </a>
      </footer>
    </div>
  );
}

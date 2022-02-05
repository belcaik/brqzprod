import Head from "next/head";
import Videos from "../components/Videos";
import BarraLateral from "../components/BarraLateral";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Contact from "./contact";
import About from "./about";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brqz Prod</title>
        <meta name="description" content="produccion audiovisual" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <BarraLateral className={styles.barra} />
        <motion.div
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={{
            hidden: { opacity: 0, x: 0, y: -200, duration: 2},
            enter: { opacity: 1, x: 0, y: 0, duration: 2},
            exit: { opacity: 0, x: 0, y: -100, duration: 2 },
          }}
        >
          <Videos className={styles.videos}></Videos>
        </motion.div>
      </main>

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

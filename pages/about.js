import { motion } from "framer-motion";
import styles from "../styles/About.module.css";
import Head from "next/head";
import BarraLateral from "../components/BarraLateral";
export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brqz Prod</title>
        <meta name="description" content="produccion audiovisual" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <BarraLateral className={styles.barra} />
        <div className={styles.texto}>
          <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={{
              hidden: { opacity: 0, x: 0, y: 200},
              enter: { opacity: 1, x: 0, y: 0, duration: 200},
              exit: { opacity: 0, x: 0, y: -200, duration: 200 },
            }}
          >
            <h1>Sobre mi</h1>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.6,
                  type: "just",
                },
              },
            }}
          >
            <p>
              Duis adipisicing cillum consectetur mollit laborum ullamco nulla
              laborum tempor aute exercitation. Tempor consectetur amet officia
              quis nisi eu sunt mollit. Eiusmod et incididunt minim
              reprehenderit. Reprehenderit dolor et aliqua irure dolore proident
              consequat. Enim proident irure quis ipsum reprehenderit voluptate
              exercitation dolore in ex Lorem adipisicing. Nisi minim ut sit
              nisi minim adipisicing commodo proident aute consectetur laboris
              officia. Mollit sit anim voluptate pariatur est ut tempor.
            </p>
          </motion.div>
        </div>
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

import { motion } from "framer-motion";
import styles from "../styles/Thanks.module.css";
import Head from "next/head";
import BarraLateral from "../components/BarraLateral";
import Image from "next/image";
export default function Thanks() {
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
            <h1>¡Gracias!</h1>
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
			<div className={styles.mensajito}>

			<h3>Estamos leyendo tu mensaje</h3>
			<h4>Nos comunicaremos al correo indicado</h4>
			</div>
            <Image 
		  src={"/thanks.svg"}
		  height={450}
		  width={450}
		  />

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

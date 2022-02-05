import { motion } from "framer-motion";
import BarraLateral from "../components/BarraLateral";
import Head from "next/head";
import styles from "../styles/Contact.module.css";

export default function Contact(){
	return(
		<div>
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
                  delay: 0.4,
                  type: "tween",
                },
              },
            }}
          >
            <h1>Contacto</h1>
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
            <p>Escribe tu idea, duda o carta de amor aqui abajo y te responderé a la brevedad</p>
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
            <form>
			  <input>
			  </input>
		  </form>
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
	)
}
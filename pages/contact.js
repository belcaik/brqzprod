import { motion } from "framer-motion";
import BarraLateral from "../components/BarraLateral";
import Head from "next/head";
import styles from "../styles/Contact.module.css";
import { useState } from "react";

export default function Contact() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [submited, setSubmited] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sending");

    let data = {
      nombre,
      email,
      mensaje,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("response recived");
      if (res.status === 200) {
        console.log("response success");
        setSubmited(true);
        setNombre("");
        setEmail("");
        setMensaje("");
      }
    });
  };

  return (
    <div>
      <Head>
        <title>Brqz Prod</title>
        <meta name="description" content="produccion audiovisual" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <BarraLateral className={styles.barra} />
        <motion.div className={styles.content}>
          <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={{
              hidden: { opacity: 0, x: 0, y: 200 },
              enter: { opacity: 1, x: 0, y: 0, duration: 200 },
              exit: { opacity: 0, x: 0, y: -200, duration: 200 },
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
            <p>
              Escribe tu idea, duda o carta de amor aqui abajo y te responderé a
              la brevedad
            </p>
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
            <form className={styles.form}>
              <label>Nombre</label>
              <input
                type="text"
                placeholder="Juan Perez"
                onChange={(e) => {
                  setNombre(e.target.value);
                }}
                name="nombre"
                required
              ></input>
              <label>Correo</label>
              <input
                type="email"
                placeholder="juan@perez.com"
                name="correo"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                pattern=".+@[a-Z]+\.[a-Z]+"
                required
              ></input>
              <label>Mensaje</label>
              <textarea
                name="textarea"
                onChange={(e) => {
                  setMensaje(e.target.value);
                }}
                required
                placeholder="Hola! tengo una idea y me gustaria que me ayudaras a relizarla..."
              ></textarea>
              <input
                type="submit"
                onClick={(e) => {
                  handleSubmit(e);
                }}
                value="Enviar"
              ></input>
            </form>
          </motion.div>
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

import Image from "next/image";
import styles from "../styles/BarraLateral.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BarraLateral() {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.logo}
        whileHover={{
          scale: 1.2,
          transition: {
            duration: 0.2,
          },
        }}
      >
        <Link href="/">
          <Image
            src={"/../public/brqz.png"}
            width={70}
            height={70}
            alt="brqz logo"
          ></Image>
        </Link>
      </motion.div>

      <ul className={styles.social}>
        <motion.li
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.2,
            },
          }}
        >
          <Link href="about">
            <Image
              src={"/../public/icons/about.svg"}
              width={30}
              height={30}
            ></Image>
          </Link>
        </motion.li>

        <motion.li
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.2,
            },
          }}
        >
          <Link href="contact">
            <Image
              src={"/../public/icons/contact.svg"}
              width={30}
              height={30}
            ></Image>
          </Link>
        </motion.li>

        <motion.li
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.2,
            },
          }}
        >
          <a href="https://www.instagram.com/brqz.prod/">
            <Image
              src={"/../public/icons/instagram.svg"}
              width={30}
              height={30}
            ></Image>
          </a>
        </motion.li>
        <motion.li
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.2,
            },
          }}
        >
          <a href="https://www.youtube.com/channel/UCQ46EAc0xDb-gioUD_q6Y7w">
            <Image
              src={"/../public/icons/youtube.svg"}
              width={30}
              height={30}
            ></Image>
          </a>
        </motion.li>
      </ul>
    </div>
  );
}

import Image from "next/image";
import styles from "../styles/BarraLateral.module.css"

export default function BarraLateral() {
  return (
    <div className={styles.container}>
      <Image
        src={"/../public/brqz.svg"}
        width={70}
        height={70}
        alt="brqz logo"
      ></Image>
	<ul className={styles.social}>
		<li>
			<a>
				<Image src={"/../public/icons/instagram.svg"} width={30} height={30}></Image>
			</a>
		</li>
		<li>
			<a>
				<Image src={"/../public/icons/youtube.svg"} width={30} height={30}></Image>
			</a>
		</li>
		
	</ul>

    </div>
  );
}

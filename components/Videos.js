import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/Videos.module.css";
import { motion } from "framer-motion";

export default function Videos() {
  return (
    <div>
      <Carousel
	   showArrows={false}
	   showStatus={false}
	   showThumbs={false}
	   showIndicators={false}
	   stopOnHover={false}
	   interval={6666}
        autoPlay={true}
        infiniteLoop={true}
        animationHandler="fade"
      >
        <div key="content-1" className={styles.videoContainer}>
      

		   <h1>BMX 1</h1>
     
          <video autoPlay muted loop className={styles.video}>
            <source src="/videos/1.mov" type="video/mp4" />
          </video>
        </div>
        <div key="content-2" className={styles.videoContainer}>
	   <h1>Halloween</h1>

          <video autoPlay muted loop className={styles.video}>
            <source src="/videos/2.mov" type="video/mp4" />
          </video>
        </div>
        <div key="content-3" className={styles.videoContainer}>
	   <h1>Tomorrowland</h1>

          <video autoPlay muted loop className={styles.video}>
            <source src="/videos/3.mov" type="video/mp4" />
          </video>
        </div>
      </Carousel>
    </div>
  );
}

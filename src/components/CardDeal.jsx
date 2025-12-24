import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in a few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-117.5 mt-5`}>
        Arcu tortor, purus un mattis at sed integer facubis. Aliquet quis
        aliquet eget mauris tortor. Aliquet ultrices ac, ametau.
      </p>
      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-full h-full"/>
    </div>
  </section>
);

export default CardDeal;

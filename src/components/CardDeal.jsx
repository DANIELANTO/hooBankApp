import { card } from '../assets';
import styles, { layout } from '../styles';
import Buttom from './Button';

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal
          <br className="sm:block hidden" />
          in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Discover the ultimate card offer effortlessly: Find your 
        ideal deal with a few simple steps. Uncover unmatched benefits, 
        competitive rates, and personalized rewards. Experience 
        financial freedom with our user-friendly platform. Start now!
        </p>
        <Buttom styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%} h-[100%]" />
      </div>
    </section>
  )
}

export default CardDeal
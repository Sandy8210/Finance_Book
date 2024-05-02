import Style from "./Hero.module.css";

const Hero = ({ heroData, heroCount, setHeroCount }) => {
  return (
    <div className={Style.hero__container}>
      <div className={Style.hero__text}>
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className={Style.hero__explore}>
        <p>Explore the Features</p>
      </div>

      <div className={Style.hero__dot__play}>
        <ul className={Style.hero__dots}>
          <li
            onClick={() => setHeroCount(0)}
            className={
              heroCount === 0
                ? `${Style.hero__dot} orange`
                : `${Style.hero__dot}`
            }
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={
              heroCount === 1
                ? `${Style.hero__dot} orange`
                : `${Style.hero__dot}`
            }
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={
              heroCount === 2
                ? `${Style.hero__dot} orange`
                : `${Style.hero__dot}`
            }
          ></li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;

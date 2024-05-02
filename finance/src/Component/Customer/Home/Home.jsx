import Style from "./Home.module.css";
import home from "../../../assets/home.jpg";

const Home = () => {
  return (
    <>
      <img src={home} className={Style.background} alt='homePage' />
    </>
  );
};

export default Home;

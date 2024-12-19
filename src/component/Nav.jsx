import logo from "../assets/logo.png";
import Facebook from "../assets/Facebook.svg";
import Twitter from "../assets/Twitter.svg";
import Youtube from "../assets/Youtube.svg";
import Telegram from "../assets/Telegram.svg";
import { useState } from "react";

function Nav() {
  const [style, setStyle] = useState({
    left: "-3rem",
    width: "10rem",
    position: "absolute",
    transition: "all 0.4s ease",
  });
  const handleMouseEnter1 = () => {
    setStyle({
      ...style,
      left: "-3rem",
      width: "10rem",
    });
  };
  const handleMouseEnter2 = () => {
    setStyle({
      ...style,
      left: "105px",
      width: "10rem",
    });
  };
  const handleMouseEnter3 = () => {
    setStyle({
      ...style,
      left: "265px",
      width: "10rem",
    });
  };
  const handleMouseEnter4 = () => {
    setStyle({
      ...style,
      left: "420px",
      width: "16rem",
    });
  };

  return (
    <nav className="relative flex p-2 pb-4 w-full gap-8 bg-[#0094CA] justify-between">
      <div>
        <img className="relative z-10" loading="lazy" src={logo} alt="" />
      </div>
      <div className="flex items-center gap-16 relative">
        <a className="z-10 observer-1 pt-5 pb-5 text-center " href="" onMouseEnter={handleMouseEnter1}>
          PORTADA
        </a>
        <a className="z-10 observer-2 pt-5 pb-5 text-center" href="" onMouseEnter={handleMouseEnter2}>
          INSTITUCION
        </a>
        <a className="z-10 observer-3 pt-5 pb-5 text-center" href="" onMouseEnter={handleMouseEnter3}>
          FORMACION
        </a>
        <a className="z-10 observer-4 pt-5 pb-5 text-center" href="" onMouseEnter={handleMouseEnter4}>
          INTERNACIONALIZACION
        </a>
        <div
          style={style}
          className="observer-hover bg-[#5AA1FF] h-24 p-4 rounded-t-[50px]"
        >
          <div className="h-16 w-full rounded-[50px] bg-[#FF831D]"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2 items-center mr-8 ">
        <input className="rounded-3xl bg-[#426CA9] shadow-input p-1" type="search" placeholder="buscar..." name="" id="" />
        <div className="flex items-center gap-2">
          <a href="">
            <img loading="lazy" src={Facebook} alt="" />
          </a>
          <a href="">
            <img loading="lazy" src={Twitter} alt="" />
          </a>
          <a href="">
            <img loading="lazy" src={Youtube} alt="" />
          </a>
          <a href="">
            <img loading="lazy" src={Telegram} alt="" />
          </a>
        </div>
      </div>
      <div className="absolute bg-[#5AA1FF] w-full bottom-0 left-0 h-8"></div>
    </nav>
  );
}

export default Nav;

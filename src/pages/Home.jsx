import Slaider from "../component/Slaider";
import Principal from '../assets/Icons/Principal.png'
import Hoja from '../assets/Icons/Hoja.png'
import Tapa from '../assets/Icons/Tapa.png'
import Sub1 from '../assets/Icons/Sub1.png'
import Sub2 from '../assets/Icons/Sub2.png'
import Chat from '../assets/Icons/Chat.png'
import Chat1 from '../assets/Icons/Chat1.png'
import Moodle from '../assets/Icons/Moodle.png'
import Buho from '../assets/Icons/Buho.png'
import ala1 from '../assets/Icons/ala1.png'
import ala2 from '../assets/Icons/ala2.png'
import Rein from '../assets/Icons/Rein.png'
import Rein_animado from '../assets/Icons/Rein_animado.png'

function Home() {
  return (
    <header>
      <Slaider/>
      <section className="flex text-center flex-col justify-center items-center">
        <h1 className="text-3xl mt-4 mb-8">SERVICIOS</h1>
        <div className="flex flex-wrap items-center justify-around w-full gap-6">
          <div className="flex flex-col items-center  h-44 justify-between">
            <div className="anime relative z-10 mb-10">
              <img src={Principal} alt="" />
              <img className="absolute bottom-4 left-[26px] on" src={Hoja} alt="" />
              <img className="absolute bottom-0 left-[12px]" src={Tapa} alt="" />
              <img className="absolute -bottom-5 -right-[12px]" src={Sub1} alt="" />
              <div className="elipce absolute -bottom-8 left-1 -z-10"></div>
            </div>
            
            <p className="border-b-2 pl-1 pr-1 border-[#FFC04A] text-base">Correo de Profesores</p>
          </div>
          <div className="flex flex-col items-center  h-44 justify-between">
            <div className="anime relative mb-14">
              <img src={Principal} alt="" />
              <img className="absolute bottom-4 left-[26px] on" src={Hoja} alt="" />
              <img className="absolute bottom-0 left-[12px]" src={Tapa} alt="" />
              <img className="absolute -bottom-5 -right-[12px]" src={Sub2} alt="" />
              <div className="elipce absolute -bottom-8 left-1 -z-10"></div>
            </div>
            <p className="border-b-2 pl-1 pr-1 border-[#FFC04A] text-base">Correo de Alumnos</p>
          </div>
          <div className="flex flex-col items-center  h-44 justify-between">
            <div className="flex hover-2 items-center justify-center relative pl-4 pb-5 pt-0 mb-6">
              <img className="animated-1 absolute z-10 left-1 bottom-7" src={Chat} alt="" />
              <img className="animated-2" src={Chat1} alt="" />
              <div className="elipce absolute -bottom-4 left-0 -z-10"></div>
            </div>
            <p className="border-b-2 pl-1 pr-1 border-[#FFC04A] text-base">Chat Institucional</p>
          </div>
          <div className="flex flex-col items-center h-44 justify-between">
            <div className="relative flex items-center moodle-container ">
              <img className="-translate-y-4 moodle-hover" src={Moodle} alt="" />
              <div className="elipce absolute bottom-8 left-12 -z-10"></div>
            </div>
            <p className="border-b-2 pl-1 pr-1 -translate-y-6 border-[#FFC04A] text-base text-center max-w-52">Entorno vitual de aprendizaje</p>
          </div>
          <div className="flex flex-col items-center  h-44 justify-between">
            <div className="relative buho-move">
              <img className="-translate-y-4 buho" src={Buho} alt="" />
              <img className="absolute bottom-12 left-2 move1" src={ala1} alt="" />
              <img className="absolute bottom-12 right-2 move2" src={ala2} alt="" />
            </div>
            <p className="border-b-2 pl-1 pr-1 border-[#FFC04A] text-base text-center max-w-52 -translate-y-2">Centro de informacion cientifico tecnico</p>
          </div>
          <div className="flex flex-col items-center h-44 justify-between">
            <div className="relative rein-container">
              <img src={Rein}alt="" />
              <img className="absolute left-5 bottom-16 rein-animated" src={Rein_animado}alt="" />
            </div>
            <p className="border-b-2 pl-1 pr-1 border-[#FFC04A] text-base text-center ">Repositorio Institucional</p>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Home;

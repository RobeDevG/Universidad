import foto1 from "../assets/Icons/foto1.webp";
import foto2 from "../assets/Icons/foto2.webp";
import foto3 from "../assets/Icons/foto3.webp";

function Notice() {
  const array = [
    {
      img: foto1,
      h2: "Cultivando el fruto Agroecologia y soberania alimentari en nuestra univercidad",
      text: "Por: DECOM El grupo de Agroecología y agricultura familiar, integrado por profesores y especialistas de la facultad de Ciencias Agropecuarias de la Universidad de Matanzas se ha comprometido a brindar[…]",
      span: "Leer mas...",
    },
    {
      img: foto2,
      h2: "“Nosotros, los de ahora”: Un Homenaje a la Poesìa",
      text: "El próximo jueves 14 de noviembre, a las 11:00 am la sala de video de la Universidad de Matanzas será el escenario de una celebración literaria: la presentación de la antología “Nosotros, los de ahora”, que reúne las voces de poetas cubanos y chilenos; un homenaje al centenario del emblemático poemario de Pablo Neruda, “Veinte poemas de amor y una canción desesperada”.",
      span: "Leer mas...",
    },
    {
      img: foto3,
      h2: "Huellas de Haitì en la Universidad de Matànzas",
      text: "Este lunes 18 de noviembre, la Universidad de Matanzas dará inicio al Encuentro Bilateral: Huellas de Haití, una mirada transcultural a la Cuba de hoy, un evento que busca promover el intercambio cultural y académico entre Haití y Cuba, enriqueciendo el diálogo sobre las raíces y las influencias compartidas entre ambas naciones.",
      span: "Leer mas...",
    },
  ];

  return (
    <section className="flex flex-col items-center border-b-8 border-[#FFC04A]">
      <h1 className="mt-12 mb-12 pl-2 pr-2 border-b-2 border-[#FFC04A] font-custom-font text-3xl">
        Noticias
      </h1>
      <a className="mb-12 text-[#0094CA] font-custom-font" href="">
        Metacompu 2024 Convocatoria
      </a>
      <div className="flex flex-col gap-4 mb-16 sm:flex-row">
        {array.map((element, i) => {
          return (
            <div className="bg-[#D9D9D9] w-fit" key={i}>
              <img src={element.img} alt="" />
              <div className="p-8  h-fit">
                <h2 className="font-custom-font max-w-80 text-3xl mb-5">{element.h2}</h2>
                <p className="font-custom-font max-w-80 text-xl text-gray-700">{element.text}</p>
                <span className="font-custom-font max-w-96">{element.span}</span>
              </div>
            </div>
          );
        })}
      </div>
      <a className="font-custom-font bg-[#49C1E2] p-4 pr-6 pl-6 text-white rounded-xl text-base shadow-link_notice mb-6" href="">Ver Todas las Noticias</a>
    </section>
  );
}

export default Notice;

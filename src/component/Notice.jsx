const array = [
  {
    img: "",
    h2: "Cultivando el fruto Agroecologia y soberania alimentari en nuestra univercidad",
    text: "Por: DECOM El grupo de Agroecología y agricultura familiar, integrado por profesores y especialistas de la facultad de Ciencias Agropecuarias de la Universidad de Matanzas se ha comprometido a brindar[…]",
    span: "Leer mas...",
  },
];

function Notice() {
  return (
    <section className="flex flex-col items-center ">
      <h1 className="mt-12 mb-12 pl-2 pr-2 border-b-2 border-[#FFC04A]">Noticias</h1>
      <a className="mb-12 text-[#0094CA]" href="">Metacompu 2024 Convocatoria</a>
      <div>
        {array.map((element, i) => {
          return (
            <div key={i}>
              <img src={element.img} alt="" />
              <h2>{element.text}</h2>
              <p>{element.h2}</p>
              <span>{element.span}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Notice;

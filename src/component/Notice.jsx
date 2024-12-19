

const array = [
    {
        img:"",
        h2:"",
        text:"",
        span:""
    }
]

function Notice() {
  return (
    <section>
        <h1>Noticias</h1>
        <a href="">Metacompu 2024 Convocatoria</a>
        <div>
            {array.map((element, i) => {
                return( <div key={i}>
                    <img src={element.img} alt="" />
                    <h2>{element.text}</h2>
                    <p>{element.h2}</p>
                    <span>{element.span}</span>
                </div>)
            })}
        </div>
    </section>
  )
}

export default Notice
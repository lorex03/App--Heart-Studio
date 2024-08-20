import Typewriter from './Typewriter';
import React, { useState, useEffect } from 'react';

const parrafos = ["La ansiedad ,experiencia común y, en ciertos momentos, todos hemos sentido esa sensación de inquietud, nerviosismo o temor. Sin embargo, cuando la ansiedad se vuelve persistente y abrumadora, puede interferir significativamente en nuestra vida diaria. Aquí es donde la intervención psicológica se vuelve crucial,Comprendiendo la Ansiedad,Desde la perspectiva psicoanalítica, la ansiedad no es solo una respuesta a situaciones externas, sino que también puede ser un indicativo de conflictos internos y deseos reprimidos. La ansiedad puede ser una señal de que algo en nuestro inconsciente necesita ser atendido.Tratamiento Psicoanalítico de la Ansiedad,Psicoterapia Psicoanalítica:Exploración del Inconsciente: El primer paso es entender qué está causando la ansiedad. A través de la terapia, exploramos los pensamientos y emociones que pueden estar reprimidos. Esto puede implicar hablar sobre sueños, recuerdos de la infancia y experiencias pasadas.Libre Asociación: Una técnica fundamental en el psicoanálisis es la libre asociación, donde se anima al paciente a decir lo primero que viene a su mente sin censura. Esto ayuda a revelar pensamientos y sentimientos inconscientes que podrían estar contribuyendo a la ansiedad.Interpretación de Sueños:Los sueños pueden ser una ventana al inconsciente. Al analizar los sueños, podemos descubrir deseos y miedos reprimidos que están manifestándose como ansiedad en la vida diaria.Transferencia y Contratransferencia:Durante la terapia, los pacientes pueden proyectar sentimientos y experiencias pasadas sobre el terapeuta (transferencia). Reconocer y trabajar a través de estas proyecciones puede ser una parte importante del proceso de curación.Identificación de Patrones:A través de la terapia, identificamos patrones repetitivos en pensamientos y comportamientos que pueden estar perpetuando la ansiedad. Esto puede incluir relaciones interpersonales conflictivas, perfeccionismo o autoexigencia excesiva."]


const About2 = () => {

  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);

  return (

    <div className="relative mb-80 mt-52" id="ofertas">
      {/* <h1 className="text-center text-4xl lg:text-6xl font-bold mb-10 text-white">Como tratar la Ansiedad</h1>
      <div className="flex items-end mx-10">
        <h1 className="text-3xl lg:text-5xl font-bold text-white"></h1>
        <div className="flex flex-grow bg-white h-[2px]"></div>
      </div>


      <h5 className="text-white mb-2 text-2xl font-bold tracking-tight    dark:text-white"></h5>
      <div className='text-white md:text-2xl text-lg md:leading-[3rem] leading-[2rem] font-semibold'>
        {parrafos.map((p, index) => (
          <div key={index}>
            <p>
              {index <= currentParagraphIndex &&
                <Typewriter
                  text={p}
                  delay={30}
                  onTypingComplete={() => {
                    if (index === currentParagraphIndex) {
                      setCurrentParagraphIndex(prevIndex => prevIndex + 1);
                    }
                  }}
                />}
            </p><br />
          </div>
        ))}
      </div >

      <div className="mx-10 mb-10 flex flex-grow bg-white h-[2px] p-0"></div>
      <div className="diagonal-ofertas bg-cover absolute bg-secondary h-[150%] w-full left-0 top-1/2  -translate-y-[45%] -z-10 overflow-hidden transform -skew-y-[5deg] shadow-xl"></div> */}
    </div>
  )
}

export default About2
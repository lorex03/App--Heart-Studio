import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../App.css';
import logo from "../assets/LogoHeart.png";
import Typewriter from './Typewriter';

function useTypewriter({text, delay}) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {

    const interval = setInterval(() => {
      if (currentIndex < text.length)
      {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1)
      } else
      {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay, currentIndex]);
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>displayText</span>;
}

const parrafos = ["SOMOS HEART SOUL, ESTOS SON LOS DISTINTOS SERVICIOS QUE OFRECEMOS,      Heart & SoulSalón de belleza•Since 2016•• Extensiones de pestañas• Cejas• Volumen avanzado🎓 Cursos | + de 300 alumnas graduadas📍Luppi 1261 - Pompeya CABA"]

function About() {
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);

  // talvez sirve para depues
  // const handleTypingComplete = () => {
  //   if (currentParagraphIndex < parrafos.length - 1)
  //   {
  //     setCurrentParagraphIndex(prevIndex => prevIndex + 1);
  //   }
  // };

  return (
    <div id="about-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '8rem' }}>
     <img
        src={logo}
        className="logo-animation h-80 w-80"
        alt="Fler Dev Logo"
      />


 <div className="text-white px-5 lg:mx-28 mx-5 min-h-[500px] md:min-h-[280px] sm:min-h-[333px] my-10 py-3 bg-[rgba(0,0,0,0.49)] rounded-xl">
      <h2 className="md:text-3xl text-2xl font-bold mb-6">HEART SOUL</h2>
    <div className='md:text-2xl text-lg md:leading-[3rem] leading-[2rem] font-semibold'>
        {parrafos.map((p, index) => (
            <div key={index}>
              <p>
                {index <= currentParagraphIndex &&
                  <Typewriter
                    text={p}
                    delay={30}
                    onTypingComplete={() => {
                      if (index === currentParagraphIndex)
                      {
                        setCurrentParagraphIndex(prevIndex => prevIndex + 1);
                      }
                    }}
                  />}
              </p><br />
            </div>
          ))}
        </div >
      </div> 


      
      {/* // <div className="text-white px-5 lg:mx-28 mx-5 min-h-[500px] md:min-h-[280px] sm:min-h-[333px] my-10 py-3 bg-[rgba(0,0,0,0.49)] rounded-xl">
      //   <h2 className="md:text-3xl text-2xl font-bold mb-6">Sobre Mi</h2>
      //   <div className='md:text-2xl text-lg md:leading-[3rem] leading-[2rem] font-semibold'>
      //     {parrafos.map((p, index) => (
      //       <div key={index}>
      //         <p>
      //           {index <= currentParagraphIndex &&
      //             <Typewriter
      //               text={p}
      //               delay={30}
      //               onTypingComplete={() => {
      //                 if (index === currentParagraphIndex)
      //                 {
      //                   setCurrentParagraphIndex(prevIndex => prevIndex + 1);
      //                 }
      //               }}
      //             />}
      //         </p><br />
      //       </div>
      //     ))}
      //   </div >
      // </div> } */}
    </div>
  );
}

export default About;

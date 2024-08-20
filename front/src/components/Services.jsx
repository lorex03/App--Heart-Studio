import React, { useState } from 'react';
import prueba1 from "../assets/efectoweet.gif";
import prueba2 from "../assets/efectohumedo.gif";
import prueba3 from "../assets/video1laminado.gif";
import "../App.css";

function Services() {
  const [zoomedCard, setZoomedCard] = useState(null);

  const handleCardClick = (index) => {
    setZoomedCard(index);
  };

  const closeOverlay = () => {
    setZoomedCard(null);
  };

  const cardContent = [
    {
      title: 'Efecto Weet (Wet Look)',
      description: 'El efecto Weet en cejas es una técnica de maquillaje que da a las cejas un aspecto brillante y pulido, similar a como se verían mojadas. Este look se logra utilizando geles transparentes o con brillo que mantienen las cejas en su lugar mientras les dan un acabado lustroso y definido. Es ideal para quienes buscan una apariencia fresca y moderna que realza la estructura natural de las cejas.',
      image: prueba1
    },
    {
      title: 'Efecto Humedo',
      description: 'El efecto húmedo en cejas implica el uso de productos como geles fijadores o ceras que proporcionan un acabado brillante y bien definido. A diferencia del efecto Weet, que se enfoca en un look mojado más acentuado, el efecto húmedo busca una apariencia más sutil y natural, manteniendo las cejas peinadas y en su lugar con un brillo moderado. Este estilo es perfecto para un look diario que destaca la belleza natural de las cejas.',
      image: prueba2
    },
    {
      title: 'Laminado Ruso de Cejas',
      description: 'El laminado ruso de cejas es un tratamiento semipermanente que alisa, levanta y da forma a las cejas para lograr un look más lleno y arreglado. Utilizando una solución especial, las cejas se peinan hacia arriba y se fijan en esa posición, lo que crea un efecto de cejas más densas y bien definidas. Este procedimiento es ideal para quienes tienen cejas rebeldes o escasas y desean un look más estructurado y duradero sin la necesidad de retoques diarios.',
      image: prueba3
    }
  ];

  return (
    <div className="pt-24">
      <h1 className="text-6xl font-bold whitespace-nowrap text-white drop-shadow-[3px_2px_2px_rgba(0,0,0,0.7)] mb-8 text-center">
        Servicios
      </h1>
      <div id='services' className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 justify-items-center">
        {cardContent.map((content, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className={`zoom-effect-container max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer`}
          >
            <img className="zoom-effect-image rounded-t-lg" src={content.image} alt={`Card ${index + 1}`} />
            <div className={`p-5 ${zoomedCard === index ? 'hidden' : ''}`}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {content.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl">
                {content.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {zoomedCard !== null && (
        <div className="overlay visible" onClick={closeOverlay}>
          <div className="zoomed-card max-w-4xl bg-white p-4 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 flex">
            <img className="rounded-l-lg" src={cardContent[zoomedCard].image} alt="Zoomed" />
            <div className="p-5 flex-1">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {cardContent[zoomedCard].title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl">
                {cardContent[zoomedCard].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;

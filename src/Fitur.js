/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
  
*/
import Axios from "axios";
import React, { useState, useEffect } from "react";
// const callouts = [
//     {
//       name: 'Kabupaten Ponorogo, Jawa Timur',
//       description: 'Gontor',
//       imageSrc: 'https://drive.google.com/uc?export=view&id=1OruzlJnBt-krObT_XI_7EiEWYc8NYJFk',
//       imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
//       href: 'Forgontor',
//     },
//     {
//       name: 'Kabupaten Kediri, Jawa Timur',
//       description: 'Lirboyo',
//       imageSrc: 'https://drive.google.com/uc?export=view&id=1hTloVWQNPiAHPaIlsPrCmF1jvawtDwTY',
//       imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
//       href: 'Forlirboyo',
//     },
//     {
//       name: 'Kabupaten Jombang, Jawa Timur',
//       description: 'Tebu Ireng',
//       imageSrc: 'https://drive.google.com/uc?export=view&id=15EHKHVpi2OeqFzKM0UAdCSiga_gz9-DC',
//       imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
//       href: 'Fortebuireng',
//     },
//     {
//       name: 'Kabupaten Cilacap, Jawa Tengah',
//       description: 'Al Ihya Ulumuddin',
//       imageSrc: 'https://drive.google.com/uc?export=view&id=1a6O9bFnuhDBhi7OdaQk6AgC19xpaY04Z',
//       imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
//       href: 'Foralihya',
//     },
//     {
//       name: 'Kabupaten Sukaharjo, Jawa Tengah',
//       description: 'Al-Mukmin',
//       imageSrc: 'https://drive.google.com/uc?export=view&id=1UgXltx_yAyiRSthVHGPiDcwGvCWULgQe',
//       imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
//       href: '#',
//     },
//     {
//       name: 'Kabupaten Tuban, Jawa Timur',
//       description: 'Langitan',
//       imageSrc: 'https://drive.google.com/uc?export=view&id=1i8ER7teCuCrOXcNn84bcCf1lw0KcYuTG',
//       imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
//       href: '#',
//     },
//   ]
  
  export default function Example() {
    const [fitur, setFitur] = useState([]);

    useEffect(() => {
      getFitur();
    }, []);
  
    const getFitur = () => {
      Axios.get(`https://raw.githubusercontent.com/Reksa1903/API-SAYA/main/Fitur.json`)
        .then((res) => {
          const data = res.data;
          setFitur(data.fitur);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };
    return (
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="text-2xl font-extrabold text-gray-900">List Terpopuler</h2>
  
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {fitur.map((fitur) => (
                <div key={fitur.FiturID} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={fitur.url}
                      // alt={fitur.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={fitur.href}>
                      <span className="absolute inset-0" />
                      {fitur.FiturName}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900 pb-10">{fitur.Harga}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
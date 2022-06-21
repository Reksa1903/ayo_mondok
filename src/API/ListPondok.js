import Axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Example() {
  const [ListPondok, setListPondok] = useState([]);

  useEffect(() => {
    getListPondok();
  }, []);

  const getListPondok = () => {
    Axios.get('https://raw.githubusercontent.com/Reksa1903/API-REKSA/main/Listpondok.json')
      .then((res) => {
        const data = res.data;
        setListPondok(data.ListPondok);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  return (
    <>
    <Navbar/>
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">Terpanggi API</h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {ListPondok.map((ListPondok) => (
              <div key={ListPondok.ListPondokID} className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={ListPondok.url}
                    // alt={fitur.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  {/* <a href={List_PondokName.href}>
                    <span className="absolute inset-0" />
                    {ListPondok.List_PondokName}
                  </a> */}
                </h3>
                <p className="text-base font-semibold text-gray-900 pb-10">{ListPondok.Sejak}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import { API_BASE_URL } from "../config";
import "react-slideshow-image/dist/styles.css";

const PUBLICATIONS_URL = `${API_BASE_URL}/publications`;
export default function PublicationsSlider() {
  const [titles, setPublications] = useState([]);
  useEffect(() => {
    fetch(PUBLICATIONS_URL)
      .then((response) => response.json())
      .then((d) => {
        console.log(d);
        setPublications(d);
      });
  }, []);
  return (
    <div className="slide-container h-full">
      <Slide>
        {titles.map((value, index) => {
          return (
            <div className="each-slide">
              <PublicationTemplate
                key={index}
                name={value.id}
                title={value.Title}
                url={value.Files[0].url}
                description={value.Description}
              />
            </div>
          );
        })}
      </Slide>
    </div>
  );
}

function PublicationTemplate(props) {
  function handleClick(e) {
    e.preventDefault();
	let downloadURL = `${API_BASE_URL}${props.url}`
    window.open(downloadURL, "_blank");
    console.log("The link was clicked.");
  }

  return (
    <section className="w-full h-1/2  py-8 bg-white border-b">
      <div className="container flex flex-col pt-4 pb-12 mx-auto">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          {props.title}
        </h1>
        <div className="w-full">
          <div className="w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-25 gradient"></div>
        </div>
        <div className="flex flex-col w-full p-6 rounded-lg shadow-md">
          <div className="flex-1 overflow-hidden bg-white rounded-t">
            <a
              href="/"
              className="flex flex-wrap no-underline hover:no-underline"
            >
              <p className="px-6 mb-5 text-base text-gray-800">
                {props.description}
              </p>
            </a>
          </div>
          <div className="flex-none p-6 mt-auto overflow-hidden bg-white">
            <div className="flex items-center justify-start">
              <button
                className="px-8 py-4 mx-auto my-6 font-bold text-white  shadow-lg lg:mx-0 hover:underline gradient focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                onClick={handleClick}
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

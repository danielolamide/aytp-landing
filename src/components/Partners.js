import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../config";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const PARTNERS_URL = `${API_BASE_URL}/patners`;
export function PartnersSection() {
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    fetch(PARTNERS_URL)
      .then((response) => response.json())
      .then((d) => {
        console.log(d);
        setPartners(d);
      });
  }, []);

  return (
    <>
      <h1 className="bg-white w-full text-3xl font-bold pt-10 leading-tight text-center text-gray-800">
        Our Partners
      </h1>
      <div className="bg-white w-full text-black h-full">
        <br />
        <Slide>
          {partners.map((value, index) => {
            let url = `${API_BASE_URL}${value.PartnerLogo.url}`;
            return (
              <>
                <div className="each-slide">
                  <PartnerCard
                    key={index}
                    id={value.id}
                    name={value.PartnerName}
                    url={value.PartnerURL}
                    logo={url}
                  />
                </div>
              </>
            );
          })}
        </Slide>
      </div>
    </>
  );
}

function PartnerCard(props) {
  function handleClick(e) {
    e.preventDefault();
    window.open(props.url, "_blank");
    console.log("Partner link was clicked.");
  }

  return (
    <div onClick={handleClick} className="flex-col items-center">
      <img
        className="object-scale-down w-full h-28"
        src={props.logo}
        alt={props.name}
      />
      <p className="text-center">{props.name}</p>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../config";
import "react-slideshow-image/dist/styles.css";

const PATNERS_URL = `${API_BASE_URL}/patners`;
export function PatnersSection() {
  const [patners, setPatners] = useState([]);
  useEffect(() => {
    fetch(PATNERS_URL)
      .then((response) => response.json())
      .then((d) => {
        console.log(d);
        setPatners(d);
      });
  }, []);
  let outerStyle = {
    "box-sizing": "border-box",
    "align-content": "center",
    display: "flex",
    flex: "0 0 100%",
    "justify-content": "space-evenly",
    "list-style": "none",
  };
  let gridStyle = {
    "list-style": "none",
    "box-sizing": "border-box",
    "flex-wrap": "wrap",
    "max-width": "100.75rem",
    "flex-direction": "row",
    "justify-content": "space-around",
    display: "flex",
    margin: "1.5rem auto 3.75rem",
    padding: "0",
    width: " 100%",
    gap: "1rem 1.9rem",
    "grid-template-columns ": "repeat(2, minmax(0, 50%))",
  };
  let patnerStlye = {
    " list-style": "none",
    " box-sizing": "border-box",
    " align-items": "center",
    " display": "flex",
    " flex": " 0 1 50%",
    " justify-content": "center",
    " position": "relative",
  };
  return (
    <>
    <h1 className="bg-white w-full text-4xl font-bold pt-10 underline leading-tight text-center text-gray-800">
          Our Patners
    </h1>
    <div
      className="slide-container bg-white text-black h-full "
      style={outerStyle}
    >
      <ul style={gridStyle}>
        {patners.map((value, index) => {
          let url = `${API_BASE_URL}${value.PartnerLogo.url}`;
          return (
            <>
              <li className="each-slide" style={patnerStlye}>
                <PatnerCard
                  key={index}
                  id={value.id}
                  name={value.PartnerName}
                  url={value.PartnerURL}
                  logo={url}
                />
              </li>
            </>
          );
        })}
      </ul>
    </div>
    </>
  );
}

function PatnerCard(props) {
  function handleClick(e) {
    e.preventDefault();
    window.open(props.url, "_blank");
    console.log("Patner link was clicked.");
  }

  return (
    <>
      <img
        height="100%"
        width="100%"
        onclick={handleClick}
        src={props.logo}
        alt={props.name}
      />
    </>
  );
}

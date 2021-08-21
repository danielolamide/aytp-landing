import { useEffect, useState } from "react";
import { API_BASE_URL } from "../config";

const PRICEING_URL = `${API_BASE_URL}/courses`;

const defaultPricing = [
  {
    id: 1,
    Title: "Basic title",
    Description: "- Simple\n- Very Easy\n- To Use",
  },
  {
    id: 2,
    Title: "Main Offering",
    Description: "- Main\n- Offering\n- Details\n- WillBeHere",
  },
  {
    id: 3,
    Title: "High End Offering",
    Description: "- High\n- Value\n- Offering",
  },
];
export function Pricing() {
	const [prices, setPrices] = useState(defaultPricing);
	async function getPricing() {
	const response = await fetch(PRICEING_URL);
	const data = await response.json();
	setPrices(data);
	}
	//Turn markdown list view into an iteratable array
	function getListings(longDescriptionString) {
	let resultArray =  longDescriptionString
		.split("")
		.filter((l) => l !== "\n")
		.join("")
		.split("- ");
		return resultArray
	}
	useEffect(()=>{getPricing()}, []);
  return (
    <section className="py-8 bg-gray-100">
      <div className="container px-2 pt-4 pb-12 mx-auto text-gray-800">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Our Courses
        </h1>
        <div className="w-full mb-4">
          <div className="w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-25 gradient"></div>
        </div>
        <div className="flex flex-col justify-center pt-12 my-12 sm:flex-row sm:my-4">
          <div className="flex flex-col w-5/6 mx-auto mt-4 bg-white rounded-none lg:w-1/4 lg:mx-0 lg:rounded-l-lg">
            <div className="flex-1 overflow-hidden text-gray-600 bg-white rounded-t rounded-b-none shadow">
              <div className="p-8 text-3xl font-bold text-center border-b-4">
                {prices[0].Title}
              </div>
              <ul className="w-full text-sm text-center">
                {getListings(prices[0].Description).map((item,idx) => {
                  return <li key={idx} className="py-4 border-b" >{item}</li>;
                })}
              </ul>
            </div>
            <div className="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow">
              {/* <div className="w-full pt-6 text-3xl font-bold text-center text-gray-600">
								£0
								<span className="text-base">for one user</span>
							</div> */}
              <div className="flex items-center justify-center">
                <button className="px-8 py-4 mx-auto my-6 font-bold text-white rounded-full shadow-lg lg:mx-0 hover:underline gradient focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Comming Soon
                </button>
              </div>
            </div>
          </div>
          <div className="z-10 flex flex-col w-5/6 mx-auto mt-4 bg-white rounded-lg shadow-lg lg:w-1/3 lg:mx-0 sm:-mt-6">
            <div className="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow">
              <div className="w-full p-8 text-3xl font-bold text-center">
                {prices[1].Title}
              </div>
              <div className="w-full h-1 py-0 my-0 rounded-t gradient"></div>
              <ul className="w-full text-base font-bold text-center">

                {getListings(prices[1].Description).map((item,idx) => {
					return <li key={idx} className="py-4 border-b" >{item}</li>;
                })}
              </ul>
            </div>
            <div className="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow">
              {/* <div className="w-full pt-6 text-4xl font-bold text-center">
								£x.99
								<span className="text-base">/ per user</span>
							</div> */}
              <div className="flex items-center justify-center">
                <button className="px-8 py-4 mx-auto my-6 font-bold text-white rounded-full shadow-lg lg:mx-0 hover:underline gradient focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Comming Soon
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-5/6 mx-auto mt-4 bg-white rounded-none lg:w-1/4 lg:mx-0 lg:rounded-l-lg">
            <div className="flex-1 overflow-hidden text-gray-600 bg-white rounded-t rounded-b-none shadow">
              <div className="p-8 text-3xl font-bold text-center border-b-4">
                {prices[2].Title}
              </div>
              <ul className="w-full text-sm text-center">
                {getListings(prices[2].Description).map((item,idx) => {
                  return <li className="py-4 border-b"  key={idx}>{item}</li>;
                })}
              </ul>
            </div>
            <div className="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow">
              {/* <div className="w-full pt-6 text-3xl font-bold text-center text-gray-600">
								£x.99
								<span className="text-base">/ per user</span>
							</div> */}
              <div className="flex items-center justify-center">
                <button className="px-8 py-4 mx-auto my-6 font-bold text-white rounded-full shadow-lg lg:mx-0 hover:underline gradient focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Comming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

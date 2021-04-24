// import Rosemary from "../assets/img/RosemaryOkello.png";
// import Diana from "../assets/img/DianaOwuor.jpg";
// import Martin from "../assets/img/MartinMbaya.jpg";
// import Teddy from "../assets/img/TeddyWaria.png";
import React, { useEffect, useState } from "react";
const FOUNDERS_URL = "http://34.66.0.133/teams"


function Person(props) {
	let imageUrl = "http://34.66.0.133" + props.source
	let stakeHolderName = props.name
	let currentRole = props.role
	return (
		<>
			<div class="w-full md:w-1/4 p-3 flex flex-strech">
				<div className="flex flex-col flex-strech w-full h-full">
				<img alt="Rosemary" src={imageUrl} className="w-full h-4/5" />
				<p className="text-black text-2xl font-bold text-center my-4" >{stakeHolderName}</p>
				<p className="text-black text-center" >{currentRole}</p>
				</div>

			</div>
		</>
	);

}


export default function People() {
	const [founders, setFounder] = useState([])
	useEffect(() => {
		fetch(FOUNDERS_URL)
			.then(response => response.json())
			.then((d) => {
				setFounder(d)
			})
	}, [])

	return (
		<section className="py-8 bg-white border-b">
			<div className="container flex flex-wrap pt-4 pb-22 mx-auto">
				<h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
					Our Team
				</h1>
				<div className="w-full mb-4">
					<div className="w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-25 gradient"></div>
				</div>

				{founders.map((value, index) => {
					return <Person source={value["Photo"]["url"]} name={value["Name"]} role={value["Role"]}/>
				})}
				{/* <Person source={Rosemary}/>
        <Person source={Diana}/>
        <Person source={Martin}/>
        <Person source={Teddy}/> */}
			</div>
		</section>
	);
}

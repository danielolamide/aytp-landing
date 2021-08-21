import { useState,useEffect } from "react";
import { API_BASE_URL } from "../../config";

export default function Navbar() {
	let [logoData,setLogoData] = useState({Logo:{url:""}})
	useEffect(()=>{
		fetch(`${API_BASE_URL}/header`).then( (resp)=>resp.json()).then((data)=>{
			setLogoData(data)
			console.log(data.Logo)
		})
	},[])
	return (
		<nav className="fixed top-0 z-30 w-full bg-white text-black">
			<div className="flex w-full p-6">
				<div>
					<img src={`${API_BASE_URL}${logoData.Logo.url}`} alt="logo" height="30" width="30"></img>
				</div>
				<div className="flex justify-end flex-1">
					<ul className="flex">
						<li className="mr-4">Home</li>
						<li className="mr-4">About</li>
						<li className="mr-4">Events</li>
						<li className="mr-4">Contact Us</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

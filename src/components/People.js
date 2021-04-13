import Rosemary from "../assets/img/RosemaryOkello.png";
import Diana from "../assets/img/DianaOwuor.jpg";
import Martin from "../assets/img/MartinMbaya.jpg";
import Teddy from "../assets/img/TeddyWaria.png";



function Person(props){
  return(
        <div class="w-full md:w-1/4 p-9 flex flex-strech">
					<img alt="Rosemary"src={props.source} className="w-full" />
				 </div>
			);

}


export default function People() {
	return (
		<section className="py-8 bg-white border-b">
			<div className="container flex flex-wrap pt-4 pb-12 mx-auto">
				<h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
					Our Team
				</h1>
				<div className="w-full mb-4">
					<div className="w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-25 gradient"></div>
				</div>
        <Person source={Rosemary}/>
        <Person source={Diana}/>
        <Person source={Martin}/>
        <Person source={Teddy}/>
		</div>
		</section>
	);
}

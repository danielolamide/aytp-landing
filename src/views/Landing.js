import React from 'react';
import { Link } from 'react-router-dom';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Background from "../assets/img/background.svg";
import TeamSlider from '../components/Sliders/TeamSlider';
import CardItem from '../components/Cards/CardItem';

export default function Landing() {
    return(
        <>
        <Navbar/>
        <main>
        	<div className="relative pt-44 pb-64 flex content-center items-center justify-center min-h-screen-75">
          		<div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: "url(" + {Background} + ")",}} >
                    <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black" ></span>
                </div>
                <div className="container relative mx-auto">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                            <div className="pr-12">
                                <h1 className="text-white font-semibold text-5xl"> Every mind yearns to learn </h1>
                                <p className="mt-4 text-lg text-gray-200">
                                    Place a message here to sell your brand. Not to long, not too short, make it just right! </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="pb-20 bg-gray-200 -mt-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                            <CardItem/>
                        </div>
                        <div className=" w-full md:w-4/12 px-4 text-center">
                           <CardItem />
                        </div>
                        <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                            <CardItem />
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center mt-32">
						<div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
							<div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-500">
								<i className="fas fa-users text-xl"></i>
							</div>
							<h3 className="text-3xl mb-2 text-gray-500 font-semibold leading-normal">
								Add more words
							</h3>
							<p className="text-base font-light leading-relaxed mt-4 mb-4 text-gray-600">
								Don't let your uses guess by attaching tooltips and popoves to
								any element. Just make sure you enable them first via JavaScript.
							</p>
							<p className="text-base font-light leading-relaxed mt-0 mb-4 text-gray-600">
								Even the world's most successful individuals have experienced their fair share of setbacks and hardships. 
								And there's much to learn from their challenges as well as their success. 
								So, let's take a look at some of their quotes to get energized and inspired
							</p>
							<Link to="/" className="font-bold text-gray-700 mt-8">
								Elearn Online Learning
							</Link>
						</div>
						<div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
							<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg bg-gray-100 rounded-lg">
								<img alt="..." src={require("../assets/img/book.jpg").default} className="w-full align-middle rounded-t-lg" />
								<blockquote className="relative p-8 mb-4">
									<h4 className="text-xl font-bold text-gray-500">Our Services</h4>
									<p className="text-md font-light mt-2 text-gray-500">
										Even the world's most successful individuals have experienced their fair share of setbacks and hardships. 
										And there's much to learn from their challenges as well as their success. 
										So, let's take a look at some of their quotes to get energized and inspired
									</p>
								</blockquote>
							</div>
						</div>
                    </div>
                </div>
            </section>
			<section className="relative py-20">
				<div className="container mx-auto px-4">
					<div className="items-center flex flex-wrap">
						<div className="w-full md:w-4/12 ml-auto mr-auto px-4">
							<img alt="..." className="max-w-full rounded-lg shadow-lg" src={require("../assets/img/hbook.jpg").default} />
						</div>
						<div className="w-full md:w-5/12 ml-auto mr-auto px-4">
							<div className="md:pr-12">
								<div className="text-black text-lg p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
									<i class="fa fa-graduation-cap" aria-hidden="true"></i>
								</div>
								<h3 className="text-3xl font-semibold">A growing company</h3>
								<p className="mt-4 text-lg leading-relaxed text-gray-500">
									Even the world's most successful individuals have experienced their fair share of setbacks and hardships. 
									And there's much to learn from their challenges as well as their success. 
								</p>
								<ul className="list-none mt-6">
									<li className="py-2">
										<div className="flex items-center">
											<div>
												<span className="text-base font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-gray-100 mr-3">
													<i class="fa fa-check-circle" aria-hidden="true"></i>
												</span>
											</div>
											<div>
												<h4 className="text-gray-500">
													Carefully crafted components
												</h4>
											</div>
										</div>
									</li>
									<li className="py-2">
										<div className="flex items-center">
											<div>
												<span className="text-base font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-gray-100 mr-3">
													<i class="fa fa-check-circle" aria-hidden="true"></i>
												</span>
											</div>
											<div>
												<h4 className="text-gray-500">
													Amazing page examples
												</h4>
											</div>
										</div>
									</li>
									<li className="py-2">
										<div className="flex items-center">
											<div>
												<span className="text-base font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-gray-100 mr-3">
													<i class="fa fa-check-circle" aria-hidden="true"></i>
												</span>
											</div>
											<div>
												<h4 className="text-gray-500">
													Dynamic components
												</h4>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<TeamSlider/>
        	<section className="pb-20 relative block bg-gray-600">
				<div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
					<div className="flex flex-wrap text-center justify-center">
						<div className="w-full lg:w-6/12 px-4">
							<h2 className="text-4xl font-semibold text-white"> Contact Us </h2>
							<p className="text-lg leading-relaxed mt-4 mb-4 pb-10 lg:pb-0 text-white">
								"Don't judge each day by the harvest you reap but by the seeds that you plant." -Robert Louis Stevenson
							</p>
						</div>
					</div>
          		</div>
        	</section>
        	<section className="relative block py-24 lg:pt-0 bg-gray-600">
				<div className="container mx-auto px-4">
					<div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
						<div className="w-full lg:w-6/12 px-4">
							<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200">
								<div className="flex-auto p-5 lg:p-10">
									<h4 className="text-2xl font-semibold text-gray-900"> Want to work with us? </h4>
									<p className="leading-relaxed mt-1 mb-4 text-gray-500"> Complete this form and we will get back to you in 24 hours. </p>
									<div className="relative w-full mb-3 mt-8">
										<label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="full-name" > Full Name </label>
										<input type="text" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Full Name" />
									</div>
									<div className="relative w-full mb-3">
										<label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="email" > Email </label>
										<input type="email" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email" />
									</div>
									<div className="relative w-full mb-3">
										<label className="block uppercase text-gray-600 text-xs font-bold mb-2" htmlFor="message" > Message </label>
										<div type="text" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="6">
											<CKEditor editor={ClassicEditor} />
										</div>
									</div>
									<div className="text-center mt-6">
										<button className="bg-blue-800 text-white active:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" >
											Send Message
										</button>
									</div>
								</div>
							</div>
						</div>
            		</div>
          		</div>
        	</section>
      	</main>
        <Footer/>
        </>
    );
}
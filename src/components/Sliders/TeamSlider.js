import React from 'react';

export default function TeamSlider() {
    return(
        <section className="pt-20 pb-48">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center text-center mb-24">
                    <div className="w-full lg:w-6/12 px-4">
                        <h2 className="text-4xl text-gray-500 font-semibold">Our Team</h2>
                        <p className="text-lg leading-relaxed m-4 text-gray-500">
                            "When you reach the end of your rope, tie a knot in it and hang on." -Franklin D. Roosevelt.
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap row">
                    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-12">
                        <div className="px-10">
                            <img alt="..." src={require("../../assets/img/bprofile.svg").default} className="shadow-lg rounded-full mx-auto max-w-px"/>
                            <div className="pt-6 text-center">
                                <h5 className="text-xl font-bold text-gray-500">Ryan Tompson</h5>
                                <p className="mt-1 text-sm text-gray-400  font-semibold"> Web Developer </p>
                                <div className="mt-6">
                                    <button className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                        <i className="fab fa-twitter"></i>
                                    </button>
                                    <button className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                        <i class="fab fa-google" aria-hidden="true"></i>
                                    </button>
                                    <button className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button" >
                                        <i class="fab fa-linkedin" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-12">
                        <div className="px-10">
                            <img alt="..." src={require("../../assets/img/bprofile.svg").default} className="shadow-lg rounded-full mx-auto max-w-px"/>
                            <div className="pt-6 text-center">
                                <h5 className="text-xl font-bold text-gray-500">Ryan Tompson</h5>
                                <p className="mt-1 text-sm text-gray-400  font-semibold"> Web Developer </p>
                                <div className="mt-6">
                                    <button className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                        <i className="fab fa-twitter"></i>
                                    </button>
                                    <button className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                        <i class="fab fa-google" aria-hidden="true"></i>
                                    </button>
                                    <button className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button" >
                                        <i class="fab fa-linkedin" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-12">
                        <div className="px-10">
                            <img alt="..." src={require("../../assets/img/bprofile.svg").default} className="shadow-lg rounded-full mx-auto max-w-px"/>
                            <div className="pt-6 text-center">
                                <h5 className="text-xl font-bold text-gray-500">Ryan Tompson</h5>
                                <p className="mt-1 text-sm text-gray-400  font-semibold"> Web Developer </p>
                                <div className="mt-6">
                                    <button className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                        <i className="fab fa-twitter"></i>
                                    </button>
                                    <button className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                        <i class="fab fa-google" aria-hidden="true"></i>
                                    </button>
                                    <button className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button" >
                                        <i class="fab fa-linkedin" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-12">
                        <div className="px-10">
                            <img alt="..." src={require("../../assets/img/bprofile.svg").default} className="shadow-lg rounded-full mx-auto max-w-px"/>
                            <div className="pt-6 text-center">
                                <h5 className="text-xl font-bold text-gray-500">Ryan Tompson</h5>
                                <p className="mt-1 text-sm text-gray-400  font-semibold"> Web Developer </p>
                                <div className="mt-6">
                                    <button className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                        <i className="fab fa-twitter"></i>
                                    </button>
                                    <button className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                                        <i class="fab fa-google" aria-hidden="true"></i>
                                    </button>
                                    <button className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button" >
                                        <i class="fab fa-linkedin" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
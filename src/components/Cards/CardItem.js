import React from 'react';

export default function CardItem() {
    return(
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                </div>
                <h6 className="text-xl font-semibold text-gray-500 ">Card Item</h6>
                <p className="mt-2 mb-4 text-gray-500">
                    Create online courses and coaching services. Transform your experience and know-how into a thriving knowledge business.
                </p>
            </div>
        </div>
    );
};
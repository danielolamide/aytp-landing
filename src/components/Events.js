export default function Events() {
	return (
		<section className="w-full py-8 bg-white border-b">
			<div className="container flex flex-col pt-4 pb-12 mx-auto">
				<h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
					Upcoming Events
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
							<p className="w-full px-6 text-xs text-gray-600 md:text-sm">
								GETTING STARTED
							</p>
							<div className="w-full px-6 text-xl font-bold text-gray-800">
								Lorem ipsum dolor sit amet.
							</div>
							<p className="px-6 mb-5 text-base text-gray-800">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
								at ipsum eu nunc commodo posuere et sit amet ligula.
							</p>
						</a>
					</div>
					<div className="flex-none p-6 mt-auto overflow-hidden bg-white">
						<div className="flex items-center justify-start">
							<button className="px-8 py-4 mx-auto my-6 font-bold text-white rounded-full shadow-lg lg:mx-0 hover:underline gradient focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
								Action
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

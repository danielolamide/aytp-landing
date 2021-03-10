export default function Navbar() {
	return (
		<nav className="fixed top-0 z-30 w-full text-white">
			<div className="flex w-full p-6">
				<div>
					<span>Half 1</span>
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

import { Meteors } from "@/components/ui/meteors";
function page() {
	return (
		<div className=" min-h-screen bg-black py-12 pt-36">
			<h1 className="text-lg md:text-4xl font-bold text-center font-sans  mb-8 text-white">
				Contact Us
			</h1>
			<div className="flex flex-col items-center justify-center ">
				<p className="max-w-md mx-auto text-center text-gray-400 text-sm">
					We're here to help with any questions about our courses,
					programs, or events. Reach out and let us know how we can
					assist you in your musical journey.
				</p>
				<input
					type="text"
					className="w-full max-w-lg mx-auto mt-4 my-4 bg-gray-700  text-gray-400 p-2 rounded-md "
					placeholder="Please enter your email address"
				></input>
				<textarea
					className="w-full max-w-lg mx-auto mt-4 my-4 bg-gray-700  text-gray-400 p-2 rounded-md h-24 text-start resize-none"
					placeholder="Your message"
					rows={3}
				></textarea>
				<button className=" mx-auto mt-4 my-4 bg-green-800 hover:bg-green-700  text-gray-100 p-2 rounded-md">
					Send Message
				</button>
			</div>

			<Meteors number={20} className="" />
		</div>
	);
}

export default page;

import { useEffect, useState } from "react";



const Admission = () => {
    const [colleges, setCollages] = useState([])

    useEffect(() => {
        fetch('https://collage-facilities-server.vercel.app/collages')
            .then(res => res.json())
            .then(data => setCollages(data))
    }, [])
    console.log(colleges[0]);
    const [showModal, setShowModal] = useState(false);

    // Sample data for the college names

    const handleCollegeClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <div>
            <section className="py-10 pt-28">
                <div className="container mx-auto px-4 ">
                    <h2 className="text-3xl font-semibold mb-8">Colleges</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {colleges.map((college, index) => (
                            <div
                                key={index}
                                className="cursor-pointer bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transform transition-transform duration-300 hover:scale-105 border border-gray-200"
                                onClick={() => handleCollegeClick(college)}
                            >
                                <img
                                    src={college.image_url}
                                    alt={college.college_name}
                                    className="w-32 h-32 object-cover mx-auto rounded-full mb-4 border border-blue-500"
                                />
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{college.college_name}</h3>
                                <p className="text-gray-600 mb-4">Click to Apply</p>
                                <div className="flex items-center justify-center">
                                    <span className="text-yellow-500 font-bold text-sm">Rating:</span>
                                    <span className="text-yellow-500 font-bold ml-1">{college.rating}</span>
                                </div>
                                <div className="mt-4">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-400"
                                        onClick={() => handleCollegeClick(college)}
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modal */}
                {showModal && (
                    <div className="fixed  inset-0 z-50 flex items-center justify-center">
                        <div className="bg-gray-400 bg-opacity-40 w-11/12 rounded-lg shadow-lg p-6 mx-4 md:mx-auto md:max-w-md">
                            <button
                                className="absolute top-28 right-[40%] text-gray-600 hover:text-gray-800"
                                onClick={handleCloseModal}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <h3 className="text-xl text-white font-semibold mb-4">Apply to College</h3>
                            {/* Input fields */}
                            <form>
                                <div className="bg-white shadow-lg rounded-lg p-6">
                                    {/* Candidate Name */}
                                    <div className="mb-4">
                                        <label className="block text-gray-800 font-semibold mb-2">Candidate Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-500"
                                            placeholder="Enter candidate name"
                                        />
                                    </div>

                                    {/* Subject */}
                                    <div className="mb-4">
                                        <label className="block text-gray-800 font-semibold mb-2">Subject</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-500"
                                            placeholder="Enter subject"
                                        />
                                    </div>

                                    {/* Candidate Email */}
                                    <div className="mb-4">
                                        <label className="block text-gray-800 font-semibold mb-2">Candidate Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-500"
                                            placeholder="Enter candidate email"
                                        />
                                    </div>

                                    {/* Candidate Phone number */}
                                    <div className="mb-4">
                                        <label className="block text-gray-800 font-semibold mb-2">Candidate Phone number</label>
                                        <input
                                            type="tel"
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-500"
                                            placeholder="Enter candidate phone number"
                                        />
                                    </div>

                                    {/* Address */}
                                    <div className="mb-4">
                                        <label className="block text-gray-800 font-semibold mb-2">Address</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-500"
                                            placeholder="Enter address"
                                        />
                                    </div>

                                    {/* Date of Birth */}
                                    <div className="mb-4">
                                        <label className="block text-gray-800 font-semibold mb-2">Date of Birth</label>
                                        <input
                                            type="date"
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-gray-800"
                                        />
                                    </div>

                                    {/* Image field */}
                                    <div className="mb-4">
                                        <label className="block text-gray-800 font-semibold mb-2">Image</label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-gray-800"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Admission;
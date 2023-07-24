import { Link, useLoaderData } from "react-router-dom";


const AllCollages = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div className="grid lg:grid-cols-3 gap-9">
            {
                data.map(collage => <div key={collage._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                {/* College Image */}
                <img
                    src={collage.image_url}
                    alt={collage.college_name}
                    className="w-full h-40 object-cover"
                />

                {/* College Name */}
                <h2 className="text-2xl font-bold text-gray-800 px-4 py-2">{collage.college_name}</h2>

                {/* College Rating */}
                <div className="px-4 py-2 flex items-center">
                    <span className="text-yellow-500 font-bold mr-1">Rating:</span>
                    <span className="text-yellow-500 font-bold">{collage.rating}</span>
                </div>

                {/* Admission Dates */}
                <div className="px-4 py-2">
                    <p className="text-gray-600 font-medium">Admission Dates:</p>
                    <ul className="list-disc list-inside">
                        <li>Fall: {collage.admission_dates.fall}</li>
                        <li>Spring: {collage.admission_dates.spring}</li>
                    </ul>
                </div>

                {/* Number of Research */}
                <div className="px-4 py-2">
                    <p className="text-gray-600 font-medium">Number of Research: {collage.admission_dates.research_works.length}</p>
                   
                </div>

                {/* Details Button */}
                <div className="px-4 py-2 text-center">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                    <Link to={`/collages/${collage._id}`}>Details</Link>
                        
                    </button>
                </div>
            </div>)
            }
        </div>
    );
};

export default AllCollages;
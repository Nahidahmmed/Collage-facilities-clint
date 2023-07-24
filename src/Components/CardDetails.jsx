import { useLoaderData } from "react-router-dom";


const CardDetails = () => {
    const data = useLoaderData();
    console.log(data.admission_dates.events_details);
    return (
        <div>
            <section className="py-16 bg-white">
                {/* College Image and Name */}
                <div className="col-span-1 overflow-hidden relative md:col-span-2 lg:col-span-1">
                    <img
                        src={data.image_url}
                        alt="College Image"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                    <div className="absolute top-0 left-0 bg-black bg-opacity-40 w-96 h-36 py-6 px-8 text-white text-4xl font-bold">
                        <h1>{data.college_name}</h1>
                        <h1 className="text-base md:text-lg">Admission dates</h1>
                        <div className="flex gap-4">
                        <p className="text-base md:text-lg">{data.admission_dates.fall}</p>
                        <p className="text-base md:text-lg">{data.admission_dates.spring}</p>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4">

                    <div className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Events Details */}
                        <div className="col-span-1">
                            <div className="bg-green-400 text-white p-6 rounded-lg shadow-md h-full">
                                <h3 className="text-xl md:text-2xl font-semibold mb-4">Events Details</h3>
                                {
                                    data.admission_dates.events_details.map((details, index) =>
                                        <div key={index} className="text-base mt-4 md:text-lg">
                                            <h1><span className="font-bold">Event Name:</span> {details.event_name}</h1>
                                            <p><span className="font-bold">Date:</span> {details.date}</p>
                                            <p><span className="font-bold">Description:</span> {details.description}</p>
                                        </div>
                                    )
                                }

                                <button className="mt-14 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Research Works */}
                        <div className="col-span-1  h-full">
                            <div className="bg-purple-400 text-white p-6 rounded-lg shadow-md ">
                                <h3 className="text-xl md:text-2xl font-semibold mb-4">Research Works</h3>
                                {
                                    data.admission_dates.research_works.map((work,index) => 
                                    <div className="mt-6" key={index}>
                                        <h1><span className="font-bold">Title:</span> <br /> {work.title}</h1>
                                        <h1><span className="font-bold">description:</span> {work.description}</h1>
                                        <p><span className="font-bold">publish date:</span> {work.publication_date}</p>
                                    </div>)
                                }
                                <p className="text-base md:text-lg">
                                    
                                </p>
                                <button className="mt-6 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Sports Categories */}
                        <div className="col-span-1">
                            <div className="bg-yellow-400 text-white p-6 rounded-lg shadow-md h-full">
                                <h3 className="text-xl md:text-2xl font-semibold mb-4">Sports Categories</h3>
                                {
                                    data.admission_dates.sports_categories.map((game,index) =>
                                    <div key={index}>
                                        <ul  className="text-base md:text-lg">
                                            <li>{index + 1}. {game}</li>
                                        </ul>
                                    </div>)
                                }
                                {
                                    data.admission_dates.sports.map((game,index) => 
                                    <div key={index} className="mt-4">
                                        <h1><span className="font-bold">team name:</span> {game.team_name}</h1>
                                        <h1><span className="font-bold">sport name:</span> {game.sport_name}</h1>
                                    </div>)
                                }

                                
                                <button className="mt-6 bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors duration-300">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CardDetails;
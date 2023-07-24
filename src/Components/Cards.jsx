import { Link } from "react-router-dom";



const Cards = ({ collage }) => {




  console.log(collage.admission_dates.sports_categories);

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full">
        {/* College Image */}
        <div className="relative h-40 overflow-hidden rounded-t-lg">
          <img
            src={collage.image_url}
            alt="College"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-40 p-2 text-white font-bold">
            {collage.college_name}
          </div>
        </div>

        {/* College Name */}
        <h2 className="text-2xl font-bold mt-4 text-gray-800">{collage.college_name}</h2>

        {/* Admission Dates */}
        <div className="mt-4">
          <p className="text-gray-600 font-medium">Admission Dates:</p>
          <ul className="list-disc list-inside">
            <li>Fall: {collage.admission_dates.fall}</li>
            <li>Spring: {collage.admission_dates.spring}</li>
          </ul>
        </div>

        {/* Events */}
        <div className="mt-4">
          <p className="text-gray-600 font-medium">Events:</p>
          <ul className="list-disc list-inside">
            <li>{collage.admission_dates.events[0].event_name}</li>
            <li>{collage.admission_dates.events[1].event_name}</li>
          </ul>
        </div>

        {/* Research History */}
        <div className="mt-4">
          <p className="text-gray-600 font-medium">Research History:</p>
          <ul className="list-disc list-inside">
            <li>{collage.admission_dates.research_works[0].title}</li>
            <li>{collage.admission_dates.research_works[1].title}</li>
          </ul>
        </div>

        {/* Sports */}
        <div className="mt-4">
          <p className="text-gray-600 font-medium">Sports:</p>
          <ul className="list-disc list-inside">
            {
              collage.admission_dates.sports_categories.map((game, index) => <li key={index}>{game}</li>)
            }
          </ul>
        </div>
        <button className="bg-purple-600 lg:ms-[270px] text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300">
          <Link to={`/collages/${collage._id}`}>View Details</Link>
        </button>
      </div>
    </>
  );
};

export default Cards;
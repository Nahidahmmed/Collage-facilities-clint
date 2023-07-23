import { useEffect, useState } from "react";
import Cards from "../../../Components/Cards";
import GroupPicture from "../../../Components/GroupPicture";
import ResearchPaper from "../../../Components/ResearchPaper";



const Home = () => {

    const [Collages, setCollages] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/collages')
            .then(res => res.json())
            .then(data => setCollages(data))
    }, [])
    const collage_data = Collages.slice(0, 3);
    return (
        <div>
            <div>
                <div className="hero h-[500px] " style={{ backgroundImage: "url(https://i.ibb.co/hdCHSfS/entrepreneur-593352.jpg)" }}>
                    <div className=" "></div>
                    <div className=" text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <input type="text" placeholder="scratch collage name" className="input input-bordered w-full max-w-xs" />
                            <button className="btn bg-orange-500 text-white hover:text-orange-500 hover:border-orange-500 hover:bg-orange-200 normal-case text-base">Scratch</button>
                            <h1 className="text-3xl font-bold mt-3">Bangladeshs Largest Collage Comparison Website!</h1>
                            <p className="text-xl font-semibold">Find Collages, Compare Collages Ratings, Explore collages.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:flex gap-5">
            {
                collage_data.map((collage,index) => 
                    <Cards  key={index} collage={collage}></Cards>    
                )
            }
            </div>
            <div>
                <GroupPicture></GroupPicture>
            </div>
            <div>
                <ResearchPaper></ResearchPaper>
            </div>
        </div>
    );
};

export default Home;
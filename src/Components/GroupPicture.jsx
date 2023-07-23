const GroupPicture = () => {
    const images = [
        { src: 'https://i.ibb.co/94cVWnC/360-F-338752127-Ke-LWD80r6a6t-Nug-Fm-Vrvcma5z-N5jd-QBn.jpg" alt="360-F-338752127-Ke-LWD80r6a6t-Nug-Fm-Vrvcma5z-N5jd-QBn', alt: 'Dhaka Collage' },
        { src: 'https://i.ibb.co/N18QHqd/6289884987afd-image.jpg', alt: 'Comilla College' },
        { src: 'https://i.ibb.co/hcN97V3/accomplishment-ceremony-education-graduation.jpg', alt: 'Bagerhat College' },
        { src: 'https://i.ibb.co/5h9PsxG/dhaka.jpg', alt: 'Dania College' },
        { src: 'https://i.ibb.co/fFrqRyj/foralumni.jpg', alt: 'Rajshahi College' },
        { src: 'https://i.ibb.co/Cvyntk5/graduates.jpg', alt: 'Rangpur College' },
        { src: 'https://i.ibb.co/L9kqG8C/images.jpg', alt: 'Soroardi College' },
        { src: 'https://i.ibb.co/jgrq1Hy/SUNY-Ulster-2017.jpg', alt: 'Kabi nazrul College' },
        { src: 'https://i.ibb.co/5h9PsxG/dhaka.jpg', alt: 'Shampur College' },
        // Add more images as needed
      ];
    return (
        <div>
            <div className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8">College Graduate Image Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {images.map((image, index) => (
                            <div key={index} className="rounded overflow-hidden shadow-lg">
                                <img src={image.src} alt={image.alt} className="w-full h-48 object-cover" />
                                <div className="px-6 py-4">
                                    <p className="text-gray-800 font-semibold">{image.alt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupPicture;
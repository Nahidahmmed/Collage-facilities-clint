const ResearchPaper = () => {
    const researchPapers = [
        { title: 'Title of Research Paper 1', link: 'https://www.example.com/paper1.pdf' },
        { title: 'Title of Research Paper 2', link: 'https://www.example.com/paper2.pdf' },
        { title: 'Title of Research Paper 3', link: 'https://www.example.com/paper3.pdf' },
        // Add more research paper links as needed
    ];
    return (
        <div>
            <section className="py-8 md:py-16 bg-gradient-to-r from-blue-400 to-blue-500 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8">Recommended Research Papers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {researchPapers.map((paper, index) => (
                            <a
                                key={index}
                                href={paper.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white p-6 rounded-lg shadow-md text-center block hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
                            >
                                <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">{paper.title}</p>
                                <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300">
                                    Read Paper
                                </button>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResearchPaper;
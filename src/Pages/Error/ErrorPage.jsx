
const ErrorPage = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-400 to-purple-500">
                <div className="text-center">
                    <h1 className="text-5xl font-semibold text-white mb-4">Oops!</h1>
                    <p className="text-xl text-white mb-28">404 - Page Not Found</p>
                    <h1 className="w-96 h-96 mx-auto font-bold text-7xl text-white  animate-bounce" >404</h1>
                    <p className="text-white">This page does not exist.</p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
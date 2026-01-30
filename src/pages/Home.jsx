const Home = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-xl w-full text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
          राजेश्वरी आबासाहेब सातव
        </h1>

        <p className="mt-3 text-gray-700">
          F.Y. B.Ed Student | Portfolio Development
        </p>

        <p className="mt-1 text-sm text-gray-500">
          Academic Year 2025–26
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/about"
            className="bg-blue-900 text-white px-6 py-2 rounded-lg"
          >
            About Me
          </a>

          <a
            href="/resume.pdf"
            download
            className="border border-blue-900 text-blue-900 px-6 py-2 rounded-lg"
          >
            Download Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

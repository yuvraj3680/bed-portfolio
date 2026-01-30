const Resume = () => {
    return (
      <div className="p-8 text-center">
        <h2 className="text-3xl font-bold text-blue-900">Resume</h2>
        <p className="mt-4">Click below to download my resume.</p>
  
        <a
          href="/resume.pdf"
          download
          className="inline-block mt-6 bg-blue-900 text-white px-6 py-2 rounded"
        >
          Download Resume
        </a>
      </div>
    );
  };
  
  export default Resume;
  
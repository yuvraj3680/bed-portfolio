const Records = () => {
  return (
    <div className="px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
          Portfolio Development
        </h2>

        <p className="mb-4">
          Subject: <strong>108 B – Portfolio Development</strong>
        </p>

        <ul className="list-disc ml-6 space-y-2">
          <li>Personal Profile</li>
          <li>Academic Records</li>
          <li>Educational Certificates</li>
          <li>About Me</li>
          <li>Teaching Preparation</li>
        </ul>

        <p className="mt-4 text-sm text-gray-500 italic">
          Records will be updated during B.Ed course.
        </p>
      </div>
    </div>
  );
};

export default Records;

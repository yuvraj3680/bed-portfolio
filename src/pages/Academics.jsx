const Academics = () => {
  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-6">
        Academic Records
      </h2>

      <div className="max-w-4xl mx-auto grid gap-4 sm:grid-cols-2">
        {[
          "10th Marksheet",
          "12th Marksheet",
          "B.A. (Marathi)",
          "MS-CIT Certificate",
          "JAIIB / J.B.F Certificate"
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-4 text-center"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Academics;

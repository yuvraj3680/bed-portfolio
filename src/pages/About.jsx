const About = () => {
  return (
    <div className="px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
          माझ्याबद्दल
        </h2>

        <p className="text-gray-700 mb-4">
          माझे नाव <strong>राजेश्वरी आबासाहेब सातव</strong> आहे.
          मी लोकनेते डॉ. बाबासाहेब विखे पाटील प्रवरा ग्रामीण शिक्षणशास्त्र
          महाविद्यालय, प्रवरानगर येथे F.Y. B.Ed मध्ये शिक्षण घेत आहे.
        </p>

        <p className="text-gray-700 mb-4">
          समाजासाठी व विद्यार्थ्यांसाठी गुणवत्तापूर्ण आणि
          मूल्याधिष्ठित शिक्षक घडणे हे माझे उद्दिष्ट आहे.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">कौशल्ये व आवडी</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc ml-6">
            <li>चित्रकला</li>
            <li>मेहंदी</li>
            <li>संगीत</li>
            <li>वाचन व लेखन</li>
            <li>विद्यार्थ्यांशी संवाद</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">माझा दृष्टीकोन</h3>
          <p className="text-gray-700">
            नवनवीन गोष्टी शिकून माझ्या कौशल्यांचा उपयोग
            विद्यार्थ्यांच्या सर्वांगीण विकासासाठी करणे
            हे माझे ध्येय आहे.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

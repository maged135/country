import { useState, useEffect } from "react";

function CountryInfoPage({ country }) {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    if (!country) return;

    const fetchCountryData = async () => {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,coatOfArms,independent,unMember,cca2"
        );
        const data = await res.json();
        const selected = data.find((c) => c.cca2 === country);
        setCountryData(selected || null);
      } catch (err) {
        console.log("Error fetching country data:", err);
      }
    };

    fetchCountryData();
  }, [country]);

  if (!countryData) return null;

  return (
    <div className="w-full bg-gray-100 p-6">
      <div className="mb-8 max-w-lg px-11">
        <h1 className="text-3xl font-bold mb-2 text-left ">Country Information</h1>
        <p className="text-gray-700 text-left">
          For the beginning of a new paragraph marks a change of topic or a step
          in the development of an argument or of a story in writing essays or other
          compositions too include.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* العلم */}
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
          <img src={countryData.flags?.png} alt="Flag" className="w-20 h-20 object-contain mb-2"/>
          <span className="font-semibold">Flag</span>
        </div>

        {/* شعار الدولة */}
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
          {countryData.coatOfArms?.png ? (
            <img src={countryData.coatOfArms.png} alt="Coat of Arms" className="w-20 h-20 object-contain mb-2"/>
          ) : (
            <div className="w-20 h-20 bg-gray-200 flex items-center justify-center mb-2">N/A</div>
          )}
          <span className="font-semibold">Coat of Arms</span>
        </div>

        {/* عضوية الأمم المتحدة */}
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
          <span className="w-20 h-20  flex items-center justify-center text-white mb-2">
                <img src="https://th.bing.com/th/id/R.fdbdeaea88c622c90d942746aedf469a?rik=qWvwUhvOpO3MVw&pid=ImgRaw&r=0" />
          </span>
          <span className="font-semibold">{countryData.unMember ? "✔" : "✖"}</span>
        </div>
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
          <span className="w-20 h-20  flex items-center justify-center text-white mb-2">
            <img src="https://cdn-icons-png.flaticon.com/256/11929/11929973.png"  />
          </span>

          <div className="flex flex-row">
            <span className="font-semibold">{countryData.independent ? "✔" : "✖"}</span>
            <span className="font-semibold">Independent</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryInfoPage;



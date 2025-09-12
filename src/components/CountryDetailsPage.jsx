// CountryDetailsPage.jsx
import { useEffect, useState } from "react";
import { FaUsers, FaGlobe, FaCalendarDay, FaClock, FaCity } from "react-icons/fa";

function CountryDetailsPage({ country }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (!country) return;

    const fetchDetails = async () => {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha/${country}?fields=population,region,capital,timezones,startOfWeek`
        );
        const data = await res.json();
        setDetails(data[0] || data);
      } catch (err) {
        console.error("Error fetching details:", err);
      }
    };

    fetchDetails();
  }, [country]);

  if (!details) return null;

  return (
    <div
      className="w-full min-h-[400px] bg-cover bg-no-repeat bg-center text-white p-8 md:p-16 bg-time-bg "
    >
      {/* العنوان */}
      <div className="flex justify-center mb-12">
        <h1 className="text-white text-3xl md:text-5xl font-bold">
          Read Some Facts
        </h1>
      </div>

      {/* البلوكات */}
      <div className="flex flex-col md:flex-row items-center justify-center text-center gap-10 md:gap-14">
        {/* عدد السكان */}
        <div className="flex flex-col items-center cursor-pointer">
          <div className="p-4 border-4 border-red-950 rounded-full hover:border-white hover:text-white">
            <FaUsers size={60} className="text-yellow-500 hover:text-white transition" />
          </div>
          <p className="text-xl md:text-2xl font-bold mt-4 hover:text-red-900 transition">
            {details.population.toLocaleString()}
          </p>
          <p className="text-base md:text-xl hover:text-red-900 transition">Population</p>
        </div>

        <div className="hidden md:block h-20 w-px bg-white"></div>

        {/* القارة */}
        <div className="flex flex-col items-center cursor-pointer">
          <div className="p-4 border-4 border-red-950 rounded-full hover:border-white hover:text-white">
            <FaGlobe size={60} className="text-yellow-500 hover:text-white transition" />
          </div>
          <p className="text-xl md:text-2xl font-bold mt-4 hover:text-red-900 transition">
            {details.region}
          </p>
          <p className="text-base md:text-xl hover:text-red-900 transition">Region</p>
        </div>

        <div className="hidden md:block h-20 w-px bg-white"></div>

        {/* يوم بداية الأسبوع */}
        <div className="flex flex-col items-center cursor-pointer">
          <div className="p-4 border-4 border-red-950 rounded-full hover:border-white hover:text-white">
            <FaCalendarDay size={60} className="text-yellow-500 hover:text-white transition" />
          </div>
          <p className="text-xl md:text-2xl font-bold mt-4 hover:text-red-900 transition">
            {details.startOfWeek}
          </p>
          <p className="text-base md:text-xl hover:text-red-900 transition">Start of Week</p>
        </div>

        <div className="hidden md:block h-20 w-px bg-white"></div>

        {/* التوقيت */}
        <div className="flex flex-col items-center cursor-pointer">
          <div className="p-4 border-4 border-red-950 rounded-full hover:border-white hover:text-white">
            <FaClock size={60} className="text-yellow-500 hover:text-white transition" />
          </div>
          <p className="text-xl md:text-2xl font-bold mt-4 hover:text-red-900 transition">
            {details.timezones[0]}
          </p>
          <p className="text-base md:text-xl hover:text-red-900 transition">Timezone</p>
        </div>

        <div className="hidden md:block h-20 w-px bg-white"></div>

        {/* العاصمة */}
        <div className="flex flex-col items-center cursor-pointer">
          <div className="p-4 border-4 border-red-950 rounded-full hover:border-white hover:text-white">
            <FaCity size={60} className="text-yellow-500 hover:text-white transition" />
          </div>
          <p className="text-xl md:text-2xl font-bold mt-4 hover:text-red-900 transition">
            {details.capital?.[0]}
          </p>
          <p className="text-base md:text-xl hover:text-red-900 transition">Capital</p>
        </div>
      </div>
    </div>
  );
}

export default CountryDetailsPage;

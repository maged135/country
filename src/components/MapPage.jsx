// MapPage.jsx
import { useEffect, useState } from "react";

function MapPage({ country }) {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        if (!country) return;

        const fetchDetails = async () => {
            try {
                const res = await fetch(
                    "https://restcountries.com/v3.1/all?fields=name,cca2,population,region,capital,timezones,startOfWeek,maps"
                );
                const data = await res.json();

                // نلاقي الدولة اللي اخترتها بالكود
                const selected = data.find((c) => c.cca2 === country);
                setDetails(selected);
            } catch (err) {
                console.error("Error fetching map details:", err);
            }
        };

        fetchDetails();
    }, [country]);

    if (!details) return null;

    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 p-6 md:p-12">
            {/* النصوص على الشمال */}
            <div className="md:w-1/2 w-full flex flex-col items-start text-left mb-8 md:mb-0 px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Location on Map
                </h1>
                <h2 className="text-lg md:text-2xl text-gray-700 mb-2">
                    Discover the world with Google Maps
                </h2>
                <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                    View 3D mapping, turn-by-turn directions, indoor maps and more across your device.
                </p>
                <a
                    href={details.maps.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-700 hover:bg-red-900 text-white font-semibold px-6 py-3 rounded-md transition"
                >
                    See on Google Maps
                </a>
            </div>

            {/* الخريطة على اليمين */}
            <div className="md:w-1/2 w-full flex justify-center">
                <iframe
                    title="Google Map"
                    src={`https://www.google.com/maps?q=${details.capital?.[0]}&output=embed`}
                    className="w-full md:w-[500px] h-[300px] md:h-[400px] rounded-lg shadow-lg"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>

        </div>
    );
}

export default MapPage;

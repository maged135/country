import { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import url1 from "../image/slide1.jpg";
import url2 from "../image/slide2.jpg";
import url3 from "../image/slide3.jpg";
import world from "../image/world.jpg";
import playicon from "../image/playicon.png";

function Home({ setSelectedCountry }) {
    const slides = [
        { url: `${url1}`, caption: "Hanging Gardens of Babylon" },
        { url: `${url2}`, caption: "Temple of Artemis" },
        { url: `${url3}`, caption: "Great Pyramids of Giza" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const res = await fetch(
                    "https://restcountries.com/v3.1/all?fields=name,cca2"
                );
                const data = await res.json();
                const countryList = data
                    .map((c) => ({ name: c.name.common, code: c.cca2 }))
                    .sort((a, b) => a.name.localeCompare(b.name));
                setCountries(countryList);
            } catch (err) {
                console.log("Error fetching countries:", err);
            }
        };
        fetchCountries();
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="w-full relative">
            {/* السلايدر */}
            <div
                className="w-full h-[80vh] bg-cover bg-center duration-500"
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            ></div>


            {/* النص */}
            <div className="absolute top-[100px]  left-1/2 md:left-1/4 -translate-x-1/2 md:translate-x-0 text-center md:text-left text-white max-w-sm md:max-w-md px-4">
                <h1 className="text-3xl md:text-7xl font-bold">Seven Wonders</h1>
                <h2 className="text-lg md:text-4xl mt-2">of the Ancient World</h2>
                <p className="mt-4 text-sm md:text-lg italic text-gray-200">
                    Great Pyramids of Giza
                </p>
            </div>

            {/* أزرار التنقل */}
            <button
                onClick={prevSlide}
                className="absolute top-[250px] left-1   text-white text-2xl md:text-4xl  bg-black/40 rounded-full hover:bg-black/70 transition"
            >
                <HiChevronLeft />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-[250px] right-3   text-white text-2xl md:text-4xl  bg-black/40 rounded-full hover:bg-black/70 transition"
            >
                <HiChevronRight />
            </button>

            <div className="relative w-full h-auto md:h-[300px] bg-blue-900 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 px-4 md:px-6 py-8 md:py-0">
                <div className="relative -top-10 md:-top-16 w-full max-w-[320px] md:max-w-[350px]">
                    {/* صورة الخلفية */}
                    <img
                        className="w-full h-[180px] md:h-[250px] filter brightness-90 rounded-lg"
                        src={world}
                        alt="World"
                    />
                    <img
                        src={playicon}
                        alt="Play Icon"
                        className="absolute bottom-2 right-2 w-10 h-10 cursor-pointer hover:scale-110 transition"
                    />
                </div>

                <div className="text-white text-center md:text-left">
                    <h1 className="text-xl md:text-4xl font-bold">Welcome to World Countries</h1>
                    <p className="text-sm md:text-lg leading-relaxed mt-2">
                        Here we go, we can go all around the world, we will visit every corner of this earth, you and I we will visit everywhere.
                    </p>
                    <select
                        className="w-full p-2 md:p-3 rounded-md text-black border-none mt-4"
                        defaultValue=""
                        onChange={(e) => setSelectedCountry(e.target.value)}
                    >
                        <option value="" disabled>
                            Select a Country
                        </option>
                        {countries.map((country) => (
                            <option
                                className="bg-slate-900 text-white"
                                key={country.code}
                                value={country.code}
                            >
                                {country.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Home;


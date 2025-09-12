import React, { useEffect, useState } from "react";
import { FiUser, FiExternalLink } from "react-icons/fi";

// API config
const API_URL = "https://api.worldnewsapi.com/search-news";
const API_KEY = "c063a96c57264903a1dae56c7ffd8123"; // الكود الجديد

export default function CityNews({ country }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!country) return;

    const fetchNews = async () => {
      try {
        setLoading(true);
        setError("");

        const params = new URLSearchParams({
          "api-key": API_KEY,
          "source-countries": country.toUpperCase(),
          number: 4,
        });

        const res = await fetch(`${API_URL}?${params.toString()}`);
        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }

        const data = await res.json();

        const mapped = (data?.news || []).map((n) => ({
          id: n?.id,
          date: new Date(
            n?.publish_date?.replace(" ", "T")
          ).toLocaleDateString(),
          title: n?.title,
          excerpt: n?.summary || n.text?.slice(0, 120),
          author: n?.author,
          category: n?.category,
          // لو مفيش صورة ندي Placeholder
          image:
            n?.image ||
            "https://via.placeholder.com/400x200.png?text=No+Image",
          url: n?.url,
          source_country: n?.source_country,
        }));

        if (mapped.length > 0) {
          setItems(mapped);
        } else {
          setError("لا توجد أخبار متاحة حالياً");
        }
      } catch (err) {
        console.error("Error fetching news:", err);
        setError(err.message || "حدث خطأ أثناء جلب الأخبار");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [country]);

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Be Updated with City News
          </h2>
          <p className="text-gray-500 mt-2">
            Read the News Updates and Articles about Government
          </p>
          {loading && (
            <p className="text-sm text-blue-600 mt-2">
              Loading latest headlines…
            </p>
          )}
          {error && (
            <p className="text-sm text-orange-600 mt-2">{error}</p>
          )}
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col h-full"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title?.split(" ").slice(0, 2).join(" ")}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x200.png?text=No+Image";
                  }}
                />
                <span className="absolute top-3 right-3 text-white text-xs font-semibold bg-blue-600 rounded px-2 py-1">
                  {item.category}
                </span>
              </div>
              <div className="px-5 py-4 flex-1">
                <p className="text-xs text-gray-400 mb-2">{item.date}</p>
                <h3 className="text-lg font-semibold text-gray-800 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-3 line-clamp-3">
                  {item.excerpt}
                </p>
              </div>
              <div className="mt-auto flex items-end justify-between px-5 py-3 border-t">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-gray-100">
                    <FiUser className="text-gray-600" />
                  </span>
                  <span>{item?.author || "Unknown"}</span>
                </div>
                {item?.url ? (
                  <a
                    href={item?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-7 w-7 inline-flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                    aria-label="Open article"
                  >
                    <FiExternalLink className="text-gray-600" />
                  </a>
                ) : (
                  <button className="h-7 w-7 inline-flex items-center justify-center rounded-full bg-gray-100">
                    <FiExternalLink className="text-gray-600" />
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

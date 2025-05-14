// src/pages/Home.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Movie = {
  _id: string;
  name: string;
  slug: string;
  thumb_url: string;
  poster_url: string;
  origin_name: string;
  year: number;
  quality: string;
  time: string;
  category: { name: string }[];
  description: string;
};

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [featured, setFeatured] = useState<Movie | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(20);

  useEffect(() => {
    fetch(`https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.items);
        setFeatured(data.items[0]);
        // setTotalPages(data.pagination.totalPages);
      })
      .catch((err) => console.error(err));
  }, [page]);

  const handlePageClick = (pageNumber: number) => setPage(pageNumber);

  const getPageRange = () => {
    const delta = 2;
    const start = Math.max(1, page - delta);
    const end = Math.min(totalPages, page + delta);
    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Banner section */}
      {featured && (
        <section
          className="mb-10 relative rounded-xl overflow-hidden bg-black text-white"
          id="featured-movie"
        >
          <div className="flex flex-col md:flex-row items-center md:items-stretch p-6 md:p-10 gap-6">
            {/* Poster */}
            <div className="w-full md:w-1/3 max-w-xs mx-auto">
              <img
                src={`https://img.ophim.live/uploads/movies/${featured.poster_url}`}
                alt={featured.name}
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* Thông tin */}
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {featured.name}
              </h2>
              <div className="flex items-center space-x-4 mb-3">
                <span className="bg-red-500 px-2 py-1 rounded text-sm">
                  {featured.quality || "HD"}
                </span>
                <span className="text-gray-300">
                  {featured.time || "Đang cập nhật"}
                </span>
              </div>
              <p className="text-gray-300 mb-6 line-clamp-4">
                {featured.description}
              </p>
              <div className="flex space-x-4">
                <Link
                  to={`/phim/${featured.slug}`}
                  className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full font-medium flex items-center"
                >
                  <i className="fas fa-play mr-2"></i> Xem phim
                </Link>
                <Link
                  to={`/phim/${featured.slug}`}
                  className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-full font-medium flex items-center"
                >
                  <i className="fas fa-info-circle mr-2"></i> Chi tiết
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <h1 className="text-2xl font-bold mb-4">Phim mới cập nhật</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <Link
            to={`/phim/${movie.slug}`}
            key={movie._id}
            className="hover:scale-105 transition-transform"
          >
            <img
              src={`https://img.ophim.live/uploads/movies/${movie.thumb_url}`}
              alt={movie.name}
              className="w-full rounded shadow"
            />
            <h2 className="mt-2 text-sm font-semibold truncate">
              {movie.name}
            </h2>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        <button
          onClick={() => page > 1 && setPage(page - 1)}
          className="px-3 py-1 rounded bg-black text-white hover:bg-gray-800"
        >
          &laquo;
        </button>
        {getPageRange().map((num) => (
          <button
            key={num}
            onClick={() => handlePageClick(num)}
            className={`px-3 py-1 rounded ${
              num === page
                ? "bg-yellow-500 text-white"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => page < totalPages && setPage(page + 1)}
          className="px-3 py-1 rounded bg-black text-white hover:bg-gray-800"
        >
          &raquo;
        </button>
      </div>
    </div>
  );
}

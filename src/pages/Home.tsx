import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Movie {
  _id: string;
  name: string;
  slug: string;
  origin_name: string;
  thumb_url: string;
  poster_url: string;
  year: number;
}

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          "https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1"
        );
        setMovies(res.data.items);
      } catch (err) {
        console.error("Failed to fetch movies:", err);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Phim mới cập nhật</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <Link
            key={movie._id}
            to={`/phim/${movie.slug}`}
            className="hover:opacity-90 transition-all"
          >
            <img
              src={`https://img.ophim.live/uploads/movies/${movie.thumb_url}`}
              alt={movie.name}
              className="rounded-lg shadow-md w-full aspect-[2/3] object-cover"
            />
            <h2 className="mt-2 text-sm font-semibold">{movie.name}</h2>
            <p className="text-xs text-gray-500">
              {movie.origin_name} ({movie.year})
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

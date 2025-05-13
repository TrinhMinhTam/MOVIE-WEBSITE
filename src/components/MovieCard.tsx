import { Link } from "react-router-dom";

type Props = {
  movie: {
    name: string;
    slug: string;
    poster_url: string;
  };
};

export default function MovieCard({ movie }: Props) {
  return (
    <Link
      to={`/phim/${movie.slug}`}
      className="block bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition"
    >
      <img
        src={`https://img.ophim.live/uploads/movies/${movie.poster_url}`}
        alt={movie.name}
        className="w-full h-72 object-cover"
      />
      <div className="p-2 text-center font-semibold text-white truncate">
        {movie.name}
      </div>
    </Link>
  );
}

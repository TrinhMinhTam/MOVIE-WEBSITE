import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchMovie } from "../services/APIophim";
import MovieCard from "../components/MovieCard";

export default function SearchResult() {
  const { keyword } = useParams();
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    if (keyword) {
      searchMovie(keyword).then((res) => {
        setResults(res.items);
      });
    }
  }, [keyword]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Kết quả tìm kiếm: "{keyword}"</h2>
      {results.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {results.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      ) : (
        <p>Không tìm thấy phim nào.</p>
      )}
    </div>
  );
}

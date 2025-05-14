import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../services/ophim";

export default function MovieDetail() {
  const { slug } = useParams();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    if (slug) {
      getMovieDetail(slug).then((res) => {
        console.log("detail", res);
        setMovie(res);
      });
    }
  }, [slug]);

  if (!movie) return <div>Đang tải...</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{movie.name}</h2>
      <div className="aspect-video w-full">
        <iframe
          src={`https://ophim1.com/phim/${movie.slug}`}
          allowFullScreen
          className="w-full h-full"
          title={`Watch ${movie.name}`}
        ></iframe>
      </div>
    </div>
  );
}

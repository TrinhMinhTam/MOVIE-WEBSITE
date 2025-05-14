import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetail } from "../services/APIophim";

export default function MovieDetail() {
  const { slug } = useParams();
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      setLoading(true);
      getMovieDetail(slug, (data) => {
        console.log("Chi tiết phim:", data);
        setMovie(data);
        setLoading(false);
      });
    }
  }, [slug]);

  if (loading)
    return <div className="p-6 text-white">Đang tải chi tiết phim...</div>;

  if (!movie)
    return <div className="p-6 text-red-500">Không tìm thấy phim</div>;

  return (
    <div className="p-4 max-w-6xl mx-auto text-white">
      {/* Phần chính */}
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        {/* Ảnh poster */}
        <div className="w-full md:w-1/3">
          <img
            src={movie.poster_url}
            alt={movie.name}
            className="rounded-lg shadow-lg object-cover w-full"
          />
        </div>

        {/* Nội dung */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-2">{movie.name}</h2>
          <p className="text-gray-400 italic mb-2">
            {movie.origin_name} &bull; {movie.year}
          </p>

          {/* Thể loại */}
          <div className="flex flex-wrap gap-2 my-3">
            {movie.category?.map((cat: any, idx: number) => (
              <span key={idx} className="bg-gray-700 text-sm px-3 py-1 rounded">
                {cat.name}
              </span>
            ))}
          </div>

          {/* Thông tin */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300 mb-4">
            <p>
              <strong>Thời lượng:</strong> {movie.time || "Đang cập nhật"}
            </p>
            <p>
              <strong>Quốc gia:</strong>{" "}
              {movie.country?.map((c: any) => c.name).join(", ")}
            </p>
            <p>
              <strong>Đạo diễn:</strong> {movie.director?.join(", ")}
            </p>
            <p>
              <strong>Diễn viên:</strong> {movie.actor?.join(", ")}
            </p>
          </div>

          {/* Nút xem phim */}
          <div className="mt-6">
            <Link
              to={`/xem-phim/${movie.slug}/${
                movie.episodes?.[0]?.server_data?.[0]?.slug || ""
              }`}
              className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-medium"
            >
              <i className="fas fa-play mr-2"></i> Xem phim
            </Link>
          </div>
        </div>
      </div>

      {/* Mô tả phim */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">Nội dung phim</h3>
        <p className="text-gray-300 whitespace-pre-line">{movie.content}</p>
      </div>

      {/* Danh sách tập phim */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4">Danh sách tập phim</h3>
        {movie.episodes?.map((server: any, idx: number) => (
          <div key={idx} className="mb-4">
            <h4 className="text-lg font-semibold mb-2">{server.server_name}</h4>
            <div className="flex flex-wrap gap-2">
              {server.server_data.map((ep: any, i: number) => (
                <Link
                  key={i}
                  to={`/xem-phim/${movie.slug}/${ep.slug}`}
                  className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm"
                >
                  {ep.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

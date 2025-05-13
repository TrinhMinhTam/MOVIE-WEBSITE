import axios from "axios";

const api = axios.create({
  baseURL: "https://ophim1.com",
});

export async function getHomeMovies() {
  const res = await api.get("danh-sach/phim-moi-cap-nhat?page=1");
  return res.data.data.movie;
}

export async function getMovieDetail(slug: string) {
  const res = await api.get(`/v1/api/phim/${slug}`);
  return res.data.data;
}

export async function searchMovie(keyword: string) {
  const res = await api.get(
    `/v1/api/tim-kiem?keyword=${encodeURIComponent(keyword)}`
  );
  return res.data.data;
}

import axios from "axios";

const API_URL = "https://ophim1.com";

const api = axios.create({
  baseURL: API_URL,
});

// Hàm lấy danh sách phim
export const getMovies = (page: string, callback: (data: any) => void) => {
  const apiUrl = `/danh-sach/phim-moi-cap-nhat?page=${page}`;
  api
    .get(apiUrl)
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      console.error("Error fetching movies:", error);
    });
};

// Hàm lấy chi tiết phim
export const getMovieDetail = (slug: string, callback: (data: any) => void) => {
  api
    .get(`/phim/${slug}`)
    .then((res) => {
      console.log("API", res.data.movie);
      callback(res.data.movie);
    })
    .catch((error) => {
      console.error("Error fetching movie detail:", error);
    });
};

// Hàm tìm kiếm phim
export const searchMovie = (keyword: string, callback: (data: any) => void) => {
  api
    .get(`/v1/api/tim-kiem?keyword=${encodeURIComponent(keyword)}`)
    .then((res) => {
      callback(res.data.data);
    })
    .catch((error) => {
      console.error("Error searching movie:", error);
    });
};

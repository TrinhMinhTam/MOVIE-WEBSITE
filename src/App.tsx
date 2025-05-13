import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import SearchResult from "./pages/SearchResult";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-900 text-white">
        <Header />
        <main className="flex-1 p-4 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/phim/:slug" element={<MovieDetail />} />
            <Route path="/tim-kiem/:keyword" element={<SearchResult />} />
            <Route path="*" element={<div>404 - Không tìm thấy trang</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

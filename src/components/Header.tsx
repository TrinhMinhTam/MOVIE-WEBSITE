import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons/faFilm";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/tim-kiem/${encodeURIComponent(keyword.trim())}`);
      setKeyword("");
    }
  };

  return (
    <header className="bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faFilm} className="text-red-500 text-2xl" />
          <a href="/" className="text-xl font-bold text-white">
            Rạp<span className="text-red-500">Phim</span>
          </a>
        </div>

        {/* Menu */}
        <div className="hidden md:flex space-x-6 text-white">
          <a href="/" className="hover:text-red-400">
            Trang chủ
          </a>
          <a href="#" className="hover:text-red-400">
            Phim lẻ
          </a>
          <a href="#" className="hover:text-red-400">
            Phim bộ
          </a>
          <a href="#" className="hover:text-red-400">
            Thể loại
          </a>
        </div>

        {/* Search + Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button */}
          <button title="search" className="md:hidden text-xl text-white">
            <FontAwesomeIcon icon={faBars} />
          </button>

          {/* Search */}
          <form onSubmit={handleSearch} className="relative">
            <div className="relative hidden md:block">
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Tìm phim..."
                className="bg-gray-700 px-4 py-1 rounded-full text-sm w-64 focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-gray-400"
              />
              <button
                title="tìm kiếm"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}

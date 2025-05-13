import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + Description */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <FontAwesomeIcon icon={faFilm} className="text-red-500 mr-2" />
              PhimMới
            </h3>
            <p className="text-gray-400">
              Trang web xem phim online miễn phí, chất lượng cao với giao diện
              thân thiện.
            </p>
          </div>

          {/* Liên kết */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên kết</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400">
                  Phim lẻ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400">
                  Phim bộ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400">
                  Thể loại
                </a>
              </li>
            </ul>
          </div>

          {/* Thông tin */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Thông tin</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400">
                  Điều khoản
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400">
                  Chính sách
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Theo dõi */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Theo dõi</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-400 text-xl">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 text-xl">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 text-xl">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 text-xl">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>

        {/* Bản quyền */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
          <p>© 2023 PhimMới. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

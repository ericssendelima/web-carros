import logoImg from "../../assets/logo.svg";

import { Link } from "react-router-dom";

import { FiUser, FiLogIn } from "react-icons/fi";

export function Header() {
  const signed = false;
  const loadingAuth = false;

  return (
    <div className="w-full flex items-center justify-center h-16 bg-background-gray border-b-2 border-b-gray-900 drop-shadow mb-4">
      <header className="w-full max-w-7xl flex items-center justify-between px-4 mx-auto">
        <Link to="/">
          <img src={logoImg} alt="Logo do site" />
        </Link>

        {signed && !loadingAuth && (
          <Link to="/dashboard">
            <FiUser size={38} color="#ffffff" className="border-2 rounded-full p-2 border-gray-400" />
          </Link>
        )}

        {!signed && !loadingAuth && (
          <Link to="/login">
            <FiLogIn size={38} color="#ffffff" className="border-2 rounded-full p-2 border-gray-400" />
          </Link>
        )}
      </header>
    </div>
  );
}

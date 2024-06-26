import { useState } from "react";

const Nav = ({ setSearchQuery }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    setSearchQuery(searchValue);
  };
  return (
    <nav className="w-full bg-red-200 py-3">
      <div className="container flex items-center justify-between">
        <p>NAV BAR</p>
        <div>
          <input
            type="text"
            className="py-1 px-3 focus:outline-red-300 rounded-s-lg"
            placeholder="Search your movie"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-red-400 px-3 py-1 text-white  rounded-e-lg"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

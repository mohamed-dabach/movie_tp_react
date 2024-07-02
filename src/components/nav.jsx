import { useState } from "react";
import { setSearchQuery, setPage } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

const Nav = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectVal, setSelectVal] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setSearchQuery(searchValue));
    dispatch(setPage(1));
  };
  return (
    <nav className="w-full bg-red-200 py-3">
      <div className="container flex items-center justify-between">
        <p>NAV BAR</p>
        <div>
          <select
            value={selectVal}
            onChange={(e) => setSelectVal(e.target.value)}
            className="py-1 px-3 focus:outline-red-300 rounded-s-lg"
          >
            <option value="false">Include Adults</option>
            <option value="true">Exclude Adults</option>
          </select>
          <input
            type="text"
            className="py-1 px-3 focus:outline-red-300 "
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

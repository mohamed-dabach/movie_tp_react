import Movie from "./components/movie";
// import data from "../data.json";
import Nav from "./components/nav";
import { useEffect, useState } from "react";
import Pagination from "./components/pagination";
import { useDispatch } from "react-redux";
import {
  setLoading,
  setError,
  setSearchQuery,
  setData,
  setPage,
  selectLoading,
  selectSearchQuery,
  selectPage,
  selectData,
  selectError,
  selectTotalPages,
  setTotalPages,
} from "./redux/movieSlice";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import View from "./pages/view";
const BASE_URL =
  "https://api.themoviedb.org/3/search/tv?api_key=fef55a6754f2f6d00a0038388915039c&include_adult=false";

export default function App() {
  const dispatch = useDispatch();

  const searchQuery = useSelector(selectSearchQuery);
  const page = useSelector(selectPage);

  const loading = useSelector(selectLoading);
  const data = useSelector(selectData);
  const error = useSelector(selectError);
  const total_pages = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(setError(null));

    handleFetch(searchQuery, page)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((dat) => {
        dispatch(setData(dat.results));
        dispatch(setPage(dat.page));
        dispatch(setLoading(false));
        dispatch(setError(null));
        dispatch(setTotalPages(dat.total_pages));
      })
      .catch((error) => dispatch(setError(error)))
      .finally(() => dispatch(setLoading(false)));
  }, [searchQuery, page, dispatch]);

  const handleFetch = async (query = "", page = 1) => {
    return await fetch(`${BASE_URL}&query=${query}&page=${page}`);
  };

  return (
    <>
      <BrowserRouter>
        <Nav setSearchQuery={setSearchQuery} setPage={setPage} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<View />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "./layout";
import {
  setLoading,
  setError,
  setData,
  setPage,
  selectSearchQuery,
  selectPage,
  setTotalPages,
  selectAdults,
} from "./redux/movieSlice";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import View from "./pages/view";
const BASE_URL =
  "https://api.themoviedb.org/3/search/tv?api_key=fef55a6754f2f6d00a0038388915039c&";

export default function App() {
  const dispatch = useDispatch();

  const searchQuery = useSelector(selectSearchQuery);
  const isAdutls = useSelector(selectAdults);
  const page = useSelector(selectPage);

  useEffect(() => {
    const handleFetch = async (query = "", page = 1) => {
      return await fetch(
        `${BASE_URL}include_adult=${isAdutls}&query=${query}&page=${page}`
      );
    };
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
  }, [searchQuery, page, dispatch, isAdutls]);
  const basename = process.env.PUBLIC_URL;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route exact index element={<Home />} />
            <Route exact path="/movie/:id" element={<View />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

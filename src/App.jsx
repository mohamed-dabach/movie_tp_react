import Movie from "./components/movie";
// import data from "../data.json";
import Nav from "./components/nav";
import { useEffect, useState } from "react";
import Pagination from "./components/pagination";

const BASE_URL =
  "https://api.themoviedb.org/3/search/tv?api_key=fef55a6754f2f6d00a0038388915039c&include_adult=false";

export default function App() {
  const [data, setData] = useState([]);

  const [searchQuery, setSearchQuery] = useState("s");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(3);

  useEffect(() => {
    setError(null);
    setLoading(true);

    handleFetch(searchQuery, page)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [searchQuery, page]);

  const handleFetch = async (query = "", page = 1) => {
    return await fetch(`${BASE_URL}&query=${query}&page=${page}`);
  };
  console.log(data);
  return (
    <>
      <Nav setSearchQuery={setSearchQuery} />

      <section className="py-4 ">
        <div className="container grid gap-2 grid-cols-1 lg:grid-cols-[repeat(4,1fr)] md:grid-cols-[repeat(2,1fr)] items-center justify-center">
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : error ? (
            <div className="text-center">{error.message}</div>
          ) : data?.results?.length === 0 ? (
            <div className="text-center">No data found</div>
          ) : (
            data?.results?.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))
          )}
        </div>

        <div className="container flex items-center justify-center mt-[40px_!important] pt-5">
          <Pagination
            total_pages={data?.total_pages}
            setPage={setPage}
            currentPage={page}
          />
        </div>
      </section>
    </>
  );
}

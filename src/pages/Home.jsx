import React from "react";
import Movie from "../components/movie";
import Pagination from "../components/pagination";
import { useSelector } from "react-redux";
import {
  selectData,
  selectError,
  selectLoading,
  selectTotalPages,
} from "../redux/movieSlice";

export default function Home() {
  const loading = useSelector(selectLoading);
  const data = useSelector(selectData);
  const error = useSelector(selectError);
  const total_pages = useSelector(selectTotalPages);
  return (
    <div>
      <section className="py-4 ">
        <div className="container grid gap-2 grid-cols-1 lg:grid-cols-[repeat(4,1fr)] md:grid-cols-[repeat(2,1fr)] items-center justify-center">
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : error ? (
            <div className="text-center">{error.message}</div>
          ) : data?.length === 0 ? (
            <div className="text-center">No data found</div>
          ) : (
            data?.map((movie) => <Movie key={movie.id} movie={movie} />)
          )}
        </div>

        <div className="container flex items-center justify-center mt-[40px_!important] pt-5">
          <Pagination total_pages={total_pages} />
        </div>
      </section>
    </div>
  );
}

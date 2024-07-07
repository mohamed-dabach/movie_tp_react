import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectData } from "../redux/movieSlice";
import { useState } from "react";
import defaultImage from "../imgs/404_image.png";

export default function View() {
  const { id } = useParams();
  const data = useSelector(selectData);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const target = data.find((item) => item.id == id);
    setMovie(target);
  }, [data, id]);
  return (
    <div className="w-full">
      <div className="container  ">
        <div className=" grid sm:grid-cols-2 gap-2 py-6 ">
          <div className="overflow-hidden">
            <img
              src={
                movie?.backdrop_path
                  ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
                  : defaultImage
              }
              alt={movie?.name}
              className="max-w-full rounded-lg border-2"
            />
          </div>

          <ul>
            <li className="">
              Name: <span className="font-bold">{movie?.name}</span>
            </li>
            <li className="">
              Date: <span className="font-bold">{movie?.first_air_date}</span>
            </li>
            <li className="">
              Original language:{" "}
              <span className="font-bold">{movie?.original_language}</span>
            </li>
          </ul>
        </div>
        <h2 className="font-bold text-lg mt-5 mb-2">Movie overview</h2>
        <span>{movie?.overview}</span>
        <br />
        <br />

        <Link to={"/"} className="bg-red-400 px-3 py-1 text-white  rounded-lg">
          Back
        </Link>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

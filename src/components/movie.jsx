import { Link } from "react-router-dom";
import defaultImage from "../imgs/404_image.png";
export default function Movie({ movie }) {
  return (
    <>
      <Link
        to={`movie/${movie.id}`}
        className="max-w-[500px] rounded overflow-hidden shadow-lg m-auto relative text-white "
      >
        <img
          className="w-full"
          src={
            movie?.backdrop_path
              ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
              : defaultImage
          }
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-2 absolute flex flex-col justify-between top-0 left-0  w-full h-full ">
          <p className="  text-shadow">
            <span className="hidden font-bold text-md mb-2 rounded-lg px-2">
              {movie.name}
            </span>
          </p>
          <div className="locals flex gap-2 flex-wrap ">
            {movie?.origin_country?.map((o_country) => {
              return <Local key={o_country} local={o_country} />;
            })}
          </div>
        </div>
      </Link>
    </>
  );
}

const Local = ({ local }) => {
  return (
    <>
      <p className="bg-red-400 text-white text-sm w-fit px-2 py-0 rounded-lg">
        {local}
      </p>
    </>
  );
};

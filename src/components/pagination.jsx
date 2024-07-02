import { selectPage, selectTotalPages, setPage } from "../redux/movieSlice";
import { useSelector, useDispatch } from "react-redux";
export default function Pagination({ setPage }) {
  const currentPage = useSelector(selectPage);
  const total_pages = useSelector(selectTotalPages);
  const dispatch = useDispatch();

  console.log(total_pages);
  const handlePage = (page) => {
    dispatch(setPage(page));
  };
  return (
    <>
      <div className="flex">
        <button
          className="bg-red-400 px-3 py-1 text-white rounded-s-lg"
          onClick={() =>
            dispatch(setPage((prev) => (prev - 1 <= 0 ? prev : prev - 1)))
          }
        >
          prev
        </button>
        <div className="overflow-x-scroll flex max-w-[500px]">
          {Array.from({ length: total_pages }).map((_, index) => (
            <PaginationNum
              key={index}
              page={index + 1}
              isCurrentPage={index + 1 == currentPage}
            />
          ))}
        </div>
        <button
          className="bg-red-400 px-3 py-1 text-white rounded-e-lg"
          onClick={() =>
            dispatch(setPage((prev) => (prev >= total_pages ? prev : prev + 1)))
          }
        >
          next
        </button>
      </div>
    </>
  );
}

const PaginationNum = ({ page, isCurrentPage }) => {
  const dispatch = useDispatch();
  return (
    <button
      className={`disabled:bg-red-300 bg-red-400 px-3 py-1 text-white border-x-[1px] hover:bg-red-500 transition-all rounded-none`}
      onClick={() => dispatch(setPage(page))}
      disabled={isCurrentPage}
    >
      {page}
    </button>
  );
};

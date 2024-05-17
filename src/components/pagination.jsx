export default function Pagination({ total_pages, setPage, currentPage }) {
  console.log(total_pages);
  const handlePage = (page) => {
    setPage(page);
  };
  return (
    <>
      <div className="flex">
        <button
          className="bg-red-400 px-3 py-1 text-white rounded-s-lg"
          onClick={() => setPage((prev) => (prev - 1 <= 0 ? prev : prev - 1))}
        >
          prev
        </button>
        <div className="overflow-x-scroll flex max-w-[500px]">
          {Array.from({ length: total_pages }).map((_, index) => (
            <PaginationNum
              key={index}
              page={index + 1}
              isCurrentPage={index + 1 == currentPage}
              setPage={setPage}
            />
          ))}
        </div>
        <button
          className="bg-red-400 px-3 py-1 text-white rounded-e-lg"
          onClick={() =>
            setPage((prev) => (prev >= total_pages ? prev : prev + 1))
          }
        >
          next
        </button>
      </div>
    </>
  );
}

const PaginationNum = ({ page, setPage, isCurrentPage }) => {
  return (
    <button
      className={`disabled:bg-red-300 bg-red-400 px-3 py-1 text-white border-x-[1px] hover:bg-red-500 transition-all rounded-none`}
      onClick={() => setPage(page)}
      disabled={isCurrentPage}
    >
      {page}
    </button>
  );
};

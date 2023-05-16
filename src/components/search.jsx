import { useState, useEffect } from "react";

const SearchInput = ({ data, res, empty }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value.length > 3) {
      //   const filteredResults = data.filter((item) => item.title.includes(value));
      return res(value);
    }
    if (value.trim() === "") {
      return empty(true);
    } else {
      return empty(false);
    }
  }, [value]);

  return (
    <form className="flex items-center w-[70%]">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-700"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="search"
          value={value}
          onChange={(e) => handleChange(e)}
          className="bg-[rgba(37,40,44,50%)] text-[#eceded] text-[14px] text-center rounded focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-3 placeholder:font-thin"
          placeholder="Search your question"
          required
        />
      </div>
    </form>
  );
};

export default SearchInput;

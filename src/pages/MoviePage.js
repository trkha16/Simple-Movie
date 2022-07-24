import { useEffect, useState } from "react";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import { fetcher } from "../config";
import useDebounce from "../hooks/useDebounce";

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
function MoviePage() {
    const [filter, setFilter] = useState("");
    const [url, setUrl] = useState(
        "https://api.themoviedb.org/3/movie/popular?api_key=e88c22fe317cce5ec41675bd57d6efee"
    );

    const { data, error } = useSWR(url, fetcher);
    const loading = !data && !error;

    const filterDebounce = useDebounce(filter, 500);
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    useEffect(() => {
        if (filterDebounce)
            setUrl(
                `https://api.themoviedb.org/3/search/movie?api_key=e88c22fe317cce5ec41675bd57d6efee&query=${filterDebounce}`
            );
        else {
            setUrl(
                "https://api.themoviedb.org/3/movie/popular?api_key=e88c22fe317cce5ec41675bd57d6efee"
            );
        }
    }, [filterDebounce]);

    const movies = data?.results || [];

    return (
        <div className="py-10 page-container">
            <div className="flex mb-10">
                <div className="flex-1">
                    <input
                        type="text"
                        className="w-full p-4 bg-slate-800 outline-none text-white"
                        placeholder="Search..."
                        onChange={handleFilterChange}
                    />
                </div>
                <button className="p-4 bg-primary text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
            {loading && (
                <div className="w-10 h-10 rounded-full border-4 border-primary border-t-4 border-t-transparent animate-spin mx-auto"></div>
            )}
            <div className="grid grid-cols-4 gap-10">
                {movies.length > 0 &&
                    movies.map((item) => (
                        <MovieCard key={item.id} item={item}></MovieCard>
                    ))}
            </div>
            <div className="flex items-center justify-center mt-10 gap-x-5">
                <span className="cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </span>
                <span className="cursor-pointer inline-block py-2 px-4 rounded leading-none bg-white text-slate-900 ">
                    1
                </span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span className="cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </span>
            </div>
        </div>
    );
}

export default MoviePage;

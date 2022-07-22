import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./MovieCard";
import "swiper/scss";
import { fetcher } from "../../config";
import useSWR from "swr";
import { useEffect, useState } from "react";

// https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1
function MovieList({ type = "now_playing" }) {
    const [movies, setMovies] = useState([]);

    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/${type}?api_key=e88c22fe317cce5ec41675bd57d6efee`,
        fetcher
    );

    useEffect(() => {
        if (data && data.results) setMovies(data.results);
    }, [data]);

    return (
        <div className="movie-list">
            <Swiper
                grabCursor={"true"}
                spaceBetween={40}
                slidesPerView={"auto"}
            >
                {movies.length > 0 &&
                    movies.map((item) => (
                        <SwiperSlide key={item.id}>
                            <MovieCard item={item}></MovieCard>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}

export default MovieList;

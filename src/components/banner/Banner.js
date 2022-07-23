import useSWR from "swr";
import { fetcher } from "../../config";
import { SwiperSlide, Swiper } from "swiper/react";
import { useNavigate } from "react-router-dom";

function Banner() {
    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=e88c22fe317cce5ec41675bd57d6efee`,
        fetcher
    );

    const movies = data?.results || [];

    return (
        <section className="banner h-[500px] page-container mb-20 overflow-hidden">
            <Swiper grabCursor={"true"} slidesPerView={"auto"}>
                {movies.length > 0 &&
                    movies.map((item) => (
                        <SwiperSlide key={item.id}>
                            <BannerItem item={item}></BannerItem>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    );
}

export default Banner;

const BannerItem = ({ item }) => {
    const { title, poster_path, id } = item;

    const navigate = useNavigate();

    return (
        <div className="w-full h-full rounded-lg relative">
            <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
            <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt=""
                className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute left-5 bottom-5 w-full text-white">
                <h2 className="font-bold text-3xl mb-5">{title}</h2>
                <div className="flex items-center gap-x-3 mb-8">
                    <span className="py-2 px-4 border border-white rounded-md">
                        Adventure
                    </span>
                    <span className="py-2 px-4 border border-white rounded-md">
                        Adventure
                    </span>
                    <span className="py-2 px-4 border border-white rounded-md">
                        Adventure
                    </span>
                </div>
                <button
                    onClick={() => navigate(`/movies/${id}`)}
                    className="py-3 px-6 rounded-lg bg-primary text-white font-mediums capitalize"
                >
                    Watch now
                </button>
            </div>
        </div>
    );
};

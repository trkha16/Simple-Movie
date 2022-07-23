import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Banner from "./components/banner/Banner";
import MovieList from "./components/movie/MovieList";
import "swiper/scss";

function App() {
    return (
        <Fragment>
            <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-10">
                <span className="text-primary">Home</span>
                <span>Movies</span>
            </header>
            <Banner></Banner>
            <section className="movies-layout page-container pb-20">
                <h2 className="text-white capitalize mb-10 text-3xl font-bold">
                    now playing
                </h2>
                <MovieList></MovieList>
            </section>
            <section className="movies-layout page-container pb-20">
                <h2 className="text-white capitalize mb-10 text-3xl font-bold">
                    top rated
                </h2>
                <MovieList type="top_rated"></MovieList>
            </section>
            <section className="movies-layout page-container pb-20">
                <h2 className="text-white capitalize mb-10 text-3xl font-bold">
                    trending
                </h2>
                <MovieList type="popular"></MovieList>
            </section>
        </Fragment>
    );
}

export default App;

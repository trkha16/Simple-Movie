import { Fragment, useEffect } from "react";
import MovieList from "../components/movie/MovieList";

function HomePage() {
    useEffect(() => {
        document.title = "Simple Movies";
    }, []);

    return (
        <Fragment>
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

export default HomePage;

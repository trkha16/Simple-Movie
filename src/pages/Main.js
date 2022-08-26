import { Fragment, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";

function Main() {
    useEffect(() => {
        document.title = "Simple Movies";
    }, []);

    return (
        <Fragment>
            <Header></Header>
            <Outlet></Outlet>
        </Fragment>
    );
}

export default Main;

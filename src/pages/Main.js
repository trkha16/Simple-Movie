import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";

function Main() {
    return (
        <Fragment>
            <Header></Header>
            <Outlet></Outlet>
        </Fragment>
    );
}

export default Main;

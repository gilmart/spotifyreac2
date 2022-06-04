import { Link, NavLink } from "react-router-dom";
import { Fragment } from "react";

export function Menu(){

    return(
        <Fragment>
         <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">Incubus</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <NavLink className="nav-item nav-link active" to="/"> Home</NavLink>
                <NavLink className="nav-item" to="canciones"> Canciones</NavLink>
                </ul>
            </div>
            </div>
      </nav>
        </Fragment>
    )
}
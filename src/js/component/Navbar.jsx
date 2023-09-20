import React from "react"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-body-tertiary">
    <div className="container container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#">Navbar</a>
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
            </li>
        </ul>
    </div>
</nav>
    )
}

export default Navbar;
import React from "react";
import "../index.css"
export function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <i className="material-icons">local_cafe</i>

                <div className="collapse navbar-collapse" id="navbarText">
                    <span className="navbar-text">
                        Güzel demlenmiş bir kahveyle güne başlamak ister misiniz?
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Header;
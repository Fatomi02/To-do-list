import React from "react";
import "./header.css";
import User from "../../services/user-details"
function Header() {
    localStorage.setItem("item", JSON.stringify(User))
    const retrieve = JSON.parse(localStorage.getItem("item"))
    return (
        <>
        <header>
        <div className="header">
                <div className="logo-container">
                    <h1>{retrieve.firstName}</h1>
                    <span>Powered by Horlaite</span>
                </div>
                <div className="profile-container">
                    <div>
                    <span className="name">{retrieve.firstName} {retrieve.lastName}</span> <br />
                    <span className="title2">{retrieve.title}</span>
                    </div>
                    <div className="img">
                        {retrieve.firstName.slice(0, 1)}{retrieve.lastName.slice(0, 1)}
                    </div>
                </div>
            </div>
            </header>
        </>
    )
}

export default Header;

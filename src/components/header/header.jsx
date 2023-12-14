import React from "react";
import "./header.css";
function Header() {
    const retrieve = JSON.parse(localStorage.getItem("item"))
    return (
        <>
            <div className="header">
                <div className="logo-container">
                    <h1>Olaitan</h1>
                    <span>Powered by Horlaite</span>
                </div>
                <div className="profile-container">
                    <div>
                    <span className="name">{`${retrieve.firstName} ${retrieve.lastName}`}</span> <br />
                    <span className="title">{retrieve.title}</span>
                    </div>
                    <div className="img">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;

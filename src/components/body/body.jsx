import React from "react";
import "./body.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Body() {
  const lists = JSON.parse(localStorage.getItem("item"));

  let itemList = lists.list.map((list) => {
    return <>
    <div className="item">
    <div className="second"></div>
    <div className="item-title">{list.title}</div>
    <div className="item-date">{list.date}</div>
    <div className="item-icon">
    <FontAwesomeIcon icon="fa-solid fa-trash" size="sm" style={{color: "#d33139", marginRight: "5px"}} />
    <FontAwesomeIcon
        icon="fa-solid fa-ellipsis-vertical"
        size="sm"
        style={{ color: "#111213" }}
      />
    </div>
  </div>
  </>
  })


  return (
    <>
      <div className="body">
        <div className="container">
          <header>
            <div className="header">
              <div>
                <h2>ToDo List</h2>
              </div>
              <div className="icon">
                <FontAwesomeIcon
                  icon="fa-solid fa-plus"
                  size="lg"
                  style={{ color: "#111213", marginRight: "30px" }}
                />
                <FontAwesomeIcon
                  icon="fa-solid fa-ellipsis-vertical"
                  size="lg"
                  style={{ color: "#111213" }}
                />
              </div>
            </div>
          </header>

          <div className="list">
            <div className="photo"></div>
            <div className="list-item">
                <h4 className="title">{lists.list[0].title}</h4>
                <span className="date">{lists.list[0].date} - {lists.list[0].time}</span>
                <p className="desc">{lists.list[0].description}</p>
                <button className="edit">Edit</button>
            </div>
          </div>
          {itemList}
          <div className="item">
              <button className="plus">
              <FontAwesomeIcon icon="fa-solid fa-plus" size="xl" style={{color: "#ffffff",}} />
              </button>
          </div>
        </div>
        <div className="container">
          <header>
            <div className="header">
              <div>
                <h2>In Progress</h2>
              </div>
              <div className="icon">
                <FontAwesomeIcon
                  icon="fa-solid fa-ellipsis-vertical"
                  size="lg"
                  style={{ color: "#111213" }}
                />
              </div>
            </div>
          </header>
        </div>
        <div className="container">
          <header>
            <div className="header">
              <div>
                <h2>Done</h2>
              </div>
              <div className="icon">
                <FontAwesomeIcon
                  icon="fa-solid fa-ellipsis-vertical"
                  size="lg"
                  style={{ color: "#111213" }}
                />
              </div>
            </div>
          </header>
        </div>
        <div className="last-container"></div>
      </div>
    </>
  );
}

export default Body;

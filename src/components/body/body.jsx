/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./body.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditableText from "../edit/edit";
import ItemList from "../itemlist/itemlist";
import { lists } from "../../services/user-details";

function Body() {
  const [newTask, setNewTask] = useState(lists);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [items, setItems] = useState(lists.list);


  const handleTitle = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleDate = (e) => {
    setTaskDate(e.target.value);
  };

  const clearInput = () => {
    setTaskDesc("");
    setTaskDate("");
    setTaskTitle("");
  };

  const handleDesc = (e) => {
    setTaskDesc(e.target.value);
  };


  const addNewItem = () => {
    document.querySelector(".addingItemDiv").style.display = "block";
  };


  const addItem = () => {
    if (taskTitle.length > 2 && taskDate.length > 2 && taskDesc.length > 2) {
      const generatedId = Math.floor(Math.random() * 1000 + 4);
      const newArr = {
        id: generatedId,
        title: taskTitle,
        date: taskDate,
        description: taskDesc,
        isEditing: false,
      };
      setNewTask(newArr);
      items.push(newArr);
      clearInput();
      document.querySelector(".addingItemDiv").style.display = "none";
    }
  };

  const close = () => {
    document.querySelector(".addingItemDiv").style.display = "none";
  }

  useEffect(() => {
    setItems(lists.list);
  }, []);

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
                  onClick={addNewItem}
                  icon="fa-solid fa-plus"
                  size="lg"
                  style={{ color: "#111213", marginRight: "30px" }}
                />
                <FontAwesomeIcon
                  icon="fa-solid fa-ellipsis-vertical"
                  size="lg"
                  style={{ color: "#111213" }}
                />
                <div className="addingItemDiv">
                  <div className="inputDiv">
                    <label htmlFor="title">Title: </label>
                    <input
                      id="title"
                      type="text"
                      value={taskTitle}
                      onChange={handleTitle}
                      style={{
                        height: "30px",
                        width: "100%",
                        borderRadius: "10px",
                        padding: "10px",
                      }}
                      required
                    />
                    <span>{taskTitle.length <= 1 ? "Title must be more than 2 Character" : ""}</span>

                  </div>
                  <div className="inputDiv">
                    <label htmlFor="date">Date: </label>
                    <input
                      type="text"
                      id="date"
                      value={taskDate}
                      onChange={handleDate}
                      style={{
                        height: "30px",
                        width: "100%",
                        borderRadius: "10px",
                        padding: "10px",
                      }}
                      placeholder="20 Feb 2024"
                      required
                    />
                    <span>{taskDate.length <= 1 ? "Date must be more than 2 Character" : ""}</span>
                  </div>
                  <div className="inputDiv">
                    <label htmlFor="desc">Desscription: </label>
                    <input
                      type="text"
                      value={taskDesc}
                      onChange={handleDesc}
                      id="desc"
                      style={{
                        height: "30px",
                        width: "100%",
                        borderRadius: "10px",
                        padding: "10px",
                      }}
                      required
                    />
                    <span>{taskDesc.length <= 1 ? "Descripton must be more than 2 Character" : ""}</span>
                  </div>

                  <button className="add" onClick={addItem}>
                    Add
                  </button>
                  <button className="add" onClick={close}>
                    Close
                  </button>
                </div>
             
              </div>
            </div>
          </header>
          <EditableText />
          <ItemList />
          <div className="item">
            <button onClick={addNewItem} className="plus">
              <FontAwesomeIcon
                icon="fa-solid fa-plus"
                size="xl"
                style={{ color: "#ffffff" }}
              />
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
      </div>
    </>
  );

}

export default Body;

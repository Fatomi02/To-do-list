/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import "./body.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditableText from "../edit/edit";
import { lists } from "../../services/user-details";
import { useForm } from "react-hook-form";

function Body() {
  const [newTask, setNewTask] = useState(lists);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [items, setItems] = useState(lists.list);
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
    if (taskTitle.length >= 1 && taskDate.length >= 1 && taskDesc.length >= 1) {
      const generatedId = Math.floor(Math.random() * 1000 + 5);
      const newArr = {
        id: generatedId,
        title: taskTitle,
        date: taskDate,
        description: taskDesc,
        isEditing: false,
        status: "todo",
      };
      setNewTask(newArr);
      items.push(newArr);
      clearInput();
      document.querySelector(".addingItemDiv").style.display = "none";
    }
  };

  const close = () => {
    document.querySelector(".addingItemDiv").style.display = "none";
    clearInput();
  };

  useEffect(() => {
    setItems(lists.list);
  }, [items]);

  const deleteList = (id) => {
    const newItems = todos.filter((item) => item.id !== id);
    setTodos(newItems);
  };

  const handleDoubleClick = (itemId) => {
    const copyItems = [...todos];
    copyItems[itemId].isEditing = true;
    setTodos(copyItems);
  };

  const handleBlur = (itemId) => {
    const copyItems = [...todos];
    copyItems[itemId].isEditing = false;
    setTodos(copyItems);
  };

  const handleChange = (e, itemId) => {
    const copyItems = [...todos];
    copyItems[itemId].title = e.target.value;
    setTodos(copyItems);
  };

  const handleChangeDate = (e, itemId) => {
    const copyItems = [...todos];
    copyItems[itemId].date = e.target.value;
    setTodos(copyItems);
  };

  const handleChangeDesc = (e, itemId) => {
    const copyItems = [...todos];
    copyItems[itemId].description = e.target.value;
    setTodos(copyItems);
  };

  useEffect(() => {
    if (todos.isEditing) {
      inputRef.current.focus();
    }
  }, [todos.isEditing]);

  useEffect(() => {
    setTodos(lists.list);
  }, []);

  const show = (id) => {
    const copyItems = [...todos];
    copyItems[id].btn = true;
    setTodos(copyItems);
  };

  const cancel = (id) => {
    const copyItems = [...todos];
    copyItems[id].btn = false;
    setTodos(copyItems);
  };

  const moveToDo = (id) => {
    const moveItem = [...todos];
    moveItem[id].status = "todo";
    setTodos(moveItem);
    console.log(id);
    cancel(id);
  };

  const moveToProgess = (id) => {
    const moveItem = [...todos];
    moveItem[id].status = "In progress";
    setTodos(moveItem);
    console.log(id);
    cancel(id);
  };

  const moveToDone = (id) => {
    const moveItem = [...todos];
    moveItem[id].status = "Done";
    setTodos(moveItem);
    console.log(id);
    cancel(id);
  };

  let itemList = todos.map((item, index) => {
    return (
      <>
        {item.status === "todo" ? (
          <>
            <div
              className="item"
              onDoubleClick={() => {
                handleDoubleClick(index);
              }}
            >
              <div className="second"></div>
              {item.isEditing ? (
                <div className="listed-item">
                  <input
                    style={{
                      height: "30px",
                      width: "100%",
                      borderRadius: "10px",
                      padding: "10px",
                    }}
                    type="text"
                    value={item.title}
                    onChange={(e) => handleChange(e, index)}
                  />{" "}
                  <br />
                  <input
                    style={{
                      height: "30px",
                      width: "100%",
                      borderRadius: "10px",
                      padding: "10px",
                      margin: "10px auto",
                    }}
                    type="date"
                    value={item.date}
                    onChange={(e) => handleChangeDate(e, index)}
                    required
                  />{" "}
                  <br />
                  <input
                    style={{
                      height: "30px",
                      width: "100%",
                      borderRadius: "10px",
                      padding: "10px",
                    }}
                    type="text"
                    value={item.description}
                    onChange={(e) => handleChangeDesc(e, index)}
                    required
                  />
                  <button
                    style={{
                      width: "60px",
                      padding: "3px",
                      borderRadius: "10px",
                      marginTop: "10px",
                      backgroundColor: "rgb(177, 233, 233)",
                    }}
                    onClick={() => handleBlur(index)}
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <div className="item-title">{item.title}</div>
                  <div className="item-date">{item.date}</div>
                  <div className="item-icon">
                    <FontAwesomeIcon
                      className="FontAwesomeIcon"
                      icon="fa-solid fa-trash"
                      size="sm"
                      style={{ color: "#d33139", marginRight: "5px" }}
                      onClick={() => {
                        deleteList(item.id);
                      }}
                    />
                    <FontAwesomeIcon
                      className="FontAwesomeIcon"
                      icon="fa-solid fa-ellipsis-vertical"
                      size="sm"
                      style={{ color: "#111213" }}
                      onClick={() => {
                        show(index);
                      }}
                    />
                    {item.btn ? (
                      <>
                        <div className="movebtn">
                          <button
                            className="btn"
                            onClick={() => moveToProgess(index)}
                          >
                            In Progress
                          </button>
                          <button
                            className="btn"
                            onClick={() => {
                              moveToDone(index);
                            }}
                          >
                            Done
                          </button>
                          <button
                            className="btn"
                            onClick={() => {
                              cancel(index);
                            }}
                          >
                            Cancel
                          </button>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
      </>
    );
  });

  let inProgressList = todos.map((item, index) => {
    return (
      <>
        {item.status === "In progress" ? (
          <>
            <div
              className="item"
              onDoubleClick={() => {
                handleDoubleClick(index);
              }}
            >
              <div className="second"></div>
              {item.isEditing ? (
                <div className="listed-item">
                  <input
                    style={{
                      height: "30px",
                      width: "100%",
                      borderRadius: "10px",
                      padding: "10px",
                    }}
                    type="text"
                    value={item.title}
                    onChange={(e) => handleChange(e, index)}
                  />{" "}
                  <br />
                  <input
                    style={{
                      height: "30px",
                      width: "100%",
                      borderRadius: "10px",
                      padding: "10px",
                      margin: "10px auto",
                    }}
                    type="date"
                    value={item.date}
                    onChange={(e) => handleChangeDate(e, index)}
                    required
                  />{" "}
                  <br />
                  <input
                    style={{
                      height: "30px",
                      width: "100%",
                      borderRadius: "10px",
                      padding: "10px",
                    }}
                    type="text"
                    value={item.description}
                    onChange={(e) => handleChangeDesc(e, index)}
                    required
                  />
                  <button
                    style={{
                      width: "60px",
                      padding: "3px",
                      borderRadius: "10px",
                      marginTop: "10px",
                      backgroundColor: "rgb(177, 233, 233)",
                    }}
                    onClick={() => handleBlur(index)}
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <div className="item-title">{item.title}</div>
                  <div className="item-date">{item.date}</div>
                  <div className="item-icon">
                    <FontAwesomeIcon
                      className="FontAwesomeIcon"
                      icon="fa-solid fa-trash"
                      size="sm"
                      style={{ color: "#d33139", marginRight: "5px" }}
                      onClick={() => {
                        deleteList(item.id);
                      }}
                    />
                    <FontAwesomeIcon
                      className="FontAwesomeIcon"
                      icon="fa-solid fa-ellipsis-vertical"
                      size="sm"
                      style={{ color: "#111213" }}
                      onClick={() => {
                        show(index);
                      }}
                    />
                    {item.btn ? (
                      <>
                        <div className="movebtn">
                          <button
                            className="btn"
                            onClick={() => moveToDo(index)}
                          >
                            To Do
                          </button>
                          <button
                            className="btn"
                            onClick={() => {
                              moveToDone(index);
                            }}
                          >
                            Done
                          </button>
                          <button
                            className="btn"
                            onClick={() => {
                              cancel(index);
                            }}
                          >
                            Cancel
                          </button>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
      </>
    );
  });

  let doneList = todos.map((item, index) => {
    return (
      <>
        {item.status === "Done" ? (
          <>
            <div
              className="item"
              onDoubleClick={() => {
                handleDoubleClick(index);
              }}
            >
              <div className="second"></div>
              {item.isEditing ? (
                <div className="listed-item">
                  <input
                    style={{
                      height: "30px",
                      width: "100%",
                      borderRadius: "10px",
                      padding: "10px",
                    }}
                    type="text"
                    value={item.title}
                    onChange={(e) => handleChange(e, index)}
                  />{" "}
                  <br />
                  <input
                    style={{
                      height: "30px",
                      width: "100%",
                      borderRadius: "10px",
                      padding: "10px",
                      margin: "10px auto",
                    }}
                    type="date"
                    value={item.date}
                    onChange={(e) => handleChangeDate(e, index)}
                    required
                  />{" "}
                  <br />
                  <input
                    style={{
                      height: "30px",
                      width: "100%",
                      borderRadius: "10px",
                      padding: "10px",
                    }}
                    type="text"
                    value={item.description}
                    onChange={(e) => handleChangeDesc(e, index)}
                    required
                  />
                  <button
                    style={{
                      width: "60px",
                      padding: "3px",
                      borderRadius: "10px",
                      marginTop: "10px",
                      backgroundColor: "rgb(177, 233, 233)",
                    }}
                    onClick={() => handleBlur(index)}
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <div className="item-title">{item.title}</div>
                  <div className="item-date">{item.date}</div>
                  <div className="item-icon">
                    <FontAwesomeIcon
                      className="FontAwesomeIcon"
                      icon="fa-solid fa-trash"
                      size="sm"
                      style={{ color: "#d33139", marginRight: "5px" }}
                      onClick={() => {
                        deleteList(item.id);
                      }}
                    />
                    <FontAwesomeIcon
                      className="FontAwesomeIcon"
                      icon="fa-solid fa-ellipsis-vertical"
                      size="sm"
                      style={{ color: "#111213" }}
                      onClick={() => {
                        show(index);
                      }}
                    />
                    {item.btn ? (
                      <>
                        <div className="movebtn">
                          <button
                            className="btn"
                            onClick={() => moveToProgess(index)}
                          >
                            In Progress
                          </button>
                          <button
                            className="btn"
                            onClick={() => {
                              moveToDo(index);
                            }}
                          >
                            To Do
                          </button>
                          <button
                            className="btn"
                            onClick={() => {
                              cancel(index);
                            }}
                          >
                            Cancel
                          </button>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
      </>
    );
  });

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
                  <form onSubmit={handleSubmit((d) => console.log(d))}>
                    <div className="inputDiv">
                      <label htmlFor="title">Title: </label>
                      <input
                        id="title"
                        {...register("title", {
                          required: true,
                          validate: {
                            minLength: (v) => v.length >= 5,
                          },
                        })}
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
                      {errors.title?.type === "minLength" && (
                        <small>
                          The username should have at least 5 characters
                        </small>
                      )}
                    </div>
                    <div className="inputDiv">
                      <label htmlFor="date">Date: </label>
                      <input
                        type="date"
                        id="date"
                        {...register("date")}
                        value={taskDate}
                        onChange={handleDate}
                        style={{
                          height: "30px",
                          width: "100%",
                          borderRadius: "10px",
                          padding: "10px",
                        }}
                        required
                      />
                    </div>
                    <div className="inputDiv">
                      <label htmlFor="desc">Desscription: </label>
                      <input
                        id="desc"
                        {...register("desc", {
                          required: true,
                          validate: {
                            minLength: (v) => v.length >= 5,
                          },
                        })}
                        type="text"
                        value={taskDesc}
                        onChange={handleDesc}
                        style={{
                          height: "30px",
                          width: "100%",
                          borderRadius: "10px",
                          padding: "10px",
                        }}
                        required
                      />
                      {errors.desc?.type === "minLength" && (
                        <small>
                          The Description should have at least 10 characters
                        </small>
                      )}
                    </div>
                    {taskTitle.length >= 5 && taskDesc.length > 9 ? (
                      <>
                        <button className="add" onClick={addItem}>
                          Create
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="add">Invalid</button>
                      </>
                    )}
                    <button className="add" onClick={close}>
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </header>
          <EditableText />
          {itemList}
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
          {inProgressList}
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
          {doneList}
        </div>

        <div className="last"></div>
      </div>
    </>
  );
}

export default Body;

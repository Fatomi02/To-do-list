/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { lists } from "../../services/user-details";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ItemList() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

//   console.log(todos);

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

  let itemList = todos.map((item, index) => {
    return (
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
                onChange={(e)=> handleChange(e, index)}
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
                onChange={(e)=> handleChangeDate(e, index)}
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
                onChange={(e)=> handleChangeDesc(e, index)}
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
                />
              </div>
            </>
          )}
        </div>
      </>
    );
  });

  return <>{itemList}</>;
}

export default ItemList;

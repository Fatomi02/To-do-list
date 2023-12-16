import React, { useState, useRef, useEffect } from "react";
import lists from "../../services/user-details";

function EditableText() {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(lists.list[0]);

  const inputRef = useRef(null);
  const handleChange = (e) => {
    setText((prev) => {
        return {...prev, title: e.target.value}
    })
  };

  const handleChangeDate = (e) => {
    setText((date) => {
        return {...date, date: e.target.value}
    })
  }

  const handleChangeDesc = (e) => {
    setText((desc) => {
        return {...desc, description: e.target.value}
    })
  }

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };


  return (
    <>
      <div className="list" onDoubleClick={handleDoubleClick}>
        <div className="photo"></div>
        {isEditing ? (
            <div className="list-item">
                <input style={{height: "30px", width: "100%", borderRadius: "10px", padding: "10px"}}
                    type="text"
                    value={text.title}
                    onChange={handleChange}
                    ref={inputRef}
                    required
                /> <br />
                <input style={{height: "30px", width: "100%", borderRadius: "10px", padding: "10px", margin: "10px auto"}}
                type="text"
                value={text.date}
                ref={inputRef}
                onChange={handleChangeDate}
                required
                /> <br />
                <input style={{height: "30px", width: "100%", borderRadius: "10px", padding: "10px"}}
                type="text"
                value={text.description}
                onChange={handleChangeDesc} 
                ref={inputRef}
                required
                />
                <button style={{width: "60px", padding: "3px", borderRadius: "10px", marginTop: "10px", backgroundColor: "rgb(177, 233, 233)"}}
                onClick={handleBlur}
                >Done</button>
            </div>
        ) : (
          <div className="list-item">
            <h4 className="title">{text.title}</h4>
            <span className="date">
              {text.date}
            </span>
            <p className="desc">{text.description}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default EditableText;

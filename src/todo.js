import React from "react";

const Todo = (props) => {
  const [style, setStyle] = React.useState("red");
  const [check, setCheck] = React.useState(props.check);
  const [Delete, setDelete] = React.useState(false);
  const [file, setFile] = React.useState();

  React.useEffect(() => {
    if (check) {
      setStyle("green");
    }
  }, []);

  const deleteItem = () => {
    fetch("https://cns-automate-backend.herokuapp.com/todo-check", {
      method: "DELETE",
      cors: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: props.content,
        completed: props.check,
        date: props.date,
      }),
    });
    setStyle("yellow");
    setDelete(true);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    fetch("https://cjw-todo-site.herokuapp.com/upload", {
      method: "POST",
      cors: "cors",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    fetch("https://cns-automate-backend.herokuapp.com/todo-check", {
      method: "PUT",
      cors: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: props.content,
        completed: true,
        date: props.date,
      }),
    });
  };

  const changeColor = () => {
    if (check) {
      setStyle("red");
      setCheck(false);
    } else {
      setStyle("green");
      setCheck(true);
    }
  };
  return (
    <div className="todo">
      <form onSubmit={submitForm}>
        <div className="todo-content">
          <p>{props.content}</p>
          <i onClick={deleteItem} class="far fa-trash-alt"></i>
        </div>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <div className="check" style={{ backgroundColor: style }}>
          <button
            style={{ backgroundColor: style }}
            onClick={changeColor}
            type="submit"
          >
            {check ? (
              <p>Done</p>
            ) : Delete ? (
              <p>Marked For Deletion</p>
            ) : (
              <p>Not Done</p>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
export default Todo;

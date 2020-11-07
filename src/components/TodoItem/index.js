import "./index.css";
export const Todo = ({ todo }) => {
    return (
      <div className="todo"
      >
        {todo.text}
        <div>
          <span className="form-button">Complete</span>
          <span className="form-button">x</span>
        </div>
      </div>
    );
  }
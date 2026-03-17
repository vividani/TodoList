import "./TodoItem.css";

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id); //아이디가 사라지면 개체 자체가 사라짐(React)
  }

  return (
    <div className="TodoItem">
      <input 
      onChange={onChangeCheckbox} 
      readOnly checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

export default TodoItem;
const List = ({ tas, onDelete, togg }) => {
  return (
    <div className="list">
      <ul>
        {tas.map((temp) => (
          <li key={temp.id} className={`hmm ${temp.isDone ? "green" : ""}`}>
            <input
              type="checkbox"
              name=""
              value={temp.isDone}
              onClick={() => togg(temp.id)}
            />
            <>{temp.value}</>
            <button
              className="btn"
              value={temp.id}
              onClick={() => onDelete(temp.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;

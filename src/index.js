import "./styles.css";

const onClickAdd = () => {
  const addTodo = document.getElementById("add-todo").value;
  document.getElementById("add-todo").value = "";
  console.log(addTodo);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

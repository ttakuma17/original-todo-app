import "./styles.css";

const onClickAdd = () => {
  const addTodo = document.getElementById("add-todo").value;
  document.getElementById("add-todo").value = "";
  // console.log(addTodo); // 入力値が表示されることを確認
  createNewTodolist(addTodo);
};

// delete関数定義ゾーン //
const deleteFromTodoList = (listclass, target) => {
  document.getElementById(listclass).removeChild(target);
};

// createTodolist関数 Todoタスクの新規追加の場合のコード
const createNewTodolist = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ作成
  const li = document.createElement("li");
  li.innerText = text;

  const workingButton = document.createElement("button");
  workingButton.innerText = "Working";
  workingButton.addEventListener("click", () => {
    // alert("working"); //稼働確認
    createWorkingList(workingButton.parentNode);
  }); //引数の指定の仕方が悪かっただけだった

  const pendingButton = document.createElement("button");
  pendingButton.innerText = "Pending";
  pendingButton.addEventListener("click", () => {
    // alert("pending"); //稼働確認
    // createPendingList(pendingButton);
    createPendingList(pendingButton.parentNode, "incomplete-list");
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    // alert("delete"); //稼働確認
    deleteFromTodoList("incomplete-list", deleteButton.parentNode);
  });

  //todoリストに必要な要素を追加
  div.appendChild(li);
  div.appendChild(workingButton);
  div.appendChild(pendingButton);
  div.appendChild(deleteButton);
  document.getElementById("incomplete-list").appendChild(div);
};

// // createWorkingList関数
const createWorkingList = (target, listclass) => {
  if (listclass) {
    // incomplete-listだったら実行しないの条件式にかえる
    const deleteTarget = target;
    // listclassの値によって削除するかどうかを決定する必要がある。
    document.getElementById(listclass).removeChild(deleteTarget);
  }
  //第二引数は、削除するリストクラスを指定するものになる
  // 下の２文はPending Listのボタンを押された時に必要になるがcreateTodoから呼び出されたときは不要
  // const deleteTarget = target;
  // listclassの値によって削除するかどうかを決定する必要がある。
  // document.getElementById(listclass).removeChild(deleteTarget);
  const addTarget = target;
  // console.log(addTarget); //稼働確認
  const text = addTarget.firstElementChild.innerText;
  // console.log(text);
  addTarget.textContent = null;
  const li = document.createElement("li");
  li.innerText = text;
  // console.log(li); //稼働確認

  const pendingButton = document.createElement("button");
  pendingButton.innerText = "Pending";
  pendingButton.addEventListener("click", () => {
    //alert("pending"); //稼働確認
    createPendingList(pendingButton.parentNode, "working-list");
  });

  const completeButton = document.createElement("button");
  completeButton.innerText = "Done";
  completeButton.addEventListener("click", () => {
    // alert("done");
    createCompleteTodoList(pendingButton.parentNode, "working-list");
  });

  addTarget.appendChild(li);
  addTarget.appendChild(pendingButton);
  addTarget.appendChild(completeButton);
  document.getElementById("working-list").appendChild(addTarget);
};

// // createPendingList関数
const createPendingList = (target, listclass) => {
  const deleteTarget = target; //ID取得の引数を指定することが必要
  document.getElementById(listclass).removeChild(deleteTarget);
  //入力値を受け取りたい
  const addTarget = target;
  const text = addTarget.firstElementChild.innerText;
  // console.log(text); // 入力値が渡ったことを確認
  addTarget.textContent = null;
  // console.log(div);
  const li = document.createElement("li");
  li.innerText = text;

  //ボタンの作成
  const backTodoButton = document.createElement("button");
  backTodoButton.innerText = "Back to Todo";
  backTodoButton.addEventListener("click", () => {
    // alert("test");
    createBackTodolist(backTodoButton.parentNode, "pending-list");
    // return ;//textを返すように指定する?
    //createTodolist(text);
  });

  const workingButton = document.createElement("button");
  workingButton.innerText = "Working";
  workingButton.addEventListener("click", () => {
    // alert("working"); //稼働確認
    createWorkingList(workingButton.parentNode, "pending-list");
  });
  //divタグの子要素に各要素を設定
  addTarget.appendChild(li);
  addTarget.appendChild(backTodoButton);
  addTarget.appendChild(workingButton);
  // console.log(addTarget); working　on todo の画面と同じ項目の追加に成功
  document.getElementById("pending-list").appendChild(addTarget);
};

const createCompleteTodoList = (target, listclass) => {
  // alert("back to do");
  const deleteTarget = target; //ID取得の引数を指定することが必要
  document.getElementById(listclass).removeChild(deleteTarget);
  //入力値を受け取りたい
  const addTarget = target;
  const text = addTarget.firstElementChild.innerText;
  // console.log(text); // 入力値が渡ったことを確認
  addTarget.textContent = null;
  // console.log(div);
  const li = document.createElement("li");
  li.innerText = text;

  const backTodoButton = document.createElement("button");
  backTodoButton.innerText = "Back to Todo";
  backTodoButton.addEventListener("click", () => {
    // alert("test");
    createBackTodolist(backTodoButton.parentNode, "complete-list");
    // return ;//textを返すように指定する?
    //createTodolist(text);
  });
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    // alert("delete"); //稼働確認
    deleteFromTodoList("complete-list", deleteButton.parentNode);
  });
  addTarget.appendChild(li);
  // addTarget.appendChild(workingButton);
  // addTarget.appendChild(pendingButton);
  addTarget.appendChild(backTodoButton);
  addTarget.appendChild(deleteButton);
  // console.log(addTarget); working　on todo の画面と同じ項目の追加に成功
  document.getElementById("complete-list").appendChild(addTarget);
};

const createBackTodolist = (target, listclass) => {
  const deleteTarget = target; //ID取得の引数を指定することが必要
  document.getElementById(listclass).removeChild(deleteTarget);
  //入力値を受け取りたい
  const addTarget = target;
  const text = addTarget.firstElementChild.innerText;
  // console.log(text); // 入力値が渡ったことを確認
  addTarget.textContent = null;
  // console.log(div);
  const li = document.createElement("li");
  li.innerText = text;
  const workingButton = document.createElement("button");
  workingButton.innerText = "Working";
  workingButton.addEventListener("click", () => {
    // alert("working"); //稼働確認
    createWorkingList(workingButton.parentNode);
  }); //引数の指定の仕方が悪かっただけだった

  const pendingButton = document.createElement("button");
  pendingButton.innerText = "Pending";
  pendingButton.addEventListener("click", () => {
    // alert("pending"); //稼働確認
    // createPendingList(pendingButton);
    createPendingList(pendingButton.parentNode, "incomplete-list");
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    // alert("delete"); //稼働確認
    deleteFromTodoList("incomplete-list", deleteButton.parentNode);
  });

  //todoリストに必要な要素を追加
  addTarget.appendChild(li);
  addTarget.appendChild(workingButton);
  addTarget.appendChild(pendingButton);
  addTarget.appendChild(deleteButton);
  document.getElementById("incomplete-list").appendChild(addTarget);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

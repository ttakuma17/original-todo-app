import "./styles.css";

const onClickAdd = () => {
  const addTodo = document.getElementById("add-todo").value;
  document.getElementById("add-todo").value = "";
  //console.log(addTodo);// 入力値が表示されることを確認

  // todo listの中身を書きたい
  // divを作成する→子要素の作成
  const div = document.createElement("div");
  div.className = "list-row";
  // liタグの作成
  const li = document.createElement("li");
  li.innerText = addTodo;
  //console.log(li);//　入力値がliタグのテキストとして格納されていることを確認

  //TodoListのリストに表示したい
  div.appendChild(li);
  document.getElementById("incomplete-list").appendChild(div);
  //入力値が表示されたことを確認　→　それぞれのボタンを作成したい
  const workingButton = document.createElement("button");
  workingButton.innerText = "Working";

  //処理内容を考える
  //Todo Listから入力値とボタンをを削除する
  //addtodoの入力値を受け取って、workingtodoエリアで入力値とpendingbutton、Doneボタンを表示する

  workingButton.addEventListener("click", () => {
    // workingボタンを押した時に削除される動作を実装したい
    const deleteTarget = workingButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
    // 処理確認→期待起動通り削除が完了
    // working on Todoに表示させる
    const addTarget = workingButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    // console.log(text);// 入力値が渡ったことを確認
    // 同じ構成で表示できるようになればOKだが中身は微妙に違うので再指定する
    addTarget.textContent = null;
    // console.log(div);
    const li = document.createElement("li");
    li.innerText = text;
    // console.log(li);
    //ボタンの作成
    const pendingButton = document.createElement("button");
    pendingButton.innerText = "Pending";
    // pendingボタンをクリックされたときの挙動を記載する
    pendingButton.addEventListener("click", () => {
      // alert("pending");
      const deleteTarget = pendingButton.parentNode;
      document.getElementById("working-list").removeChild(deleteTarget);
      const text = pendingButton.parentNode.firstElementChild.innerText;
      const div = document.createElement("div");
      div.className = "list-row";
      //liタグ作成
      const li = document.createElement("li");
      li.innerText = text;
      // console.log(li);
      // pending todo listに配置スべきボタンを作成して、要素を格納する
      // 配置するボタンの定義
      const backTodoButton = document.createElement("button");
      backTodoButton.innerText = "Back to Todo";
      //backTodoButtonがクリックされたときの動きを記載する
      backTodoButton.addEventListener("click", () => {
        // alert("back todo");//alertの動作確認
        const deleteTarget = backTodoButton.parentNode;
        document.getElementById("pending-list").removeChild(deleteTarget);
        const text = backTodoButton.parentNode.firstElementChild.innerText;

        const div = document.createElement("div");
        div.className = "list-row";
        //liタグ作成
        const li = document.createElement("li");
        li.innerText = text;
        // console.log(text); //ここまでは稼働
        //todoリストに必要な要素を追加
        div.appendChild(li);
        div.appendChild(workingButton);
        div.appendChild(pendingButton);
        div.appendChild(deleteButton);
        // working-listへdiv要素をappend
        // console.log(div); //div要素の追加までは完了
        document.getElementById("incomplete-list").appendChild(div);
      });

      const backtoWorkButton = document.createElement("button");
      backtoWorkButton.innerText = "Back to Work";
      backtoWorkButton.addEventListener("click", () => {
        //alert("back to work"); //稼働確認
        const deleteTarget = backtoWorkButton.parentNode;
        document.getElementById("pending-list").removeChild(deleteTarget);
        const text = backtoWorkButton.parentNode.firstElementChild.innerText;

        const div = document.createElement("div");
        div.className = "list-row";
        //liタグ作成
        const li = document.createElement("li");
        li.innerText = text;
        // console.log(text); //ここまでは稼働
        //todoリストに必要な要素を追加
        div.appendChild(li);
        div.appendChild(pendingButton);
        div.appendChild(completeButton);
        // console.log(div);//挙動確認
        // working-listへdiv要素をappend
        // console.log(div); //div要素の追加までは完了
        document.getElementById("working-list").appendChild(div);
      });

      div.appendChild(li);
      div.appendChild(backTodoButton);
      div.appendChild(backtoWorkButton);
      // pending-listに追加
      document.getElementById("pending-list").appendChild(div);
    });

    // pendingの処理記入完了後に関数作成に取り掛かる　ほぼ同じになりそう
    const completeButton = document.createElement("button");
    completeButton.innerText = "Done";
    completeButton.addEventListener("click", () => {
      // alert("Done");
      const deleteTarget = completeButton.parentNode;
      document.getElementById("working-list").removeChild(deleteTarget);
      const text = pendingButton.parentNode.firstElementChild.innerText;
      const div = document.createElement("div");
      div.className = "list-row";
      //liタグ作成
      const li = document.createElement("li");
      li.innerText = text;
      // console.log(li);
      // pending todo listに配置スべきボタンを作成して、要素を格納する
      // 配置するボタンの定義
      const backTodoButton = document.createElement("button");
      backTodoButton.innerText = "Back to Todo";
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      //backTodoButtonがクリックされたときの動きを記載する

      backTodoButton.addEventListener("click", () => {
        // alert("back todo"); //alertの動作確認
        const deleteTarget = backTodoButton.parentNode;
        document.getElementById("complete-list").removeChild(deleteTarget);
        const text = backTodoButton.parentNode.firstElementChild.innerText;
        const div = document.createElement("div");
        div.className = "list-row";
        //liタグ作成
        const li = document.createElement("li");
        li.innerText = text;
        // console.log(text); //ここまでは稼働
        //todoリストに必要な要素を追加
        div.appendChild(li);
        div.appendChild(workingButton);
        div.appendChild(pendingButton);
        div.appendChild(deleteButton);
        // working-listへdiv要素をappend
        // console.log(div); //div要素の追加までは完了
        document.getElementById("incomplete-list").appendChild(div);
      });
      deleteButton.addEventListener("click", () => {
        const deleteTarget = deleteButton.parentNode;
        document.getElementById("complete-list").removeChild(deleteTarget);
      });
      div.appendChild(li);
      div.appendChild(backTodoButton);
      div.appendChild(deleteButton);
      // completed Todo Listに追加
      document.getElementById("complete-list").appendChild(div);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(pendingButton);
    addTarget.appendChild(completeButton);
    // console.log(addTarget); working　on todo の画面と同じ項目の追加に成功
    document.getElementById("working-list").appendChild(addTarget);
    // const completeButton = document.createElement("button");
    // completeButton.innerText = "Done";
  });

  const pendingButton = document.createElement("button");
  pendingButton.innerText = "Pending";
  pendingButton.addEventListener("click", () => {
    // workingリストからの削除を実施
    const deleteTarget = pendingButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
    //入力値を受け取りたい
    const addTarget = pendingButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    // console.log(text); // 入力値が渡ったことを確認
    addTarget.textContent = null;
    // console.log(div);
    const li = document.createElement("li");
    li.innerText = text;
    // console.log(li);
    //ボタンの作成
    const backTodoButton = document.createElement("button");
    backTodoButton.innerText = "Back to Todo";
    const backtoWorkButton = document.createElement("button");
    backtoWorkButton.innerText = "Back to Working";
    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backTodoButton);
    addTarget.appendChild(backtoWorkButton);
    // console.log(addTarget); working　on todo の画面と同じ項目の追加に成功
    document.getElementById("pending-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // const backTodoButton = document.createElement("button");
  // backTodoButton.innerText = "Back to Todo";
  // backTodoButton.addEventListener("click", () => {});

  // const backtoWorkButton = document.createElement("button");
  // backtoWorkButton.innerText = "Back to Work";
  // backtoWorkButton.addEventListener("click", () => {});

  div.appendChild(li);
  div.appendChild(workingButton);
  div.appendChild(pendingButton);
  div.appendChild(deleteButton);
  // console.log(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

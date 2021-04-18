import "./styles.css";
const onClickAdd = () => {
  //  テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //  div の生成
  const div = document.createElement("div");
  div.className = "list-row";
  //  p タグの生成
  const p = document.createElement("p");
  p.innerText = inputText;
  // button(完了)タグの生成
  const completeButtont = document.createElement("button");
  completeButtont.innerText = "完了";
  // button(削除)タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  // div タグの子要素に各要素を配置
  div.appendChild(p);
  div.appendChild(completeButtont);
  div.appendChild(deleteButton);
  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

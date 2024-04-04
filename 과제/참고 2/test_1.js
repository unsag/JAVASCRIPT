const postForm = document.getElementById("postForm");
const postContent = document.getElementById("postContent");
const postsContainer = document.getElementById("posts");

postForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const content = postContent.value.trim();
  if (content === "") {
    alert("내용을 입력하세요");
    return;
  }
  const postElement = document.createElement("div");
  postElement.classList.add("post");
  postElement.innerText = content;
  postsContainer.prepend(postElement);
  postContent.value = "";
});

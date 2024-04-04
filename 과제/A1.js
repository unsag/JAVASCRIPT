document.addEventListener("DOMContentLoaded", function () {
  const postForm = document.getElementById("postForm");
  const postContent = document.getElementById("postContent");
  const posts = document.getElementById("posts");

  postForm.addEventListener("submit", function (event) {
    event.preventDefault(); // 기본 동작(페이지 새로고침) 방지

    // 입력된 내용을 가져와서 저장
    const content = postContent.value.trim();
    if (content !== "") {
      // 구분하는 줄과 내용을 표시
      const post = document.createElement("div");
      post.classList.add("post");
      post.innerHTML = `<hr><p>${content}</p>`;
      posts.appendChild(post);

      posts.insertBefore(post, posts.firstChild);
      // 입력 내용 초기화
      postContent.value = "";
    }
  });
});

import Mock from "mockjs";

const comments = Array(10)
  .fill(0)
  .map((item, index) => ({
    id: index,
    name: `name${index}`,
    content: `content${index}`,
  }));

Mock.mock("/api/comment", "get", function () {
  return comments;
});

Mock.mock("/api/comment", "post", function () {
  const nextId = comments.length;
  const newComment = {
    id: nextId,
    name: `name${nextId}`,
    content: `content${nextId}`,
  };
  comments.unshift(newComment);
  return newComment;
});

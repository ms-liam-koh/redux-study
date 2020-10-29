export const getPost = (id) => {
  return fetch("https://jsonplaceholder.typicode.com/posts/" + id).then(
    async (res) => {
      return await res.json();
    }
  );
};

export const getUsers = (id) => {
  return fetch("https://jsonplaceholder.typicode.com/users").then(
    async (res) => {
      return await res.json();
    }
  );
};

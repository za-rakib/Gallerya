export const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const responseJson = response.json();
  return responseJson;
};

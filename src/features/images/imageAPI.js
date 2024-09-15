export const getImages = async payload => {
  console.log({payload});
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${payload.album}`,
  );
  const responseJson = response.json();
  return responseJson;
};

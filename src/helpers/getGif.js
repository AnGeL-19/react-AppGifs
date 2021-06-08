
export const getGifs = async (category) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?api_key=V6dZCV3z4zPOBUm7kJkLPh7IqYS3W2M2&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    
    return gifs;
  };
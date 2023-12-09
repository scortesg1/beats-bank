export function obtenerPortada({ name, author}) {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

  const authUrl = "https://accounts.spotify.com/api/token";
  const authHeaders = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + btoa(`${clientId}:${clientSecret}`),
  };
  const authData = "grant_type=client_credentials";

  return fetch(authUrl, {
    method: "POST",
    headers: authHeaders,
    body: authData,
  })
    .then((response) => response.json())
    .then((data) => {
      const accessToken = data.access_token;

      let formatedAuthor = author;

      if(author.includes('&')){
        formatedAuthor = author.split('&')[0];
      }else if(author.includes('Ft.')){
        formatedAuthor = author.split('Ft.')[0];
      }
      
      const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
        name
      )}%20artist:${encodeURIComponent(formatedAuthor)}&type=track&limit=1`;

      return fetch(searchUrl, {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.tracks && data.tracks.items.length > 0) {
            const imageUrl = data.tracks.items[0].album.images[0].url;
            const link = data.tracks.items[0].external_urls.spotify;
            return { imageUrl, link };
          } else {
            console.log(
              `No se encontraron resultados para la canción: ${name}`
            );
            return { imageUrl: null, link: null };
          }
        });
    })
    .catch((error) => {
      console.error("Error al obtener la portada:", error);
      return null;
    });
}

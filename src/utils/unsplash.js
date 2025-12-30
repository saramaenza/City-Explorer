export async function fetchCityUnsplashPhoto(cityName, unsplashKey) {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${cityName}+city&per_page=1&orientation=landscape`,
    {
      headers: {
        Authorization: `Client-ID ${unsplashKey}`,
        "Accept-Version": "v1",
      },
    }
  );
  const data = await res.json();
  const photo = data.results[0];

  // Trigger download richiesto da Unsplash
  if (photo?.links?.download_location) {
    fetch(photo.links.download_location, {
      headers: {
        Authorization: `Client-ID ${unsplashKey}`,
      },
    });
  }

  return photo;
}
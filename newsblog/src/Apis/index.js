export default function getDataNews(setState) {
  fetch(
    "https://newsapi.org/v2/top-headlines?country=mx&apiKey=9176b2bb76e74344abf17bd0456a2971"
  )
    .then((response) => response.json())
    .then((response) => {
      setState(response.articles);
    })
    .catch((err) => console.error(err));
}

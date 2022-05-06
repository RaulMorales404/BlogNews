import axios from "axios";

const apiCallNews = axios.create({
  baseURL: "https://newsapi.org/v2/top-headlines?country=mx&apiKey=c5d7705ca6954e04b62bea782addf74f",
});

export default apiCallNews;

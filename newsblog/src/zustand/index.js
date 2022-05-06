import axios from "axios";

const apiCallNews = axios.create({
  baseURL:
    "https://newsdata.io/api/1/news?apikey=pub_714847adbffdf65df03d00581319d916c686&q=noticias&country=mx,nz,no,pk,es&language=es",
});

export default apiCallNews;

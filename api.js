import axios from "axios";

const api = axios.create({
  baseURL: `https://nc-news-ysld.onrender.com/api`,
});
const getAllArticles = () =>
  api
    .get("/articles")
    .then(({ data }) => {
      //   console.log(response.data);
      return data.articles;
    })
    .catch((error) => {
      console.error(error);
    });

const getSingleArticle = ({ article_id }) => {
  return api
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    })
    .catch((error) => {
      console.log("Error fetching single article:", error);
    });
};

const getUser = ({ username }) => {
  return axios
    .get("https://nc-news-ysld.onrender.com/api/users", {
      params: { username },
    })
    .then(({ data }) => {
      return data.user;
    })
    .catch((error) => {
      console.error(error);
    });
};

const getFilteredArticles = ({ sort_by, order }) => {
  return axios
    .get("https://nc-news-ysld.onrender.com/api/articles", {
      params: { sort_by, order },
    })
    .then(({ data }) => {
      return data.articles;
    })
    .catch((error) => {
      console.error(error);
    });
};

const updateVoteCount = (article_id, inc_votes) => {
  return api.patch(`/articles/${article_id}`, { inc_votes });
};

const getArticlesByTopic = (topic) => {
  const params = topic && topic !== "all" ? { topic } : {};
  return api
    .get("/articles", { params })
    .then(({ data }) => {
      return data.articles;
    })
    .catch((error) => {
      console.error("Error fetching articles by topic:", error);
    });
};

const getTopics = () => {
  return api
    .get("/topics")
    .then(({ data }) => {
      return data.topics;
    })
    .catch((error) => {
      console.error("Error fetching topics:", error);
    });
};

export {
  getAllArticles,
  getSingleArticle,
  getUser,
  getFilteredArticles,
  updateVoteCount,
  getArticlesByTopic,
  getTopics,
};

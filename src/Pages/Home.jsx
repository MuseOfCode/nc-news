import { useState, useEffect } from "react";
import { getArticlesByTopic, getTopics, getAllArticles } from "../../api";

import ArticleCards from "../Components/ArticleCards";
import Topics from "../Components/Topics";

export default function Home({ articles, handleSingleArticle, setArticles }) {
  const [topics, setTopics] = useState([]);

  const [filteredTopic, setFilteredTopic] = useState("all");

  useEffect(() => {
    getArticlesByTopic(filteredTopic).then(setArticles);
  }, [filteredTopic]);

  useEffect(() => {
    getTopics().then(setTopics);
  }, []);

  return (
    <div className="hero-section">
      <div />
      {/* <Logo /> */}
      <Topics topics={topics} setFilteredTopic={setFilteredTopic} />
      <ArticleCards articles={articles} setSingleArticle={() => {}} />
      <ArticleCards
        articles={articles}
        setSingleArticle={handleSingleArticle}
      />
    </div>
  );
}

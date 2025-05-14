import "./Styles/App.css";
import Header from "./Components/Header";
import { useEffect, useState, createContext } from "react";
import { getAllArticles, getSingleArticle, getUser } from "../api";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TopNav from "./Components/TopNav";

function App() {
  const [articles, setArticles] = useState([]);
  const [user, setUser] = useState(null);
  const [singleArticle, setSingleArticle] = useState(null);

  useEffect(() => {
    const username = "grumpy19";
    getUser({ username }).then((userData) => {
      setUser(userData);
      console.log("fetched", userData);
    });
  }, []);

  useEffect(() => {
    getAllArticles().then((articles) => {
      setArticles(articles);
      console.log(articles);
    });
  }, []);

  return (
    <>
      <Header />
      <TopNav />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              articles={articles}
              setArticles={setArticles}
              setSingleArticle={setSingleArticle}
              singleArticle={singleArticle}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;

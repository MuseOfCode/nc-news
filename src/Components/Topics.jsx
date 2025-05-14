import { useState, useEffect } from "react";
import "../Styles/Topics.css"; // You'll style the scroll and buttons here

export default function Topics({ topics, setFilteredTopic }) {
  const [activeTopic, setActiveTopic] = useState("all");

  useEffect(() => {
    setFilteredTopic(activeTopic); // Triggers article filtering in parent
  }, [activeTopic]);

  return (
    <nav className="topics-bar">
      <button
        className={`topic-button ${activeTopic === "all" ? "active" : ""}`}
        onClick={() => setActiveTopic("all")}
      >
        All
      </button>
      {topics.map((topic) => (
        <button
          key={topic.slug}
          className={`topic-button ${
            activeTopic === topic.slug ? "active" : ""
          }`}
          onClick={() => setActiveTopic(topic.slug)}
        >
          {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
        </button>
      ))}
    </nav>
  );
}

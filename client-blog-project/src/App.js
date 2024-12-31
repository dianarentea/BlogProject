import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage, ArticlePage, MountainPage, NewsletterPage, ArticleDetailedPage } from "@views";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mountains" element={<MountainPage />} />
        <Route path="/articles" element={<ArticlePage />} />
        <Route path="/article/:id" element={<ArticleDetailedPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
      </Routes>
    </Router>
  );
}

export default App;

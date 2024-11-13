import { useEffect, useState } from 'react';
import NewsItems from './NewsItems';

const NewsArea = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated news data
    const sampleNews = {
      articles: [
        {
          title: "Technology Advances in 2024",
          description: "Major breakthroughs in AI and quantum computing mark a new era in technology.",
          urlToImage: "https://via.placeholder.com/300x200",
          url: "https://example.com/tech-news"
        },
        {
          title: "Healthcare Innovations",
          description: "New medical treatments show promising results in clinical trials.",
          urlToImage: "https://via.placeholder.com/300x200",
          url: "https://example.com/health-news"
        },
        {
          title: "Environmental Progress",
          description: "Global initiatives to combat climate change show positive outcomes.",
          urlToImage: "https://via.placeholder.com/300x200",
          url: "https://example.com/environment-news"
        },
        {
          title: "Space Exploration Update",
          description: "Latest discoveries from Mars rover missions reveal new insights.",
          urlToImage: "https://via.placeholder.com/300x200",
          url: "https://example.com/space-news"
        },
        {
          title: "Space Exploration Update",
          description: "Latest discoveries from Mars rover missions reveal new insights.",
          urlToImage: "https://via.placeholder.com/300x200",
          url: "https://example.com/space-news"
        },
        {
          title: "Healthcare Innovations",
          description: "New medical treatments show promising results in clinical trials.",
          urlToImage: "https://via.placeholder.com/300x200",
          url: "https://example.com/health-news"
        },
        {
          title: "Environmental Progress",
          description: "Global initiatives to combat climate change show positive outcomes.",
          urlToImage: "https://via.placeholder.com/300x200",
          url: "https://example.com/environment-news"
        }
      ]
    };

    // Simulate API call with setTimeout
    setTimeout(() => {
      setArticles(sampleNews.articles);
      setLoading(false);
    }, 500);

  }, [category]);

  return (
    <div className="text-center">
      <h2 className="text-center">
        <span className="badge bg-danger">Latest {category} News</span>
      </h2>
      
      {loading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="row">
          {articles.map((news, index) => (
            <div key={index} className="col-md-4 mb-3">
              <NewsItems
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsArea;

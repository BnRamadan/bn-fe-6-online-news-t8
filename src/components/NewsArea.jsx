import { useEffect, useState } from 'react';
import NewsItems from './NewsItems';

const NewsArea = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Use your backend API endpoint
    fetch(`http://localhost:5000/api/news?category=${category}`)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="text-center">
      <h2 className="text-center">
        <span className="badge bg-danger">Latest News</span>
      </h2>
      
      {loading ? (
        <div>Loading...</div>
      ) : (
        articles?.map((news, index) => (
          <NewsItems
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      )}
    </div>
  );
};

export default NewsArea;

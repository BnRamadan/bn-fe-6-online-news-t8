import { useEffect, useState } from 'react';
import NewsItems from './NewsItems';

const NewsArea = ({ category }) => {
  // Initialize with empty array to avoid undefined
  const [articles, setArticles] = useState([]);
  // Add loading state to handle the fetch period
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles || []); // Use empty array as fallback
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

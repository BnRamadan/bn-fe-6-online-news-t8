import { useEffect, useState } from 'react';
import NewsItems from './NewsItems';

const NewsArea = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sample data to use while setting up the API
  const sampleArticles = [
    {
      title: "Sample News 1",
      description: "This is a sample news article description",
      urlToImage: "https://via.placeholder.com/150",
      url: "#"
    },
    {
      title: "Sample News 2",
      description: "Another sample news article description",
      urlToImage: "https://via.placeholder.com/150",
      url: "#"
    }
  ];

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // For testing with sample data, uncomment this:
        setArticles(sampleArticles);
        setLoading(false);

        /* When your API is ready, uncomment this section and remove the sample data above
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`, {
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
            'Content-Type': 'application/json',
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setArticles(data.articles || []);
        */
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('Failed to load news. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  if (error) {
    return (
      <div className="text-center text-danger">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h2 className="text-center">
        <span className="badge bg-danger">Latest News - {category}</span>
      </h2>
      
      {loading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="row">
          {articles?.map((news, index) => (
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

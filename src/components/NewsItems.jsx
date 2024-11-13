import image from '../assets/news.jpg';

const NewsItems = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-2 mx-3"
      style={{ maxWidth: '345px' }}
    >
      <img
        src={src ? src : image}
        style={{ maxHeight: '200px', width: '100%' }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : 'This is breaking news'}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItems;

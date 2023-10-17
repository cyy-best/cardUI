import React from 'react';
import { formatDateString } from '../functions/dateUtils';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/card.css';


const Card = ({ post }) => {
  const cardTitle = post.title.rendered;
  const authorName = post._embedded.author[0].name;
  const formattedDate = formatDateString(post.date);

  return (
    <div className="card custom-card">
      <div className="card-header">
        <span>CLOUD AND SERVER</span>
      </div>
      <div className="card-body custom-card-body margin-lr">
        <img className="card-img-top" src={post.featured_media} alt={post.name} />
        <p className='card-title hightlight' > {cardTitle}</p>
      </div>
      <div className="card-post">
        <p className="card-text">
          By <span className="author highlight">{authorName}</span> on <span className="date">{formattedDate}</span>
        </p>
      </div>
      <div className='card-label margin-lr'>Article</div>


    </div>

  );
};

export default Card;


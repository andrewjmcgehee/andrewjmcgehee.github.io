import { useState } from 'react';
import './Post.css'

import leftArrow from '../assets/left-arrow.png';

const Post = ({postImage, postTitle, postDate, postSummary, postContent, isUpdateDate}) => {
  const [isOpen, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!isOpen);
  }

  return (
    (isOpen) ? 
    <div className="post-card-open">
      <div className="post-card-text-open">
        <div className="exit-container" onClick={toggleOpen}>
          <img className="exit-button" src={leftArrow}/>
          <p className="exit-text">Back</p>
        </div>
        <div className="post-card-title-open">
          {postTitle}
        </div>
        <div className="post-date">
          { isUpdateDate ? 
            `Updated: ${postDate.toLocaleDateString()}` : 
            postDate.toLocaleDateString() }
        </div>
        <div className="post-card-content">
          {postContent}
        </div>
      </div>
    </div>
    :
    <div className="post-card">
      <img src={postImage} className="post-card-photo" onClick={toggleOpen}/>     
      <div className="post-card-text">
        <div className="post-card-title" onClick={toggleOpen}>
          {postTitle}
        </div>
        <div className="post-date" onClick={toggleOpen}>
          { isUpdateDate ? 
            `Updated: ${postDate.toLocaleDateString()}` : 
            postDate.toLocaleDateString() }
        </div>
        <div className="post-card-summary" onClick={toggleOpen}>
          {postSummary}
        </div>
      </div>
    </div>
  );
}

export default Post;
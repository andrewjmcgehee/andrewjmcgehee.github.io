import Post from './Post';
import './NotHome.css';

// Contents
import BookList from './Posts/BookList';
// Images
import books from '../assets/books.png';

const NotHome = () => {
  return (
    <div className="not-home">
      <Post 
          className="not-home-post"
          postImage={books} postTitle="Book List" 
          postDate={new Date(2021, 0, 11)} // Jan 11 2021
          postSummary="I keep a running list of books that I hope to read one day, I've read in the past, I own digitally or physically, and that I hope to buy one day."
          postContent={<BookList/>} isUpdateDate={true}/>
    </div>
  );
};

export default NotHome;
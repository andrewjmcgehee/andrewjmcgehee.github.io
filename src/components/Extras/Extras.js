import Post from './Post';
import './Extras.css';

// Contents
import BookList from './Posts/BookList';
// Images
import books from '../assets/books.png';
import test2 from '../assets/test2.png';

const Extras = () => {
  return (
    <div className="extras">
      <Post 
          postImage={books} postTitle="Book List" 
          postDate="Updated: Jan 9, 2021"
          postSummary="I keep a running list of books that I hope to read one day, I've read in the past, I own digitally or physically, and that I hope to buy one day."
          postContent={<BookList/>} />
    </div>
  );
};

export default Extras;
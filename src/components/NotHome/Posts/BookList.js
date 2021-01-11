import Book from './Book';
import './BookList.css';

const BookList = () => {
  return (
    <div className="booklist-container">
      <p>I like to keep a running list of books that belong to the following classes:</p>
      <ul>
        <li><span>N</span>ot Read: I have not read it</li>
        <li><span>R</span>ead: I have read it</li>
        <li><span>D</span>igital: I own it digitally</li>
        <li><span>P</span>hysical: I own a physical copy</li>
        <li><span>B</span>uy: I want to buy it</li>
      </ul>
      <p>My girlfriend <a href="https://marisarodriguez.github.io/">Marisa</a> is sweet enough to 
         buy some of them for me from time to time. Marisa, if you're reading this, look for any 
         rows with a <strong>B</strong> or a <strong>D</strong> in them. Also feel free to poke me 
         if this hasn't been updated in forever. ☺
      </p>
      <table>
        <tbody>
          <tr className="table-header">
            <td>Title</td>
            <td>Author</td>
            <td>Classes</td>
          </tr>
          <Book title="The Adventures of Tom Sawyer" author="Mark Twain" classes="NP"/>
          <Book title="AI: a Modern Approach" author="Stuart Russel & Peter Norvig" classes="NP"/>
          <Book title="Alice's Adventures in Wonderland" author="Lewis Carroll" classes="NP"/>
          <Book title="Around the World in 80 Days" author="Jules Verne" classes="NP"/>
          <Book title="Atlas Shrugged" author="Ayn Rand" classes="NP"/>
          <Book title="The Call of the Wild" author="Jack London" classes="RP"/>
          <Book title="Deep Learning" author="Goodfellow, Bengio, & Courville" classes="RP"/>
          <Book title="Dune" author="Frank Herbert" classes="NP"/>
          <Book title="The Emperor's New Mind" author="Roger Penrose" classes="RP"/>
          <Book title="Essentials of Classic Italian Cooking" author="Marcella Hazan" classes="NP"/>
          <Book title="Frankenstein" author="Mary Shelley" classes="NP"/>
          <Book title="Fundamentals of Computational Neuroscience" author="Thomas Trappenberg" classes="NP"/>
          <Book title="God Created the Integers" author="Stephen Hawking" classes="B"/>
          <Book title="The Hitchhiker's Guide to the Galaxy" author="Douglas Adams" classes="RP"/>
          <Book title="Intro to Evolutionary Computing" author="A. E. Eiben & J. E. Smith" classes="RD"/>
          <Book title="Joy of Cooking" author="Irma S. Rombauer & Marion Rombauer Becker" classes="RD"/>
          <Book title="A Journey to the Center of the Earth" author="Jules Verne" classes="NP"/>
          <Book title="The Jungle Book" author="Rudyard Kipling" classes="NP"/>
          <Book title="Mastering the Art of French Cooking" author="Julia Child" classes="NP"/>
          <Book title="Oliver Twist" author="Charles Dickens" classes="NP"/>
          <Book title="Pattern Recognition & Machine Learning" author="Christopher M. Bishop" classes="NP"/>
          <Book title="Reinforcement Learning: an Introduction" author="Richard S. Sutton & Andrew G. Barto" classes="RP"/>
          <Book title="A Tale of Two Cities" author="Charles Dickens" classes="NP"/>
          <Book title="Robinson Crusoe" author="Daniel Defoe" classes="NP"/>
          <Book title="Treasure Island" author="Robert Louis Stevenson" classes="NP"/>
          <Book title="Twenty Thousand Leagues Under the Sea" author="Jules Verne" classes="NP"/>
          <Book title="The Wonderful Wizard of Oz" author="L. Frank Baum" classes="NP"/>
        </tbody>
      </table>
    </div>
  );
};

export default BookList;

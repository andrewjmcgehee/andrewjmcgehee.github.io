import './BookList.css';

const BookList = () => {
  return (
    <div className="booklist-container">
      <p>I like to keep a running list of books that belong to the following classes:
        <ul>
          <li><span>N</span>ot Read: I have not read it</li>
          <li><span>R</span>ead: I have read it</li>
          <li><span>D</span>igital: I own it digitally</li>
          <li><span>P</span>hysical: I own a physical copy</li>
          <li><span>B</span>uy: I want to buy it</li>
        </ul>
      </p>
      <p>My girlfriend <a href="https://marisarodriguez.github.io/">Marisa</a> is sweet enough to 
         buy some of them for me from time to time. Marisa, if you're reading this, look for any 
         rows with a <strong>B</strong> or a <strong>D</strong> in them. Also feel free to poke me 
         if this hasn't been updated in forever. ☺
      </p>
      <table>
        <tr className="table-header">
          <td>Title</td>
          <td>Author</td>
          <td>Classes</td>
        </tr>
        <tr>
          <td>AI: A Modern Approach</td>
          <td>Stuart Russel &amp; Peter Norvig</td>
          <td>NP</td>
        </tr>
        <tr>
          <td>Atlas Shrugged</td>
          <td>Ayn Rand</td>
          <td>NP</td>
        </tr>
        <tr>
          <td>Deep Learning</td>
          <td>Goodfellow, Bengio, &amp; Courville</td>
          <td>RP</td>
        </tr>
        <tr>
          <td>Dune</td>
          <td>Frank Herbert</td>
          <td>NP</td>
        </tr>
        <tr>
          <td>The Hitchhiker's Guide to the Galaxy</td>
          <td>Douglas Adams</td>
          <td>RP</td>
        </tr>
        <tr>
          <td>Intro to Evolutionary Computing</td>
          <td>A. E. Eiben &amp; J. E. Smith</td>
          <td>RD</td>
        </tr>
        <tr>
          <td>Joy of Cooking</td>
          <td>Irma S. Rombauer &amp; Marion Rombauer Becker</td>
          <td>RD</td>
        </tr>
        <tr>
          <td>Pattern Recognition &amp; Machine Learning</td>
          <td>Christopher M. Bishop</td>
          <td>NP</td>
        </tr>
        <tr>
          <td>Reinforcement Learning: an Introduction</td>
          <td>Richard S. Sutton &amp; Andrew G. Barto</td>
          <td>RP</td>
        </tr>
      </table>
    </div>
  );
};

export default BookList;
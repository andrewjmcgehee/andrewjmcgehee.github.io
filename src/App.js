import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div id="header-card" className="card">
          <div id="name">Andrew J. <span>McGehee</span></div>
          <div id="short-bio">Software Engineer // Prospective PhD</div>
        </div>
        <div className="card">
          <div id="upper">
            <div id="headshot-container">
              <img id="headshot" alt="headshot" src="/assets/profile.png"/>
              <div className="social">
                <a href="https://github.com/andrewjmcgehee" className="fa fa-github"></a>
                <a href="https://linkedin.com/in/andrewjmcgehee" className="fa fa-linkedin"></a>
                <a href="https://twitter.com/andrewjmcgehee" className="fa fa-twitter"></a>
              </div>
            </div>
            <div className="vsep"/>
            <div id="quote">
              <em>"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time."<br/><br/><span>-Thomas Edison</span></em>
            </div>
          </div>
        </div>
        <div className="card">
          <h4>Research Interests</h4>
          <p>My research interests lie broadly in the field of AI and machine learning. The medium or application domain is less important to me than the exploration of novel or state of the art AI application and theory. My current course work involves visualization of preferred inputs and activations for explaining and understanding deep learning models and evolutionary computing techniques applied to cyber defense. My current undergraduate research is in computational biology and focuses on generative and deep learning methods for distance based prediction for protein folding.</p>
        </div>
        <div className="card">
          <h4>Curriculum Vitae</h4>
          Feel free to download my CV or use it as a template. Compile with lualatex.<br/> 
          <a href="/assets/cv.tex">LaTeX</a> | <a href="/assets/cv.pdf">PDF</a>
        </div>
        <div className="card">
          <h4>Awards // Honors</h4>
          <ul>
            <li>Auburn University Undergraduate Research Fellow, Fall 2020</li>
            <li>Auburn University Engineering Alumni Council Student Panel, Fall 2019</li>
            <li>Auburn University Business Advisory Council Student Panel, Fall 2019</li>
          </ul>
        </div>
        <div className="card">
          <h4>Publications // Presentations</h4>
          <table id="works">
            <tr><td className="pub-title">PolyFold: an Interactive Visual Simulator for Distance-Based Protein Folding</td></tr>
            <tr><td className="pub-data"><a href="https://arxiv.org/abs/2002.11592">arxiv:2002.11592</a></td></tr>
            <tr><td className="pub-title">PolyFold: Augmenting Human Intuition with Machine Learning for Protein Folding</td></tr>
            <tr><td className="pub-data">Auburn University Student Research Symposium 2019 - Oral Presenter</td></tr>
            <tr><td className="pub-title">Introducing PolyFold, a Tool for Visualizing Stochastic Optimizations for Protein Folding</td></tr>
            <tr><td className="pub-data">Auburn University, Computational Biology Fall 2018 - Guest Lecturer</td></tr>
            <tr><td className="pub-title">Preparing for Technical Interviews with the Big 4</td></tr>
            <tr><td className="pub-data">Auburn University, Intro to Algorithms Fall 2018 - Guest Lecturer</td></tr>
          </table>
        </div>
        <div className="card">
          <h4>Library</h4>
          <table id="library">
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Own</th>
            </tr>
            <tr>
              <td className="book-title">AI:  a Modern Approach</td> 
              <td className="book-author">Russel Norvig</td>
              <td></td>
            </tr>
            <tr>
              <td className="book-title">The Alchemist</td> 
              <td className="book-author">Paulo Coehlo</td>
              <td></td>
            </tr>
            <tr>
              <td className="book-title">Cracking the Coding Interview</td> 
              <td className="book-author">Gayle Laakmann McDowell</td>
              <td>✔</td>
            </tr>
            <tr>
              <td className="book-title">Deep Learning</td> 
              <td className="book-author">Ian Goodfellow, et al.</td>
              <td>✔</td>
            </tr>
            <tr>
              <td className="book-title">Deep Learning with Python</td> 
              <td className="book-author">François Chollet</td>
              <td></td>
            </tr>
            <tr>
              <td className="book-title">The Emperor's New Mind</td> 
              <td className="book-author">Roger Penrose</td>
              <td>✔</td>
            </tr>
            <tr>
              <td className="book-title">Essentials of Classic Italian Cooking</td> 
              <td className="book-author">Marcella Hazan</td>
              <td>✔</td>
            </tr>
            <tr>
              <td className="book-title">God Created the Integers</td> 
              <td className="book-author">Stephen Hawking</td>
              <td></td>
            </tr>
            <tr>
              <td className="book-title">Godel, Escher, Bach:  an Eternal Golden Braid</td> 
              <td className="book-author">Douglas Hofstadter</td>
              <td></td>
            </tr>
            <tr>
              <td className="book-title">Grokking Deep Learning</td> 
              <td className="book-author">Andrew Trask</td>
              <td></td>
            </tr>
            <tr>
              <td className="book-title">Hands-On Machine Learning with Sci-kit Learn and TensorFlow</td> 
              <td className="book-author">Aurélien Géron</td>
              <td></td>
            </tr>
            <tr>
              <td className="book-title">The Hundred-page Machine Learning Book</td> 
              <td className="book-author">Andriy Burkov</td>
              <td></td>
            </tr>
            <tr>
              <td className="book-title">Introduction to Evolutionary Computing</td> 
              <td className="book-author">Agoston E. Eiben</td>
              <td></td>
            </tr>
            <tr>
              <td className="book-title">Joy of Cooking</td> 
              <td className="book-author">Irma S. Rombauer</td>
              <td>✔</td>
            </tr>
            <tr>
              <td className="book-title">Learning from Data</td> 
              <td className="book-author">Yaser S. Abu-Mostafa, et al.</td>
              <td></td>
            </tr>
            <tr>
              <td className="book-title">Machine Learning Yearning</td> 
              <td className="book-author">Andrew Ng</td>
              <td></td>
            </tr>
            <tr>
              <td className="book-title">Mastering the Art of French Cooking</td> 
              <td className="book-author">Julia Child</td>
              <td>✔</td>
            </tr>
            <tr>
              <td className="book-title">Pattern Recognition and Machine Learning</td> 
              <td className="book-author">Cristopher Bishop</td>
              <td>✔</td>
            </tr>
            <tr>
              <td className="book-title">Reinforcement Learning:  an Introduction</td> 
              <td className="book-author">Andrew Barto & Richard S. Sutton</td>
              <td></td>
            </tr>
          </table>
          <p className="aside">*the <em>Own</em> column is for my lovely girlfriend Marisa for when she wants to buy me hard copies of my favorite books. Isn't she sweet?</p>
        </div>
      </div>
    );
  }
}

export default App;

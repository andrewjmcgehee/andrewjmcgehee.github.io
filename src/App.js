import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="container">
        <div id="header-card" class="card">
          <div id="name">Andrew J. <span>McGehee</span></div>
          <div id="short-bio">Software Engineer & Prospective PhD</div>
        </div>
        <div class="card">
          <div id="upper">
            <div id="headshot-container">
              <img id="headshot" alt="headshot" src="/assets/profile.png"/>
              <div class="social">
                <a href="https://github.com/andrewjmcgehee" class="fa fa-github"></a>
                <a href="https://linkedin.com/in/andrewjmcgehee" class="fa fa-linkedin"></a>
                <a href="https://twitter.com/andrewjmcgehee" class="fa fa-twitter"></a>
              </div>
            </div>
            <div class="vsep"/>
            <div id="quote">
              <em>"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time."<br/><br/><span>-Thomas Edison</span></em>
            </div>
          </div>
        </div>
        <div class="card">
          <h4>Research & Interests</h4>
          <p>My research interests lie broadly in the field of AI and machine learning. The medium or application domain is less important to me than the exploration of novel or state of the art machine learning application and theory. My current course work involves applying generative deep learning models for novel audio synthesis and evolutionary computing techniques applied to cyber defense. My current undergraduate research is in computational biology and focuses on generative and deep learning methods for distance based prediction for protein folding.</p>
        </div>
        <div class="card">
          <h4>Résumé & CV</h4>
          <p>
            Download my <a href="/assets/resume.pdf">résumé</a> (Doc)<br/>
            Download my <a href="/assets/cv.pdf">CV</a> (LaTeX)
          </p>
        </div>
        <div class="card">
          <h4>Publications & Presentations</h4>
          <p class="pub-title">PolyFold: an Interactive Visual Simulator for Distance-Based Protein Folding</p>
          <p class="pub-data"><a href="https://arxiv.org/abs/2002.11592">arxiv:2002.11592</a></p>
          <p class="pub-title">PolyFold: Augmenting Human Intuition with Machine Learning for Protein Folding</p>
          <p class="pub-data">Auburn Student Research Symposium 2019, Oral Presenter</p>
        </div>
        <div class="card">
          <h4>Library</h4>
          <table id="library">
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Own</th>
            </tr>
            <tr>
              <td class="book-title">AI:  a Modern Approach</td> 
              <td class="book-author">Russel Norvig</td>
              <td></td>
            </tr>
            <tr>
              <td class="book-title">The Alchemist</td> 
              <td class="book-author">Paulo Coehlo</td>
              <td></td>
            </tr>
            <tr>
              <td class="book-title">Cracking the Coding Interview</td> 
              <td class="book-author">Gayle Laakmann McDowell</td>
              <td>✔</td>
            </tr>
            <tr>
              <td class="book-title">Deep Learning</td> 
              <td class="book-author">Ian Goodfellow, et al.</td>
              <td>✔</td>
            </tr>
            <tr>
              <td class="book-title">Deep Learning with Python</td> 
              <td class="book-author">François Chollet</td>
              <td></td>
            </tr>
            <tr>
              <td class="book-title">The Emperor's New Mind</td> 
              <td class="book-author">Roger Penrose</td>
              <td>✔</td>
            </tr>
            <tr>
              <td class="book-title">Essentials of Classic Italian Cooking</td> 
              <td class="book-author">Marcella Hazan</td>
              <td>✔</td>
            </tr>
            <tr>
              <td class="book-title">God Created the Integers</td> 
              <td class="book-author">Stephen Hawking</td>
              <td></td>
            </tr>
            <tr>
              <td class="book-title">Godel, Escher, Bach:  an Eternal Golden Braid</td> 
              <td class="book-author">Douglas Hofstadter</td>
              <td></td>
            </tr>
            <tr>
              <td class="book-title">Grokking Deep Learning</td> 
              <td class="book-author">Andrew Trask</td>
              <td></td>
            </tr>
            <tr>
              <td class="book-title">Hands-On Machine Learning with Sci-kit Learn and TensorFlow</td> 
              <td class="book-author">Aurélien Géron</td>
              <td></td>
            </tr>
            <tr>
              <td class="book-title">The Hundred-page Machine Learning Book</td> 
              <td class="book-author">Andriy Burkov</td>
              <td></td>
            </tr>
            <tr>
              <td class="book-title">Introduction to Evolutionary Computing</td> 
              <td class="book-author">Agoston E. Eiben</td>
              <td></td>
            </tr>
            <tr>
              <td class="book-title">Joy of Cooking</td> 
              <td class="book-author">Irma S. Rombauer</td>
              <td>✔</td>
            </tr>
            <tr>
              <td class="book-title">Learning from Data</td> 
              <td class="book-author">Yaser S. Abu-Mostafa, et al.</td>
              <td></td>
            </tr>
            <tr>
              <td class="book-title">Machine Learning Yearning</td> 
              <td class="book-author">Andrew Ng</td>
              <td></td>
            </tr>
            <tr>
              <td class="book-title">Mastering the Art of French Cooking</td> 
              <td class="book-author">Julia Child</td>
              <td>✔</td>
            </tr>
            <tr>
              <td class="book-title">Pattern Recognition and Machine Learning</td> 
              <td class="book-author">Cristopher Bishop</td>
              <td>✔</td>
            </tr>
            <tr>
              <td class="book-title">Reinforcement Learning:  an Introduction</td> 
              <td class="book-author">Andrew Barto & Richard S. Sutton</td>
              <td></td>
            </tr>
          </table>
          <p>*the <em>Own</em> column is so that my lovely girlfriend Marisa knows which books to buy me when she wants to surprise me. Isn't she sweet?</p>
        </div>
      </div>
    );
  }
}

export default App;

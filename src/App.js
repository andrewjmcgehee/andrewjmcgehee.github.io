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
            Download my <a href="/assets/resume.pdf">résumé</a><br/>
            Download my <a href="/assets/resume.pdf">CV</a>
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
          <ul>
            <li>AI:  a Modern Approach <span>by Russel Norvig</span></li>
            <li>The Alchemist <span>by Paulo Coehlo</span></li>
            <li>Cracking the Coding Interview <span>by Gayle Laakmann McDowell</span></li>
            <li>Deep Learning <span>by Ian Goodfellow, et al.</span></li>
            <li>Deep Learning with Python <span>by François Chollet</span></li>
            <li>The Emperor's New Mind <span>by Roger Penrose</span></li>
            <li>Essentials of Classic Italian Cooking <span>by Marcella Hazan</span></li>
            <li>God Created the Integers <span>by Stephen Hawking</span></li>
            <li>Godel, Escher, Bach:  an Eternal Golden Braid <span>by Douglas Hofstadter</span></li>
            <li>Grokking Deep Learning <span>by Andrew Trask</span></li>
            <li>Hands-On Machine Learning with Sci-kit Learn and TensorFlow <span>by Aurélien Géron</span></li>
            <li>The Hundred-page Machine Learning Book <span>by Andriy Burkov</span></li>
            <li>Introduction to Evolutionary Computing <span>by Agoston E. Eiben</span></li>
            <li>Joy of Cooking <span>by Irma S. Rombauer</span></li>
            <li>Learning from Data <span>by Yaser S. Abu-Mostafa, et al.</span></li>
            <li>Machine Learning Yearning <span>by Andrew Ng</span></li>
            <li>Mastering the Art of French Cooking <span>by Julia Child</span></li>
            <li>Pattern Recognition and Machine Learning <span>by Cristopher Bishop</span></li>
            <li>Reinforcement Learning:  an Introduction <span>by Andrew Barto & Richard S. Sutton</span></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

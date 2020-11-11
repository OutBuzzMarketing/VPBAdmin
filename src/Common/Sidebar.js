import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import dashboard from '../Pages/dashboard';
import schools from '../Pages/schools';
import competition from '../Pages/competition';
import ncert from '../Pages/ncert';
import samplepaers from '../Pages/samplepapers';
import textbooks from '../Pages/textbooks';
import novels from '../Pages/novels';
import stationery from '../Pages/stationery';

class App extends Component {
  render() {
    return (
        <Router>
          <section id="sidebar">
                  <ul id="sidebar">
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/schools">Schools</Link>
                    </li>
                    <li>
                      <Link to="/competition">Competition</Link>
                    </li>
                    <li>
                      <Link to="/ncert">NCERT</Link>
                    </li>
                    <li>
                      <Link to="/textbooks">Text Books</Link>
                    </li>
                    <li>
                      <Link to="/samplepapers">Sample Papers</Link>
                    </li>
                    <li>
                      <Link to="/novels">Novels</Link>
                    </li>
                    <li>
                      <Link to="/stationery">Stationery</Link>
                    </li>
                  </ul>
              </section>

                <Route path="/dashboard" component={dashboard} />
                <Route path="/schools" component={schools} />
                <Route path="/competition" component={competition} />
                <Route path="/ncert" component={ncert} />
                <Route path="/textbooks" component={textbooks} />
                <Route path="/samplepapers" component={samplepaers} />
                <Route path="/novels" component={novels} />
                <Route path="/stationery" component={stationery} />
        </Router>
    );
  }
}

export default App;

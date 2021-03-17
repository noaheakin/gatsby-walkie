import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import screenImg from '../images/walkie-screen.jpg';
import closerImg from '../images/closer-together.png';
import distractionImg from '../images/distraction-free.png';
import voiceImg from '../images/voice-only.png';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Features from './test';
// import notFound from "404.js";

class App extends Component {

  handleBecomeFounderSubmit = e => {
    e.preventdefault();
    console.log("CLICKED")
  }

  render() {
    return (
      <div className="App">
        <Router>
        <NavBar />
        <Switch>
          <Route exact path="/features" render={() => <Features />} /> 
        </Switch>
        <div class="flex pt-8 bg-white mt-28 mx-auto space-y-2 xs:py-0 xs:flex-col xs:items-center xs:space-y-0">
        <div class="sm:order-10 w-1/2 text-left px-20">
            <h1 class="text-4xl py-5 font-extrabold tracking-wide leading-snug">Simple, real time voice chat for your remote team.</h1>
            <h3 class="text-xl">Walkie is a better way to communicate for distributed teams that don't want to spend all day in dry text channels.</h3>
            <form class="my-10" onSubmit={this.handleBecomeFounderSubmit}>
              <input class="border border-r-0 rounded-l-lg py-3 border-gray-300" type="text" placeholder="   > work email" required></input>
              <button class="border border-black bg-black text-white px-3 py-3 font-bold rounded-r-lg">Become Founding User</button>
            </form>
          </div>
          <img class="md:w-1/2" src={screenImg} />
        </div>
        <div class="bg-black flex py-20 justify-items-center px-14 text-white">
          <div class="flex flex-col space-y-3 pr-12">
            <img class="h-15 w-20" src={voiceImg} />
            <h2 class="text-2xl">Voice Only</h2>
            <p>A voice only communication tool that enables teams to communicate with emotion and purpose.</p>
          </div>
          <div class="flex flex-col space-y-3 pr-12">
            <img class="h-14 w-14" src={distractionImg} />
            <h2 class="text-2xl">Distraction Free</h2>
            <p>No more ⌘-tabbing. Spend less time in slack channels and more time on the work that actually matters.</p>
          </div>
          <div class="flex flex-col space-y-3">
            <img class="h-15 w-20" src={closerImg} />
            <h2 class="text-2xl">Closer Together</h2>
            <p>Subtle hints of presence so that even the most distributed teams feel connected across continents.</p>
          </div>
        </div>
        <div class="flex flex-column">
          <div class="flex">
            <div class="flex flex-column">
              <h2>Have fewer meetings and make faster decisions</h2>
              <p>Walkie keeps people out of unnecessary meetings by providing the value of real time communication with out the need for everyone to drop everything.</p>
            </div>
            <img src={process.env.PUBLIC_URL + '/images/request-access1.png'} />
          </div>
          <div class="flex">
            <img src={process.env.PUBLIC_URL + '/images/send-us-feedback.jpg'} />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + '/images/request-access2.jpg'} />
          </div>
        </div>
        </Router>
      </div>
    )
  }
}

export default App;

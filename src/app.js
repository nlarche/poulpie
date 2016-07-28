import React from 'react';

import ga from 'react-google-analytics';

import Header from './components/header';
import Section from './components/section';
import Footer from './components/footer';
import Subscribe from './components/subscribe';

import { diver, diverSun, hand, poulpie } from './image';

const GoogleAnalyticsInitiailizer = ga.Initializer;
const isProduction = process.env.NODE_ENV === "production";

export default class App extends React.Component {
  constructor() {
    super();
    if (isProduction) {
      ga("create", "UA-76365657-2", "auto");
      ga("send", "pageview");
    }
  }
  render() {

    const app = [
      {
        id: 1,
        image: diver,
        text1: 'Réseau de plongeur',
        text2: 'Divers network',
      },
      {
        id: 2,
        image: hand,
        text1: 'Plonger ensemble',
        text2: 'Diving together',
      },
      {
        id: 3,
        image: diverSun,
        text1: 'Réserver et plonger',
        text2: 'Click & Dive',
      },
    ];

    return (
      <div>
        <Header logo={poulpie} />
        <div className="section">
          <div className="container">
            <div className="tile is-ancestor" >
              {app.map(s => <Section
                key={s.id} image={s.image}
                text1={s.text1} text2={s.text2} />) }
            </div>
          </div>
        </div>
        <Subscribe />
        <Footer />
        <GoogleAnalyticsInitiailizer />
      </div>
    );
  }
}

import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Posts from './components/Posts';
import Post from './components/Post';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from "react-apollo";
import Pusher from 'pusher-js';

const client = new ApolloClient ({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  constructor() {
    super();
    this.pusher = new Pusher("APP_ID", {
      cluster: 'eu',
      encrypted: true
    });
  }

  componentDidMount() {
    if('actions' in Notification.prototype) {
      console.log('Notification');
    }
    else {
      console.log('No Nofications');
    }
  }

  render() {
    return ( 
      <ApolloProvider client = {client}>
        <div className = "App">
          <Header />
          <section className = "App-main">
            <Posts pusher = {this.pusher} apollo_client = {client}/>
          </section>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;

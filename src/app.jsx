import React, { Component } from 'react';
import { spots } from './topspots';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      topspots: spots
    }
  }

  render() {
    console.log(this.state.topspots)
    return (
      <div className='App'>
        <div className='jumbotron jumbotron-fluid'>
          <div className='container'>
            <h1 className='display-4'>San Diego Top Spots</h1>
            <p className='lead'>A list of the top 30 places to see in San Diego, California.</p>
          </div>
        </div>

        {
          this.state.topspots.map( spot => {
            return <Links 
              key={spot.id}
              name={spot.name}
              description={spot.description}
              location={spot.location}/>
          })
        }

      </div>
    );
  }
}

const Links = (props) => {
  const lat = props.location[0]
  const long = props.location[1]

  return (
    <div className="well">
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <a className='btn btn-primary' href={`https://maps.google.com/?q=${lat},${long}`}
        target="_blank">
          Check this spot
      </a>
    </div>
  );
}

export default App;

import React from "react";
import { ajax } from "rxjs/ajax";
import { map, startWith, endWith, catchError, retry } from "rxjs/operators";

class AjaxObservable extends React.Component {
  state = { data: [] };

  //   componentDidMount() {
  // this.getSuperHeroes();
  //   }

  getSuperHeroes = async () => {
    // fetch('https://swapi.co/api/planets/')
    //   .then(result =>
    //     result
    //       .json()
    //       .then(response => this.setState({ data: response.results })),
    //   )
    //   .catch(error => console.log('error', error));
    // this.props.services.getPlanetsEpic();
    // await ajax("https://swapi.co/api/planets/").pipe(
    //   map(result => console.log("result", result)),
    //   catchError(error => console.log("error", error)),
    //   startWith(console.log("loading true")),
    //   endWith(console.log("loading false"))
    // );
  };

  render() {
    console.log(this.props.services);
    const { data } = this.state;
    return (
      <section>
        <h1>Fetch View </h1>
        <button onClick={this.getSuperHeroes}>Fetch Super Heroes</button>
        {data.length !== 0 &&
          data.map(planet => (
            <div>
              <h3>Planet name: {planet.name}</h3>
              <p>Climate: {planet.climate}</p>
              <hr />
            </div>
          ))}
      </section>
    );
  }
}

export default AjaxObservable;

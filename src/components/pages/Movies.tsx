import * as React from 'react';
// import { Route, Link } from 'react-router-dom';
import * as styles from './Movies.css';
import NewMovie from './../NewMovie';

export interface MoviesProps {

}

export interface MoviesState {
  addMovie: string
}

export default class Movies extends React.Component<MoviesProps, MoviesState> {
  constructor(props) {
    super(props);
    this.state = {
      addMovie: 'Add a new movie'
    }
  }

  render() {
    return <div>
      <p className={styles.text}>Lista de peliculas</p>
      <p className={styles.text}>...</p>
      <div className={styles.text}>
        <NewMovie />
      </div>

    </div>
  }
}

import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './Header.css';

export interface HeaderProps {

}

export interface HeaderState {
  menu: {
    home: string,
    about: string,
    movies: string
  }
}

export default class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props) {
    super(props);
    this.state = {
      menu: {
        home: 'HOME',
        about: 'ABOUT',
        movies: 'MOVIES'
      }
    }
  }

  render() {
    return <ul style={styles}>
      <li style={styles}>
        <Link to="/home" className={styles.link}>{this.state.menu.home}</Link>
      </li>
      <li style={styles}>
        <Link to="/about" className={styles.link}>{this.state.menu.about}</Link>
      </li>
      <li style={styles}>
        <Link to="/movies" className={styles.link}>{this.state.menu.movies}</Link>
      </li>
    </ul>;
  }
}

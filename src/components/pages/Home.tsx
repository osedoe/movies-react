import * as React from 'react';
import * as styles from './Home.css';

export interface HomeState {
  title: string;
}

export default class Home extends React.Component<{}, HomeState> {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Inicio de la página',
    }
  }


  render() {
    return <div>
      <h1 className={styles.title}>{this.state.title}</h1>
    </div>
  }
}

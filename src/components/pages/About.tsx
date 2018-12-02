import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as styles from './About.css';

export interface AboutProps {

}

export interface AboutState {

}

export default class About extends React.Component<AboutProps, AboutState> {
  render() {
    return <div>
      <p className={styles.aboutSection}>About section</p>
    </div>
  }
}

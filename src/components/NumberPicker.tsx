import * as React from "react";
import * as styles from './NumberPicker.css';

// const numberPickerStyle: React.CSSProperties = {
//   width: '150px',
//   height: '32px',
//   display: 'flex',
//   alignItems: 'center',
//   position: 'relative',
//   border: '1px solid #EDEEF4',
//   boxShadow: '0 2px 1px 0 rgba(0, 0, 0, 0.03)',
//   color: '#385871',
//   borderRadius: '5px',
// }

// const numberPickerButtons: React.CSSProperties = {
//   backgroundColor: '#4CAF50',
//   border: 'none',
//   color: 'white',
//   width: '30px',
//   height: '30px',
//   textAlign: 'center',
//   textDecoration: 'none',
//   display: 'inline - block',
//   outline: 'none',
//   borderRadius: '50%',
//   fontSize: '25px',
//   paddingBottom: '5px',
//   lineHeight: '25px',
//   cursor: 'pointer',
// }

// const numberPickerLabel: React.CSSProperties = {
//   width: '100px',
//   height: '32px',
//   textAlign: 'center',
//   padding: '0',
//   outline: 'none',
//   fontFamily: 'OpenSansBold, sansserif',
//   color: '#385871',
//   borderRadius: '5px',
//   lineHeight: '30px',
// }

export interface NumberPickerProps {
  max: number,
  min: number
}

export interface NumberPickerState {
  counter: number
}

export default class NumberPicker extends React.Component<{}, NumberPickerState> {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    this.increaseNumber = this.increaseNumber.bind(this);
    this.decreaseNumber = this.decreaseNumber.bind(this);
  }

  increaseNumber() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decreaseNumber() {
    this.setState({ counter: this.state.counter - 1 });
  }

  // render() {
  //   return <div style={numberPickerStyle}>
  //     <button style={numberPickerButtons} onClick={this.increaseNumber}>+</button>
  //     <span style={numberPickerLabel}>{this.state.counter}</span>
  //     <button style={numberPickerButtons} onClick={this.decreaseNumber}>-</button>
  //   </div>
  // }

  render() {
    return <div className={styles.container}>
      <button className={styles.buttons} onClick={this.increaseNumber}>+</button>
      <span className={styles.label}>{this.state.counter}</span>
      <button className={styles.buttons} onClick={this.decreaseNumber}>-</button>
    </div>
  }
}

import * as React from 'react';

export interface AddMovieProps {

}

export interface AddMovieState {
  name: string
}

export default class AddMovie extends React.Component<AddMovieProps, AddMovieState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Nombre de la película'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(`Creando nueva película: ${this.state.name}`);
  }

  render() {
    return <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
       <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  }
}

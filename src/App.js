import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    // Set the initial state
    this.state = {
      monsters: [],
      searchField: '' // Corrected a typo: 'searchFild' to 'searchField'
    };

    // Binding 'this' to the event handler
    // this.handleChang = this.handleChang.bind(this);  // This line is commented out
  }

  componentDidMount() {
    // Fetching data from an API endpoint when the component mounts
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  // Event handler for input change
  handleChang = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;

    // Filtering monsters based on the searchField value
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Roladex</h1>
        <SearchBox
          placeholder='search monster'
          // handleChang={ e => this.setState({ searchFild: e.target.value }) }
          handleChang={this.handleChang} // Passing the event handler as a prop
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

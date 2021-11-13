import React, {Component} from 'react'
import './App.css';
import 'bulma/css/bulma.css'

import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'
import { MoviesList } from './components/MoviesList';

class App extends Component {
  state = { results: [] }

  _handleResults = (results) => {
    this.setState({ results })
  }


  render() {
    return (
      <div className="App">
        <Title>Find Movies</Title>
        <div className='SearchForm-wrapper'>
          <SearchForm onResults={this._handleResults}/>
        </div>
        {this.state.results.length === 0 ? <p>Sin resultados</p> : <MoviesList movies = {this.state.results}/> }
      </div>
    );
  }
}

export default App;

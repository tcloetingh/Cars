import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };

  async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID e8003296245dd5b29009d5c12f58530d5801877044c99710f93bf317d604965c'
      }
    });
    console.log(response.data.results);
  }
  render() {
    return (
      <div className="ui container" style={{ margin: '10px'}}>
        <SearchBar runMeWhenUserSubmits={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
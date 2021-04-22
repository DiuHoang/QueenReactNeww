import React, { Component } from 'react';
import '../search/Search.css';
class Search extends Component {
  
  render() {
    return (
        <div className="sub_search">
        <input className="input-Search" id="inputsearch" name='txtSearch' type='text' placeholder='Nhập từ khóa...' value={this.props.valueSearch}
          name="title"
          onChange={(event) => this.props.search(event.target.value)}></input>
        <button className="btsearch" ><i class="fas fa-search"></i></button>
      </div>      
    );
  }
}

export default Search;
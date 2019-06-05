import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  searchClickHandle = () => {
    this.searchBar.focus();
  };

  render() {
    return (
      <header>
        <div className='header-logo'>
          <p>acid Images</p>
          <p>acid@fmail.com</p>
        </div>
        <div className='header-rights'>
          <p>
            7e Edition <br /> -Visual Festival
          </p>
        </div>
        <div className='search'>
          <input
            name='searchText'
            onChange={this.props.onChangeHandle}
            value={this.props.searchedImage}
            type='text'
            ref={input => (this.searchBar = input)}
          />
          <div className='search-icon'>
            <i onClick={this.searchClickHandle} className='fas fa-search' />
          </div>
        </div>
        <div className='goto-home'>
          <i onClick={this.props.homeClicked} className='fas fa-home' />
        </div>
      </header>
    );
  }
}

export default Header;

import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './component/component/header/Header';
import Footer from './component/component/footer/Footer';
import Menu from './component/component/menu/Menu';
import ImageResult from './ImageResult';
class App extends Component {
  state = {
    searchText: '',
    amount: 10,
    apiKey: '12687741-01041bc5eefdb6dec32337209',
    apiURL: 'https://pixabay.com/api/',
    displayMenu: true,
    displayImgResult: false,
    images: []
  };
  onChangeHandle = e => {
    console.log(e.target.value);
    this.setState(
      {
        [e.target.name]: e.target.value,
        displayMenu: false,
        displayImgResult: true
      },
      () => {
        axios
          .get(
            `${this.state.apiURL}?key=${this.state.apiKey}&q=${
              this.state.searchText
            }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then(response => this.setState({ images: response.data.hits }))
          .catch(err => console.log(err));
      }
    );
  };

  onHomeClicked = () => {
    this.setState({
      displayImgResult: false,
      displayMenu: true
    });
  };
  menuItemClicked = e => {
    let link = e.target.text;

    this.setState(
      {
        searchText: link,
        displayMenu: false,
        displayImgResult: true
      },
      () => {
        axios
          .get(
            `${this.state.apiURL}?key=${this.state.apiKey}&q=${
              this.state.searchText
            }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then(response => this.setState({ images: response.data.hits }))
          .catch(err => console.log(err));
      }
    );
  };

  render() {
    let showMenu;
    let showImgResult;
    if (this.state.displayMenu) {
      showMenu = <Menu menuItemClicked={this.menuItemClicked} />;
    } else {
      showMenu = null;
    }
    if (this.state.displayImgResult) {
      showImgResult = <ImageResult images={this.state.images} />;
    } else {
      showImgResult = null;
    }

    return (
      <div>
        <Header
          homeClicked={this.onHomeClicked}
          onChangeHandle={this.onChangeHandle}
          searchedImage={this.state.searchText}
        />
        <Footer />
        {showMenu}
        {showImgResult}
      </div>
    );
  }
}

export default App;

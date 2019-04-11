import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Bookmarks from '@material-ui/icons/Bookmarks';

class App extends Component {
  render() {
    return (
      <Button variant="contained" color="primary">
      <Bookmarks></Bookmarks>
        Welcome Material UI
      </Button>
    );
  }
}

export default App;
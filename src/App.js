import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Bookmarks from '@material-ui/icons/Bookmarks';
import Navbar from './Navbar';
import MediaCard from './Card'
import TextField from '@material-ui/core/TextField';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Button variant="contained" color="primary">
          <Bookmarks></Bookmarks>
          Welcome Material UI
      </Button> <br />
        <TextField
          placeholder="Placeholder here"
          label="Basic TextField" />
        <MediaCard />
      </div>

    );
  }
}

export default App;
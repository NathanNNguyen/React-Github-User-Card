import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component {

  state = {
    infos: [],
    followers: [],
  }


  componentDidMount() {
    axios.get(`https://api.github.com/users/NathanNNguyen`)
      .then(res => {
        this.setState({ infos: res.data })
        console.log(res.data)
      })
      .catch(err => console.log(err))

    axios.get(`https://api.github.com/users/NathanNNguyen/followers`)
      .then(res => {
        this.setState({ followers: res.data })
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <h1>My Card</h1>
        <div>
          <p>{this.state.infos.name}</p>
          <p>{this.state.infos.location}</p>
          <p>{this.state.infos.bio}</p>
          <img width="200" src={this.state.infos.avatar_url} alt='user-img' />
        </div>

        <div>
          {this.state.followers.map(follower => (
            <img width="150" src={follower.avatar_url} key={follower.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

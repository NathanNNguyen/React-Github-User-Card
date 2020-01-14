import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './Components/UserCard';
import FollowersCard from './Components/FollowerCard'

class App extends React.Component {

  state = {
    infos: [],
    followers: [],
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/NathanNNguyen`)
      .then(res => {
        this.setState({ infos: res.data })
        // console.log(res.data)
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
        <h1>User</h1>
        <UserCard infos={this.state.infos} />
        <h2>Followers</h2>
        <FollowersCard followers={this.state.followers} />
          {/* <h2>Followers</h2>
          {this.state.followers.map(follower => (
            <img width="150" src={follower.avatar_url} key={follower.id} alt='follower-img' />
          ))}
        </div> */}
      </div>
    );
  }
}

export default App;

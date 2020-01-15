import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './Components/UserCard';
import FollowersCard from './Components/FollowerCard';
// import SearchForm from './Components/SearchForm';

class App extends React.Component {

  state = {
    infos: [],
    followers: [],
    followerLogin: '',
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
        // console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  handleChange = e => {
    this.setState({
      followerLogin: e.target.value,
    })
  }

  searchFollower = e => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.followerLogin}`)
      .then(res => {
        // console.log(res.data)
        this.setState({
          infos: res.data
        })
      })
    axios.get(`https://api.github.com/users/${this.state.followerLogin}/followers`)
      .then(res => {
        this.setState({ followers: res.data })
        // console.log(res.data)
      })
      .catch(err => { console.log(err) })
  }

  render() {
    return (
      <div className="App">
        <h1>User</h1>
        <UserCard infos={this.state.infos} />
        <h2>Followers</h2>
        <form>
          <label>Search followers</label>
          <input value={this.state.followerLogin} onChange={this.handleChange} />
          <button onClick={this.searchFollower}>Search</button>
        </form>
        {/* <SearchForm /> */}
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

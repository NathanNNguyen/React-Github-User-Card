import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component {

  state = {
    infos: [],
  }
  

  componentDidMount() {
    axios.get(`https://api.github.com/users/NathanNNguyen`)
      .then(res => {
        this.setState({infos: res.data})
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  componentDidUpdate() {
    // axios.get(`https://api.github.com/users/NathanNNguyen/followers`)
    //   .then(res => {
    //     this.setState({infos: res.data})
    //     console.log(res.data)
    //   })
    //   .catch(err => console.log(err))
  }


  // fetchFollowers = e => {
  //   e.preventDefault();
  //   axios
  //     .get(`https://api.github.com/users/NathanNNguyen/followers`)
  //     .then(res => {
  //       this.setState({
  //         infos: res.data.message
  //       });
  //       console.log(res);
  //     })
  //     .catch(err => console.log(err));
  // };
  
  render() {
    return (
      <div className="App">
          <h1>My app</h1>
        <div>
          <p>{this.state.infos.name}</p>
          <p>{this.state.infos.location}</p>
          <p>{this.state.infos.bio}</p>
          <img width="200" src={this.state.infos.avatar_url} alt='user-img'/>
        </div>
          <button onClick={this.fetchFollowers}>Followers</button>
          {/* {this.state.infos.map(info => (
            <img width="200" src={this.state.infos.avatar_url} key={info} alt='follower-img' />
          ))} */}
      </div>
    );
  }
}

export default App;

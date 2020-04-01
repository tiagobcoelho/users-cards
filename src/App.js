import React, { Component } from 'react';
import Cards from './components/Cards';
import './App.css'
import AddCard from './components/AddCard';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        users: [],
        loaded: false,
    }
  }

  componentDidMount() {
      const url = "https://jsonplaceholder.typicode.com/users";
      fetch(url)
          .then(response => response.json())
          .then(json => {
              this.setState({
                  loaded: true,
                  users: json,
              })
      });
  }

  removeCard =(name) => {
    let usr = this.state.users.filter( user => 
      user.name !== name
    )
    this.setState({users: usr})
  }

  addUser = (user) =>{
    let users = [user,...this.state.users]
    console.log(users)
    this.setState({ users })
  }

  
  render(){
    const { users, loaded } = this.state;
    if(!loaded){
      return <div>Loading...</div>
    }else{
      return (
        <div className="App">
          <AddCard addUser={this.addUser} />
          {users.map(user => (
            <Cards 
            key={user.id}
            name={user.name}
            location={user.address.city}
            email={user.email}
            phone={user.phone}
            removeCard={this.removeCard}
            />
        ))}
        </div>
      );
    }
  }
}

export default App;

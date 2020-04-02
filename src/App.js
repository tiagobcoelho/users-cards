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
    };
  };

  componentDidMount() {
      const url = "https://jsonplaceholder.typicode.com/users";
      fetch(url)
          .then(response => response.json())
          .then(json => {
              this.setState({
                  loaded: true,
                  users: json,
              });
      });
  };

  removeCard =(name) => {
    const usr = this.state.users.filter( user => 
      user.name !== name
    )
    this.setState({ users: usr });
  };

  addUser = (user) =>{
    const users = [user,...this.state.users];
    this.setState({ users });
  };

  updateUser = (user) => {
    const newUsers = [...this.state.users];
    const i = newUsers.findIndex(usr => user.id === usr.id);
    newUsers.splice(i,1,user);
    this.setState({ users: newUsers });
  }
  
  render(){
    const { users, loaded } = this.state;
    if(!loaded){
      return <div id='loading'><h2>Loading...</h2></div>
    }else{
      return (
        <div className="App">
          <AddCard addUser={this.addUser} />
          {users.map(user => (
            <Cards 
            key={user.id}
            id={user.id}
            name={user.name}
            location={user.address.city}
            email={user.email}
            phone={user.phone}
            removeCard={this.removeCard}
            updateUser={this.updateUser}
            />
        ))}
        </div>
      );
    };
  };
};

export default App;

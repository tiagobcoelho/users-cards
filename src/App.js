import React, { Component } from 'react';
import Cards from './components/Cards';
import './App.css'


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
  
  render(){
    const { users, loaded } = this.state;
    if(!loaded){
      return <div>Loading...</div>
    }else{
      return (
        <div className="App">
          {users.map(user => (
            <Cards 
            key={user.id}
            name={user.name}
            location={user.address.city}
            email={user.email}
            phone={user.phone}
            />
        ))}
        </div>
      );
    }
  }
}

export default App;

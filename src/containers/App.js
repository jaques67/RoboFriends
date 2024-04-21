import React, {useState, useEffect} from 'react';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";


function App() {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchfield: '',
  //   }
  // }
  const [robots, setRobot] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(users => this.setState({robots: users}));
  // }

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  }

  // const {robots, searchfield} = state;
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  console.log(robots, searchfield);
  return !robots.length
    ? <h1>loading!</h1>
    : (
      <div className="tc">
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    );
}

export default App;

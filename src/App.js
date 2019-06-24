import React from 'react';
//import logo from './logo.svg';

// Ketik kita mengexport menggunakan export default, maka nama importnya bebas.
//import Button from './components/button';

// Namun kita ketika mengexport berdasarkan nama (Export Named), maka kita bisa import komponentnya satu per satu lalu dibungkusnya kurung kerawal
//import {Button, Inputan} from './components/button';
//import {Latihan} from './components/latihanClassComponent';
// {Children} from './components/children';
import Todo from './Todo';
import { Route, Link } from 'react-router-dom';
import './App.css';

function Home () {
  return (
    <div>
      <h1>Ini Home</h1>
      <Link to='/todo'>
        <input type='button' value='Pindah Ke Halaman Todo' />
      </Link>
    </div>
  )
}

class App extends React.Component {
  state = 
  {
    todo : ['Makan']
  }

  onBtnClick = () => {
    this.setState({todo : [this.refs.Todo.value]})
  }

  render() {
    return (
      <div>
        <Route path='/todo' component={Todo} exact />
        <Route path='/' component={Home} exact />
      </div>
    );
  }
}

export default App;

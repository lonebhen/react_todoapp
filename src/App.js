import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layouts/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import {v4 as uuid} from 'uuid'; // To generate random ids for our tasks

import './App.css';

class App extends React.Component{

  
      state={
        // Dummy todo lists
        todos:[
          {
            id:uuid(),
            title:'Learn Data Structures and Algorithm',
            completed: false
          },
           {
            id:uuid(),
            title:'Become a great developer',
            completed: false
          },
           {
            id:uuid(),
            title:'Be indisposable in any field I enter',
            completed: false
          },
        ]
      }

      

  // Toggle Complete
  markComplete=(id) =>{
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id===id){
        todo.completed=!todo.completed
      }
      return todo;
    })})
  }

  //Delete Todo
   delTodo=(id)=>{
    this.setState({todos:[...this.state.todos.filter(todo=>todo.id !==id)] });
   }


   //AddTodo

   addTodo=(title)=>{
    const newTodo={
      id:uuid(),
      title,
      completed:false
    }
    this.setState({todos:[...this.state.todos,newTodo]})
   }


  render(){
    
    return (
      <Router>
      <div className='App'>
        <div className='container'>
        <Header/>
        <Routes>
        <Route exact path="/" element={(
          <React.Fragment>
         <AddTodo addTodo={this.addTodo}/>
        <Todos  todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
          </React.Fragment>
        
        )} />
        <Route path="/about" element={<About/>} />
        </Routes>
        </div>
        </div>
      </Router>
    );
  }
}

export default App;


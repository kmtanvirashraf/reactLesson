import React from 'react';
import './App.css';
import axios from 'axios';
import AddTodo from './Components/AddTodo';
import Todos from './Components/Todos';

class App extends React.Component{
  state={
    todos:[]
  };


componentDidMount()
{
axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
.then(res=>{
  this.setState(
    {
      todos:res.data
    });
  
});
}


addTodo =title=>{
  axios.post('https://jsonplaceholder.typicode.com/todos',{title,completed:false})
  .then (res=> {this.setState({todos: [...this.state.todos,res.data]})});
};

markComplete =id=>{
  this.setState({
    todos: this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.completed=!todo.completed;
      }
      return todo;
    })
  });
};

delTodo =id =>{
  axios.delete('https://jsonplaceholder.typicode.com/todos/' +id)
  .then(res=>this.setState({todos:[...this.state.todos.filter(todo=>todo.id !==id)]}));
};

render() {
  return (
    <div className ="App">
      <div className ="container">
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} markComplete ={this.markComplete} delTodo={this.delTodo} />
      </div>
    </div>
  );
}
}
export default App;

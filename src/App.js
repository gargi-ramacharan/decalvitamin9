import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Redux To-Do List</h1>
          
          <div className="card shadow-sm">
            <div className="card-body">
              <TaskForm />
              <hr />
              <TaskList />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
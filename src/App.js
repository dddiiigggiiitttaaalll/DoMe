import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {

const [showAddTask, setShowAddTask] = useState(false)


// placeholder data for dev
const [tasks, setTasks] = useState([
  {
      id: 1,
      text: 'some text 1',
      day: 'Apr 20th at 4:20pm',
      reminder: true,
  },
  {
      id: 2,
      text: 'some text 2',
      day: 'Apr 20th at 5:20pm',
      reminder: true,
  },
  {
      id: 3,
      text: 'some text 3',
      day: 'Apr 20th at 6:20pm',
      reminder: false,
  }
])

// add task
const addTask = (task) => {
  
  const id = Math.floor(Math.random() * 10000) +1
  console.log(id)
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])

}


// delete task
const deleteTask = (id) => {
  console.log('delete', id)
  setTasks(tasks.filter((task) => task.id !== id))

}

// toggle reminder
const toggleReminder = (id) => {
  console.log(id)
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task))

}

  return (
    <div className="container">


      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />


      {showAddTask && <AddTask onAdd={addTask} />} 


      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'no tasks to show'
      )}

      
    </div>
  );
}

export default App;

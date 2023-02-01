import './App.css';
import Tasks from './components/Tasks'

let homeTasks = [
  {
    title: 'Clean the bath',
    parent: 'Home',
    dueDate: '6/8/2017',
    priority: 'high',
    desc: 'Wash the bathroom and the waste sheets in the bath',
    completed: false
  },
  {
    title: 'Clone the repo',
    parent: 'Home',
    dueDate: '6/8/2017',
    priority: 'high',
    desc: 'Wash the bathroom and the waste sheets in the bath',
    completed: true
  },
  {
    title: 'cook the food',
    parent: 'Home',
    dueDate: '6/8/2017',
    priority: 'high',
    desc: 'Wash the bathroom and the waste sheets in the bath',
    completed: false
  },
  {
    title: 'Polish the shoe',
    parent: 'Home',
    dueDate: '6/8/2017',
    priority: 'high',
    desc: 'Wash the bathroom and the waste sheets in the bath',
    completed: false
  },
  {
    title: 'Drain the pap',
    parent: 'Home',
    dueDate: '6/8/2017',
    priority: 'high',
    desc: 'Wash the bathroom and the waste sheets in the bath',
    completed: true
  }
]


function App() {
  return (
    <div className="App">
      <Tasks taskArr={homeTasks}/>
    </div>
  );
}

export default App;

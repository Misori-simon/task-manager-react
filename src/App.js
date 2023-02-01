import './App.css';
import {Projects, Project} from './components/Projects'

let projects = [
  {
    id: '0001',
    title: 'My Day',
    icon: 'sharp',
    tasks: [
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


  },
  {
    id: '0002',
    title: 'Office Work',
    icon: 'sharp',
    tasks: [
      {
        title: 'Clone the repo',
        parent: 'Home',
        dueDate: '6/8/2017',
        priority: 'high',
        desc: 'Wash the bathroom and the waste sheets in the bath',
        completed: true
      },
      {
        title: 'Wrtie tests for Task Man',
        parent: 'Home',
        dueDate: '6/8/2017',
        priority: 'high',
        desc: 'Wash the bathroom and the waste sheets in the bath',
        completed: true
      }
    ]


  },
  {
    id: '0003',
    title: 'House Work',
    icon: 'sharp',
    tasks: [
      {
        title: 'Clean the bath',
        parent: 'Home',
        dueDate: '6/8/2017',
        priority: 'high',
        desc: 'Wash the bathroom and the waste sheets in the bath',
        completed: false
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
        title: 'Drain the pap',
        parent: 'Home',
        dueDate: '6/8/2017',
        priority: 'high',
        desc: 'Wash the bathroom and the waste sheets in the bath',
        completed: true
      }
    ]


  }
]

function App() {
  return (
    <div className="App">
      <aside className='aside'>
        <Projects projectArr={projects} />
      </aside>
      <div className='main'>
        <Project project={projects[0]} />
      </div>
      <sidebar className='sidebar'>
        
      </sidebar>
    </div>
  );
}

export default App;


import './App.css'
import Dropdown from './components/Dropdown';

function App() {


  const items = [
    { value: "Select1", label: "React" },
    { value: "Select2", label: "JavaScript" },
    { value: "Select3", label: "Java" },
    { value:"selecte4", label:"python"}
  ];



  return (
    <div className='container'>
     <Dropdown items={items}></Dropdown>
      
    </div>
  )
}

export default App

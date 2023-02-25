import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import {useEffect} from 'react'
import component1 from './component1';

function App() {
  // const [count, setCount] = useState(0)
  // let number =0;
  const [number, setNumber] = useState(0);
  const [person,setPerson] = useState({
    name: "harshitha",
    age:21
  })

  const [numberList,setNumberList] = useState([0]);

  const [data,setData] = useState([]);

  const increaseCount = () =>{
    setNumber(number+1);
    console.log(number);
  }

  const changeName = () =>{
    setPerson(prev => { //previours value was {name : "harshitha",age:21}
      return {...prev, name:"harshi"} // creates an object like {name : "harshi",age:21} name only changes age only changes
    })
  }

  const addValuse = () =>{
    setNumber(number+1);
    setNumberList (prev =>{
      return [...prev,"number"];
    })
  }

  useEffect(() => {
    console.log("this component has mounted");
    fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()).then(data=>{
      //console.log(data);
      setData(data);
    })
  },[])

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
          <Button variant="primary"><i class="fas fa-moon fa-lg fa-fw"></i></Button>{' '}
          </Nav>
        </Container>
      </Navbar>
      <h1 className="text-center">Hello World</h1>
      
    </div>
  )
}

export default App

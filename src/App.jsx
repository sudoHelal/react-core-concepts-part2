
import { Suspense } from 'react'
import './App.css'
import Batsman from './Batsman'
import Bowler from './Bowler'
import Counter from './Counter'
import Users from './Users'
import Friends from './Friends'
const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json());
const fetchFriends = async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

function App() {
  const friendsPromise = fetchFriends();
  function handeClick2(){
    alert('click me 2')
  }
  const handleClick3 = () =>{
    alert('click me 3')
  }
  const handleAdd5 = (num) =>{
    const newNum = num + 5;
    alert(newNum);
  }
  return (
    <>
      
      <h1>Vite + React</h1>
      <Suspense fallback={<h3>Loading</h3>}>
        <Friends friendsPromise={friendsPromise} />
      </Suspense>
      <Suspense fallback={<h3>Loading</h3>}>
      <Users fetchUsers={fetchUsers}/>
      </Suspense>
      <Bowler />
      <Batsman />
      <Counter />
      {/* <button onclick="handleClick()">Click me</button> */}
      <button onClick={handeClick2}>Click me2</button>
      <button onClick={handleClick3}>Click Me 3</button>
      <button onClick={() => alert("click me 4")}>Click Me 4</button>
      <button onClick={() => handleAdd5(7)}>click me 5</button>
      
    </>
  )
}

export default App

import './App.css'
import Counter from './counter';
import Team from './Team';
import Users from './Users';
import Posts from './Posts';
import Friends from './Friends';
import Comments from './Comments';
import Albums from './Albums';

function App() {
  function handleClick(){
    alert('button click');
  }
  const click2 =() =>{
    alert('Click me 2 Clicked');
  }
  const click4 =(num)=>{
    alert (num+5);
  }

  return (
    <>
      <h3>React core concept</h3>
      <Albums></Albums>
      <Comments></Comments>
      <Friends></Friends>
      <Posts></Posts>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>



      <button onClick={handleClick}>Click Me</button>
      <button onClick={click2}>Click Me2</button>
      <button onClick={()=>{alert('Click Me 3')}}>Click Me3</button>
      <button onClick={()=>click4(5)}>Click Me4</button>
    </>
  )
}

export default App

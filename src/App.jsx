import './App.css'

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
      <button onClick={handleClick}>Click Me</button>
      <button onClick={click2}>Click Me2</button>
      <button onClick={()=>{alert('Click Me 3')}}>Click Me3</button>
      <button onClick={()=>click4(5)}>Click Me4</button>
    </>
  )
}

export default App

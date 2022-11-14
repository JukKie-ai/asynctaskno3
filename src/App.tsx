import "./styles.css";
import { useEffect, useState } from "react";
import { Box } from './components/Box'
import Button from './components/Button'
import Shuffle from "./components/Shuffle";

function shuffle(arra1: any) {
  var ctr = arra1.length,
    temp,
    index;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}

function App() {
  // const [numbers, setNumbers] = useState<string[]>(['red', 'blue', 'violet', 'pink', 'green', 'orange', 'yellow', 'teal', 'brown']);
  // const [colors, setColors] = useState<any[]>(['red', 'blue', 'violet', 'pink', 'green', 'orange', 'yellow', 'teal', 'brown']);
  const [input, setInput] = useState<string[]>([])
  const [i, setI] = useState(0);
  const [count, setCount] = useState(1);
  
  const [numbers, setNumbers] = useState([
    {id: 0, color: 'red'},
    {id: 1, color: 'blue'},
    {id: 2, color: 'violet'},
    {id: 3, color: 'pink'},
    {id: 4, color: 'green'},
    {id: 5, color: 'orange'},
    {id: 6, color: 'yellow'},
    {id: 7, color: 'teal'},
    {id: 8, color: 'brown'},
  ])

  const [colors, setColors] = useState([
    {id: 0, color: 'red', stat: false},
    {id: 1, color: 'blue', stat: false},
    {id: 2, color: 'violet', stat: false},
    {id: 3, color: 'pink', stat: false},
    {id: 4, color: 'green', stat: false},
    {id: 5, color: 'orange', stat: false},
    {id: 6, color: 'yellow', stat: false},
    {id: 7, color: 'teal', stat: false},
    {id: 8, color: 'brown', stat: false},
  ])

  const OnShuffle = () => {
    const changes = shuffle([...numbers])
    setNumbers(changes)
    const newState = colors.map(obj => {
      return {id: obj.id, color: obj.color, stat: false}
    })
    const changeCol = shuffle(newState)
    setColors(changeCol)
    setInput([])
    setI(0)
    console.log(input)
    console.log(i)
  }

useEffect(() => {
    const mountArray = shuffle([...numbers]);
    const col = shuffle([...colors])
    setColors(col)
    setNumbers(mountArray);
  }, []);

  const toggle = (id: any) => {
    const newState = colors.map(obj => {
      if(obj.id === id) {
        if(obj.stat === false||true) {
          input.push(obj.color)
          setInput(input)
          console.log(input)
          

          if(numbers[i].color === input[i]) {
            setCount(count+1)
            setI(i + 1)
            console.log(i)
            if(i >= 8) {
              alert('success')
            }
            return {...obj, stat: true}
          } else {
            alert('wrong')
            setInput([])
            setCount(1)
            setI(0)
            // return {id: obj.id, color: obj.color, stat: false}
          }
        }
      }
      return obj
    })
    setColors(newState)
  }

  return (
    <div>
      <div className="box">
      {numbers.map(item =>
            <Box value={item.color} />
        )}
      </div>
      <div className="App">
      {colors.map((item, index) =>
            <Button key={item.id} stat={item.stat} item={item} value={item.color} id={item.id} handleClick={toggle}/>
        )}
      <Shuffle handleClick={OnShuffle}/>
    </div>
    </div>
  );
}

export default App;

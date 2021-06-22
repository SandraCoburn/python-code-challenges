import React, {useState, useEffect, useRef} from "react"
/**
 * ref is a piece of state that does not cause a re-render when changed
 */
const data = [
  {id: 1, title: "first item", details: "First item details"},
    {id: 2, title: "second item", details: "Second item details"},
      {id: 3, title: "third item", details: "third item details"}
]

export default function App(){
  const ref = useRef()
  const [items] = useState(data)
  const [activeIndex, setActiveIndex] = useState(null)

  //Change handler passed to the item
  const onItemSelect = (id) => {
    if(id === activeIndex){
      setActiveIndex(null)
    } else {
      setActiveIndex(id)
    }
  }
  //turns on event listener
  useEffect(()=> {
    const onBodyClick = (e) => {
      //add a check: did the event occur in the ref node?
      if(ref.current.contains(e.target)){
        //if yes return early
        return;
      }
      setActiveIndex(null)
    }
    document.body.addEventListener("click", onBodyClick, {capture: true})
    //removes the event listener, should items unmount
    return ()=> {
      document.body.removeEventListener("click", onBodyClick, {capture:true})
    }
    
  }, [])
//maps return from items state
const renderedItems = items.map(item => {
  //isolate open status
  const open = item.id === activeIndex;
  return (
    <item
    key={item.id}
    style={{border: "1px solid gray"}}
    onClick={() => onItemSelect(item.id)}
    >
      <h2>{item.title}</h2>
      <div>{open ? <p>{item.details}</p> : null}</div>
    </item>
  )
})
return (
  <div>
    <div>
      <h1>
        Items to show
      </h1>
    </div>
    <section ref={ref}>{renderedItems}</section>
  </div>

)
 
}


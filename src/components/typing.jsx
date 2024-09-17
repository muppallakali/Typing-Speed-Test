import React,{useState,useEffect,useRef} from 'react'

export default function Typing() {
    let [inputt,setInputt]=useState("")
    let[count,setCount]=useState(0)
    let[time,setTime]=useState(60)
    let[active,setActive]=useState(false)
    useEffect(()=>{
        if(active===true){
            if (time===0){setActive(false)};
            let iv=setInterval(()=>{
                setTime(prev=>prev-1)
            },1000)
            return ()=>clearInterval(iv)
        }
        
    },[time,active])
    let inputFocus=useRef()
    let timerFocus=useRef()
    function handleInput(ev){
     let   currentInput=ev.target.value
        setInputt(currentInput)
        let word=currentInput.trim().split(/\s+/)
        let countword=word.filter(x=>x!=="")
        setCount(countword.length)  
        
    }
   
    function inputStart(){
        inputFocus.current.focus()
        setActive(true)
    }
    function inputCount(ev){
         
    }
  return (
    <> 
    <center>
    <h1>Typing Speed Test</h1>
    <h3>Number of words={count}</h3>
    <h3>Time: {time}</h3>
    <textarea ref={inputFocus} disabled={!active} style={{width:"80%",height:"25rem"}} onKeyDown={e=>inputCount(e)} onChange={e=>handleInput(e)}></textarea>
    </center>
    <center><button ref={timerFocus} onClick={()=>{inputStart()}}>Start</button></center>
    </>
  )
}

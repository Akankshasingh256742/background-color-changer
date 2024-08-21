import { useState } from 'react'
import { RecoilRoot, useRecoilState } from 'recoil'
import { colochangeratom } from './Atom'


function App() {
  const [color, setcolor] = useRecoilState(colochangeratom)

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: color,
      

    }}>
      <button onClick={
        () => { setcolor('red') }}
        style={{
          backgroundColor: 'red',
          color: 'white'
        }}>Red</button>
      <button onClick={
        () => { setcolor('yellow') }}
        style={{
          backgroundColor: 'yellow',
          color: 'white'
        }}>Yellow</button>
      <button onClick={
        () => { setcolor('blue') }}
        style={{
          backgroundColor: 'blue',
          color: 'white'
        }}>Blue</button>
      <button onClick={
        () => { setcolor('purple') }}
        style={{
          backgroundColor: 'purple',
          color: 'white'
        }}>Purple</button>
        <button onClick={
      ()=>{setcolor('black')}} 
      style={{
        backgroundColor:'black',
        color:'white'
      }}>Black</button>
      <button onClick={
      ()=>{setcolor('green')}} 
      style={{
        backgroundColor:'green',
        color:'white'
      }}>Green</button>
      <button onClick={
      ()=>{setcolor('white')}} 
      style={{
        backgroundColor:'White',
        color:'black'
      }}>Default</button>
    </div>
  )
}

export default App

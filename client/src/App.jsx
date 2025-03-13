import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
   <div className='App'>
    <navbar className='App-navbar'>
      <h1>Javier Lopez</h1>
      <h2>Full Stack Developer</h2>
      <ul>
        <li><a href="/">About Me</a></li>
        <li><a href="/about">Portfolio</a></li>
        <li><a href="/contact">Contact Me</a></li>
        <li><a href="/resume"> Resume</a></li>
      </ul>
      </navbar>
    <header className='App-header'>
      <h1>Welcome to the React App</h1>
      </header>
      <main>
        <h2>React App</h2>
        <p>This is a simple React application.</p>
        </main>
   </div>

<footer className='App-footer'>
  <p><a href='github.com/JavyLopez-20'>github</a></p>
</footer>
</>
  )
}

export default App

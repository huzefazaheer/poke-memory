import './App.css'
import Card from './card'

function App() {

  return (
    <>
    <nav>
      <h2>PokeMemory</h2>
      <p>Current Score: </p>
      <p>High Score: </p>
    </nav>
      <div className='gamewrapper'>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
      </div>
    </>
  )
}

export default App



import { Suspense, useState } from 'react'
import './App.css'

import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'



 // const PlayersPromise = fetchPlayers();

const fetchPlayers =async()=>{
   const res =await fetch('/players.json')
   return res.json()
}

const PlayersPromise = fetchPlayers();


function App() {

  const [toggle,setToggle]=useState(true);
  const [availableBalance, setAvailableBalance]=useState(60000000)
  const [purchasedPlayers, setPurchasedPlayers]=useState([])
  
   const removePlayer=(p)=>{
      const filertPlayer= purchasedPlayers.filter(ply=>ply.player_name!==p.player_name)
      setPurchasedPlayers(filertPlayer)
   }
  return (
    <>
    <Navbar availableBalance={availableBalance}></Navbar>
    <div className='w-11/12 mx-auto flex justify-between'>
     <h1 className='font-bold text-2xl'>{
        toggle===true?"Available Players":`Selected Players(${purchasedPlayers.length}/6)`
      }</h1>
     <div className='flex'>
      <button onClick={()=>setToggle(true)} className={`p-3 border-gray-300 rounded-l-xl font-bold ${toggle===true?"bg-yellow-300":""}`}>Available</button>
      <button onClick={()=>setToggle(false)} className={`p-3 border-gray-300 rounded-r-xl text-gray-300 ${toggle===false?"bg-yellow-300":""}`}>Selected <span>({purchasedPlayers.length})</span></button>
     </div>
    </div>
  {
    toggle===true? <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
  
     <AvailablePlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} PlayersPromise={PlayersPromise} setAvailableBalance={setAvailableBalance}>  
  </AvailablePlayers>
   </Suspense>:<SelectedPlayers removePlayer={removePlayer} purchasedPlayers={purchasedPlayers}></SelectedPlayers>
  }

    </>
  )
}

export default App

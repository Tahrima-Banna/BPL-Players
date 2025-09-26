import React, { useState } from 'react';
import userImg from '../../assets/user-1.png'
import flagImg from '../../assets/user-2.png'
import { toast } from 'react-toastify';

const PlayerCard = ({player,setAvailableBalance,availableBalance,purchasedPlayers,setPurchasedPlayers}) => {

    const[isSelected,setIsSelected]=useState(false)

    const handleSelected=(playerData)=>{
         
        const playerPrice=parseInt(playerData.price.split("USD").join().split(",").join(""))
        if(availableBalance<playerPrice){
            toast("Not enough balance")
            return ;
        }
         if(purchasedPlayers.length==6){
            toast("6 players already selected")
            return ;
        }
         setIsSelected(true),
        setAvailableBalance(
            availableBalance-playerPrice
        ); 

        setPurchasedPlayers([...purchasedPlayers,playerData])
        toast("player purshed")
    }
    return (
        <div className="card bg-base-100  shadow-sm p-4">
  <figure>
    <img
      src={player.player_image}
      alt="Shoes" className='w-full h-[300px] object-cover'/>
  </figure>
  <div className="">
   <div className='flex mt-4'>
    <img src={userImg} alt=''/> <h2 className="card-title ml-2">{player.player_name}</h2>
   </div>
   <div className='flex justify-between mt-4 border-b-1 border-gray-200 pb-2'>
     <div className='flex items-center'>
        <img className='w-[20px] h-[20px]' src={flagImg} alt=''/><h3 className='ml-2'>{player.player_country}</h3>
     </div>
     <button className='btn'>{player.playing_role}</button>
   </div>

   <div className='flex justify-between font-bold py-2'>
     <span>Rating</span>
     <span>{player.rating}</span>
   </div>
   <div className='flex justify-between py-2'>
     <span className='font-bold'>{player.bating_style}</span>
     <span>{player.bowling_style}</span>
   </div>
    <div className="flex justify-between mt-4 items-center">
     <p className='font-bold'>Price:${player.price}</p>
      <button disabled={isSelected} onClick={()=>{handleSelected(player)}} className="btn">
        {isSelected===true?"Selected" : "Choose a player"}</button>
    </div>
  </div>
</div>
    );
};

export default PlayerCard;
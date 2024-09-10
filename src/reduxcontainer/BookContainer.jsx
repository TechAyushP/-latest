import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import purchasebook from './BookAction'




const BookContainer = () => {
  //A function that takes a selector function as its first argument. The selector function is responsible for selecting a part of the Redux store's state or computing derived data.
 const noofBook= useSelector(state => state.NumberofBook )
 const dispatch=useDispatch()
  return (
    <div>
      Hello m hu bookcontainer
      <h2>No of Book-{noofBook} </h2>
      <button onClick={()=>(dispatch(purchasebook()))}>Buy Book </button>
    </div>
  )
}

export default BookContainer

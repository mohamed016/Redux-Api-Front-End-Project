import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUserWithApi } from '../../Redux/api';
import { addUserWithCreateAsyncThunk, addUserWithDefault } from '../../Redux/UserSlice';
import './Form.css'


export default function Form() {
  const dispatch = useDispatch()
  const [name, setName] = useState("sdjnd,mcx");
  const [email, setEmail] = useState("")
  const { loading } = useSelector((state) => state.user.userData)
  const addUsersDefault = (e) => {
    e.preventDefault();
    dispatch(addUserWithDefault({ name, email }))
  }
  const addUsersWithApi = (e) => {
    e.preventDefault();
    addUserWithApi({ name, email }, dispatch)
  }
  const addUsersWithAsyncThunk = (e) => {
    e.preventDefault();
    dispatch(addUserWithCreateAsyncThunk({ name, email }))
  }
  return (
    <div>
      <form>
        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Your Name" />
        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your Email" />
        {loading ? <div>loading...</div> : <div className="containerBtn">
          <input onClick={(e) => addUsersWithApi(e)} className="btn" type="submit" placeholder="" value="use api with redux" />
          <input onClick={(e) => addUsersDefault(e)} className="btn" type="submit" placeholder="" value="use default redux" />
          <input onClick={(e) => addUsersWithAsyncThunk(e)} className="btn" type="submit" placeholder="" value="use  redux with addUserWithCreateAsyncThunk" />
        </div>}


      </form>
    </div>
  )
}

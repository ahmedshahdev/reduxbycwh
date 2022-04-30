import React from 'react'
import { useDispatch } from 'react-redux'
import {actionCreators} from '../state/index'

const Shop = () => {

    const dispatch = useDispatch();

  return (
      <div className='container mt-5'>

    <div className="col-sm-4">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Deposit / Withdraw Money</h5> 
                <button onClick={()=>{dispatch(actionCreators.depositMoney(100))}} className="btn btn-danger">-</button>
                <span className='mx-2'>Update Balance</span>
                <button onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}  className="btn btn-success">+</button>
            </div>
        </div>
    </div>
      </div>
  )
}

export default Shop
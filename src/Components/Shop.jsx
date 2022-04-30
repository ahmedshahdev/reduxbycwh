import React from 'react'

const Shop = () => {
  return (
      <div className='container mt-5'>

    <div className="col-sm-4">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Deposit / Withdraw Money</h5> 
                <button className="btn btn-danger">-</button>
                <span className='mx-2'>Update Balance</span>
                <button className="btn btn-success">+</button>
            </div>
        </div>
    </div>
      </div>
  )
}

export default Shop
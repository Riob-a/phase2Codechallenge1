import React from "react"

function InputSearch({transactions, setTransactions, dataArray}){

    function handleInputChange(event){
        const input = event.target.value

        if(input.length > 0){
          const filter = transactions.filter((transaction)=>{
                return transaction.description.toLowerCase().includes(input.toLowerCase())
        })
        if (filter.length > 0){
              setTransactions([...filter])
          }

        }else{
          setTransactions([...dataArray])
      } 
      }

    return (
        <div className="input-group mb-3 shadow ">
            <input  
                onChange={handleInputChange} 
                className="form-control"
                type="text"
                placeholder="Search your Recent Transactions"
            />
        </div>
    )
}
export default InputSearch;
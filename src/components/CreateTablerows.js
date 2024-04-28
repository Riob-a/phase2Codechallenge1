import React from "react";

function CreateTableRows({transactions}){
    const tRows = transactions.map((transaction, index)=>{
        return (
        <tr key={index+1}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
        </tr>
        )
    })
    return (
        <>
        {tRows}
        </>
    );
}
export default CreateTableRows;
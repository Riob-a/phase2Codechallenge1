import { useState } from "react"

function CreateForm({transactions, setTransactions}){

const [data, setData] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""
});

function handleSubmissions(event){
    event.preventDefault();
    setTransactions([...transactions, data])
    }

function handleFormChange(event){
    //console.log(event.target.value)
    setData({ ...data, [event.target.name] : event.target.value }
)
    //console.log(data)
}

    return(
    <>
    <div className="mb-3 shadow">
    <form className="row border p-4 m-0" onSubmit={handleSubmissions}>
        <div className="col-3 mx-auto">
           <input className="form-control form-control-sm m-2 p-2 " type="date" name="date" onChange={handleFormChange} value={data.date}  />  
        </div>
        <div className="col-3 mx-auto">
            <input className="form-control  form-control-sm m-2 p-2" type="text" name="description" onChange={handleFormChange}  value={data.description} placeholder="Description"  />
        </div>
        <div className="col-3 mx-auto">
            <input className="form-control form-control-sm m-2 p-2" type="text" name="category"  onChange={handleFormChange} value={data.category} placeholder="Category" />
        </div>
        <div className="col-3">
            <input className="form-control  form-control-sm m-2 p-2" type="number" name="amount"  onChange={handleFormChange} value={data.amount} placeholder="Amount" /> 
        </div> 
        <div className="d-grid gap-2 col-3 mx-auto">
            <button type="submit" className="btn btn-info">Add Transaction</button>
        </div>   
    </form>
    </div><br/>
    </>
    )
}
export default CreateForm;
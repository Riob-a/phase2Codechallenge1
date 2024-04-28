import CreateTableRows from "./CreateTablerows";

function CreateTable({transactions}){


    return (
        <>
        <table className="table table-light shadow">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <CreateTableRows transactions = {transactions}/>
            </tbody>
        </table>
        </>
    );
}
export default CreateTable;

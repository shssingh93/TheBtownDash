import DataTable from "react-data-table-component"
import { useState, useEffect } from "react"

function Customerdetails() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [perPage, setPerPage] = useState(10)

  const columns = [
    {
      name: "CUSTOMER NAME",
      selector: (row) => row.name,
    },
    {
      name: "EMAIL",
      selector: (row) => row.email,
    },
    {
      name: "REGISTRATION DATE",
      selector: (row) => (row.completed ? "Yes" : "No"),
    },
  ]

  useEffect(() => {
    fetchTableData()
  }, [])

  async function fetchTableData() {
    setLoading(true)
    const URL = "https://jsonplaceholder.typicode.com/users"
    const response = await fetch(URL)

    const users = await response.json()
    setData(users)
    setLoading(false)
  }

  return (
    <div style={{ margin: "20px" }}>
      <DataTable
        title="CUSTOMERS"
        columns={columns}
        data={data}
        progressPending={loading}
        pagination
      />
    </div>
  )
}

export default Customerdetails
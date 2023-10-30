import DataTable from "react-data-table-component"
import { useState, useEffect } from "react"
import { DropDown } from "../../components/accountBox/common"

function Deliverydetails() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [perPage, setPerPage] = useState(10)

  const [selectedOptions, setSelectedOptions] = useState({});
  const optionsOne = ["John Doe", "Ethan Stone", "Jane Doe", "Ervin Howell"];

  const columns = [
    {
      name: "PICKUP",
      selector: (row) => row.address.street,
    },

    {
      name: "DESTINATION",
      selector: (row) => row.address.city,
    },

    {
      name: "CUSTOMER NAME",
      selector: (row) => row.name,
    },
    {
      name: "ORDER DATE",
      selector: (row) => row.address.geo.lat,
    },
    {
      name: "ASSIGNED DRIVER",
      selector: (row) => (
        <DropDown
          value={selectedOptions[row.id] || ""}
          onChange={(e) => {
            const value = e.target.value;
            setSelectedOptions((prevSelectedOptions) => ({
              ...prevSelectedOptions,
              [row.id]: value
            }));
          }}
        >
          <option value="">Assign Driver</option>
          {optionsOne.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </DropDown>
      )
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
        title="DELIVERIES"
        columns={columns}
        data={data}
        progressPending={loading}
        pagination
      />
    </div>
  )
}

export default Deliverydetails
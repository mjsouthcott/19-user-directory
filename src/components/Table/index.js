import React, { useState } from "react"
import "./style.css"
import users from '../../users.json'
const to = require('to-case')

function Table (props) {
  const [usersSubset, setUsersSubset] = useState(users)
  let sortColumn, filterColumn = 'id'
  let sortOrder = 'asc'
  let filterValue = ''

  function setSortColumn (value) {
    sortColumn = value
    console.log(sortColumn)
  }

  function setSortOrder (value) {
    sortOrder = value
    console.log(sortOrder)
  }

  function sort () {
    let sortedUsers = []

        // TODO: Add logic to sort users

    setUsersSubset(sortedUsers)
  }

  function setFilterColumn (value) {
    filterColumn = value
    console.log(filterColumn)
  }

  function filter () {
    let filterValueInput = document.getElementById('filter-value')
    filterValue = to.title(filterValueInput.value)
    filterValueInput.value = ''
    let filteredUsers = []

    switch (filterColumn) {
      case 'rank':
        filteredUsers = users.filter(user => { return user.rank === filterValue })
        break
      case 'firstName':
        filteredUsers = users.filter(user => { return user.first_name === filterValue })
        break
      case 'lastName':
        filteredUsers = users.filter(user => { return user.last_name === filterValue })
        break
      case 'occupation':
        filteredUsers = users.filter(user => { return user.occupation === filterValue })
        break
      case 'section':
        filteredUsers = users.filter(user => { return user.section === filterValue })
        break
      case 'position':
        filteredUsers = users.filter(user => { return user.position === filterValue })
        break
      case 'yearsOfService':
        filteredUsers = users.filter(user => { return user.years_of_service === parseInt(filterValue) })
        break
      default:
        filteredUsers = users.filter(user => { return user.id === parseInt(filterValue) })
        break
    }

    setUsersSubset(filteredUsers)
  }

  return (
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="row">
              <div className="col-sm">
                <h4>Sort</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Column
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button className="dropdown-item" type="button" onClick={() => setSortColumn('id')}>ID (Default)</button>
                    <button className="dropdown-item" type="button" onClick={() => setSortColumn('rank')}>Rank</button>
                    <button className="dropdown-item" type="button" onClick={() => setSortColumn('firstName')}>First Name</button>
                    <button className="dropdown-item" type="button" onClick={() => setSortColumn('lastName')}>Last Name</button>
                    <button className="dropdown-item" type="button" onClick={() => setSortColumn('occupation')}>Occupation</button>
                    <button className="dropdown-item" type="button" onClick={() => setSortColumn('section')}>Section</button>
                    <button className="dropdown-item" type="button" onClick={() => setSortColumn('position')}>Position</button>
                    <button className="dropdown-item" type="button" onClick={() => setSortColumn('yearsOfService')}>Years of Service</button>
                  </div>
                </div>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Order
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button className="dropdown-item" type="button" onClick={() => setSortOrder('asc')}>Ascending (Default)</button>
                    <button className="dropdown-item" type="button" onClick={() => setSortOrder('desc')}>Descending</button>
                  </div>
                </div>
                <button className="btn btn-secondary" type="button" onClick={() => sort()}>Sort</button>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="row">
              <div className="col-sm">
                <h4>Filter</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Column
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button className="dropdown-item" type="button" onClick={() => setFilterColumn('id')}>ID (Default)</button>
                    <button className="dropdown-item" type="button" onClick={() => setFilterColumn('rank')}>Rank</button>
                    <button className="dropdown-item" type="button" onClick={() => setFilterColumn('firstName')}>First Name</button>
                    <button className="dropdown-item" type="button" onClick={() => setFilterColumn('lastName')}>Last Name</button>
                    <button className="dropdown-item" type="button" onClick={() => setFilterColumn('occupation')}>Occupation</button>
                    <button className="dropdown-item" type="button" onClick={() => setFilterColumn('section')}>Section</button>
                    <button className="dropdown-item" type="button" onClick={() => setFilterColumn('position')}>Position</button>
                    <button className="dropdown-item" type="button" onClick={() => setFilterColumn('yearsOfService')}>Years of Service</button>
                  </div>
                </div>
                <form className="form-inline">
                  <div className="form-group">
                    <input type="text" className="form-control" id="filter-value" aria-describedby="filter-value" placeholder="Enter value" />
                  </div>
                </form>
                <button className="btn btn-secondary" type="button" onClick={() => filter()}>Filter</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Rank Badge</th>
              <th scope="col">Rank</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Occupation</th>
              <th scope="col">Section</th>
              <th scope="col">Position</th>
              <th scope="col">Years of Service</th>
            </tr>
          </thead>
          <tbody>
            {usersSubset.map(user => (
              <tr>
                <th scope="row">{user.id}</th>
                <td><img src={user.rank_badge} alt={user.rank} height="100"></img></td>
                <td>{user.rank}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.occupation}</td>
                <td>{user.section}</td>
                <td>{user.position}</td>
                <td>{user.years_of_service}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
import React from "react"
import "./style.css"
import users from '../../users.json'

function Table (props) {
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
                    <button className="dropdown-item" type="button">ID (Default)</button>
                    <button className="dropdown-item" type="button">Rank</button>
                    <button className="dropdown-item" type="button">First Name</button>
                    <button className="dropdown-item" type="button">Last Name</button>
                    <button className="dropdown-item" type="button">Occupation</button>
                    <button className="dropdown-item" type="button">Section</button>
                    <button className="dropdown-item" type="button">Position</button>
                    <button className="dropdown-item" type="button">Years of Service</button>
                  </div>
                </div>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Order
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button className="dropdown-item" type="button">Ascending (Default)</button>
                    <button className="dropdown-item" type="button">Desending</button>
                  </div>
                </div>
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
                    <button className="dropdown-item" type="button">Rank (Default)</button>
                  </div>
                </div>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Value
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button className="dropdown-item" type="button">None (Default)</button>
                    <button className="dropdown-item" type="button">Lieutenant</button>
                    <button className="dropdown-item" type="button">Warrant Officer</button>
                    <button className="dropdown-item" type="button">Sergeant</button>
                    <button className="dropdown-item" type="button">Master Corporal</button>
                    <button className="dropdown-item" type="button">Corporal</button>
                    <button className="dropdown-item" type="button">Craftsman</button>
                  </div>
                </div>
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
            {users.map(user => (
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
import React from 'react'
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData()
  }, [currentPage])

  const fetchData = async () => {
    try {
      let url = `/api/getApplicantsData/?page=${currentPage}`;
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData.data);
      setTotalPages(jsonData.data.total_pages)
    }
    catch (error) {
      console.log("Error fetching data")
    }
  }

  return(
    <>
    <div className="container">
        <h1>Application Details</h1>
        <hr />
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Applicant Name</th>
                    <th>Applicant Name</th>
                    <th>Gender</th>
                    <th>District</th>
                    <th>State</th>
                    <th>Pincode</th>
                    <th>Ownership</th>
                    <th>Govt ID Type</th>
                    <th>ID Number</th>
                    <th>Category</th>
                    <th>Load Applied</th>
                    <th>Date of Application</th>
                    <th>Status</th>
                    <th>Reviewer ID</th>
                    <th>Reviewer Name</th>
                    <th>Reviewer Comments</th>
                    <th>Edit</th>
 
                </tr>
            </thead>

            
                <tbody>
  {data?.map((connection) => (
    <tr key={connection.id}>
      <td>{connection.id}</td>
      <td>{connection.Applicant.Applicant_Name}</td>
      <td>{connection.Applicant.Gender}</td>
      <td>{connection.Applicant.District}</td>
      <td>{connection.Applicant.State}</td>
      <td>{connection.Applicant.Pincode}</td>
      <td>{connection.Applicant.Ownership}</td>
      <td>{connection.Applicant.Govt_ID_Type}</td>
      <td>{connection.Applicant.ID_Number}</td>
      <td>{connection.Applicant.Category}</td>
      <td>{connection.Applicant.Load_Applied}</td>
      <td>{connection.Applicant.Date_of_Application}</td>
      <td>{connection.Applicant.Status}</td>
      <td>{connection.Applicant.Reviewer_ID}</td>
      <td>{connection.Applicant.Reviewer_Name}</td>
      <td>{connection.Applicant.Reviewer_Comments}</td>
      <td>
        <Link
          type="button"
          to={`/editApplicant/${connection.id}`}
          className="btn btn-outline-success text-white"
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </Link>
      </td>
    </tr>
  ))}
</tbody>

          
        </table>
    </div>
    </>
  )
}

export default Home

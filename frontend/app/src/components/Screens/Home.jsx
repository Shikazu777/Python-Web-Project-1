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

import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchData();
  }, [page, search]);

  const fetchData = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/api/applicants/`, {
      params: { page, search, page_size: 5 },
    });
    setData(res.data.results);
    setTotalPages(res.data.num_pages);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-2 py-1 mb-3"
      />

      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="border px-2 py-1">ID</th>
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Email</th>
            <th className="border px-2 py-1">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((a) => (
            <tr key={a.id}>
              <td className="border px-2 py-1">{a.id}</td>
              <td className="border px-2 py-1">{a.name}</td>
              <td className="border px-2 py-1">{a.email}</td>
              <td className="border px-2 py-1">{a.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-3 flex gap-2">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <span>
          {page} / {totalPages}
        </span>
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;


import { Bar } from "react-chartjs-2";

const chartData = {
  labels: ["Pending", "Approved", "Rejected"],
  datasets: [
    {
      label: "Applicants",
      data: [12, 19, 3],
    },
  ],
};
<Bar data={chartData} />;

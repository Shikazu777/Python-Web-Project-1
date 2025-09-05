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
    <div>Home</div>
  )
}

export default Home

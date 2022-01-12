import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { Container } from "react-bootstrap";
import "antd/dist/antd.css";
import axios from "axios";
import Api from "../Utils/Api";

function TableTodos() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    axios
      .get(Api.allTodos)
      .then(function (response) {
        const result = response.data;
        setDataSource(result);
        console.log(result);
      })
      .catch(function (error) {
        setError(error);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }

  if (error || !Array.isArray(dataSource)) {
    return <p>There was an error loading your data!</p>;
  }

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "User ID",
      dataIndex: "userId",
    },
    {
      key: "3",
      title: "Status",
      dataIndex: "completed",
      render: (completed) => {
        return <p>{completed ? "Complete" : "In Progress"}</p>;
      },
    },
  ];

  return (
    <Container className="mt-5">
      <Table columns={columns} dataSource={dataSource}></Table>
    </Container>
  );
}

export default TableTodos;

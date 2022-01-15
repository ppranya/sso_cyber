import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { userList } from "../redux/user.thunk";
import { useDispatch, useSelector } from "react-redux";

const TableComponent = () => {
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();
  const cardList = useSelector((state) => state.user_list.value);
  useEffect(() => {
    if (cardList && cardList.length) {
      setUserData(cardList);
    } else {
      dispatch(userList())
        .unwrap()
        .then((res) => {
          if (res) {
            setUserData(res);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Experience</TableCell>
              <TableCell>CTC</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.first_name}
                </TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.experience}</TableCell>
                <TableCell>{row.CTC}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableComponent;

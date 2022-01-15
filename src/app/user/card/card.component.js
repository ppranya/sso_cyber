import { Avatar, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { red } from "@mui/material/colors";
import { userList } from "../redux/user.thunk";

const CardComponent = () => {
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();
  const cardList = useSelector((state) => state.user_list.value);
  useEffect(() => {
    if(cardList && cardList.length) {
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
      <Grid container spacing={2}>
        {userData.length && userData.map((item, index) => {
          return (
            <Grid item xs={6} key={index}>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {item.first_name.substring(0,1).toLocaleUpperCase()}
                    </Avatar>
                  }
                  title={`${item.first_name} ${item.last_name}`}
                  subheader="January 14, 2022"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Sit culpa non incididunt labore tempor eiusmod aute. Est nisi sit nulla Lorem ea deserunt id. Culpa do sunt cupidatat sit nostrud fugiat Lorem occaecat anim. Eiusmod in occaecat ad commodo culpa voluptate tempor. Esse in irure dolore nulla aliqua sit officia labore.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default CardComponent;

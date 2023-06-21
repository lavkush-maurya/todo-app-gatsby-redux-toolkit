import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, fetchdata } from "../redux/todoSlice";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import * as styles from "../styles/view.module.css";
import { Link } from "gatsby";

const View = () => {
  const data = useSelector((state) => state.todo.data);
  const dispatch = useDispatch();
  // console.log("data", data);

  useEffect(() => {
    async function fetchData() {
      await dispatch(fetchdata());
    }
    fetchData();
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };

  return (
    <div>
      <h1>I've Todo</h1>
      <div className={styles.cardmainwrap}>
        {data &&
          Object.keys(data).map((id) => (
            <Card
              sx={{ width: 345, height: 350 }}
              key={id}
              id="card"
              className={styles.cardmain}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data[id].title}
                </Typography>
                <Typography variant="body2">{data[id].description}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="outlined"
                  size="small"
                  style={{ margin: "0px 5px" }}
                  onClick={() => handleDelete(id)}
                  color="error"
                >
                  Delete
                </Button>
                <Link to={`/edit?id=${id}`}>
                  <Button
                    size="small"
                    variant="outlined"
                    style={{ margin: "0px 5px" }}
                  >
                    Edit
                  </Button>
                </Link>
              </CardActions>
            </Card>
          ))}
      </div>
      {/* <Link to="/">Go back to View page</Link> */}
    </div>
  );
};

export default View;

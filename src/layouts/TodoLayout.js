import React from "react";
import { useDispatch } from "react-redux";
import { insertapi } from "../redux/todoSlice.js";
import { useFormik } from "formik";
import { Stack, TextareaAutosize } from "@mui/material";
import * as styles from "../styles/todo.module.css";
import { styled } from "@mui/system";
import * as Yup from "yup";
// -----------------textmui text area
const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
  width: 320px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px 12px 0 12px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[500] : blue[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }

  @media (max-width: 500px) {
    width: 220px;
  }
`
);
// -------mui text area

const Todo = () => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(insertapi(values));
      formik.resetForm();
    },
  });

  return (
    <div>
      <h1>Add Task</h1>
      <form onSubmit={formik.handleSubmit}>
        <Stack
          component="form"
          sx={{
            width: "30ch",
          }}
          spacing={2}
          noValidate
          autoComplete="off"
        >
          <div>
            <label htmlFor="title">Task Title:</label>
            <StyledTextarea
              aria-label="minimum height"
              minRows={2}
              id="title"
              placeholder="task title"
              variant="filled"
              name="title"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title && (
              <div>{formik.errors.title}</div>
            )}
          </div>

          <div>
            <label htmlFor="description">Task Description:</label>
            <StyledTextarea
              aria-label="minimum height"
              minRows={5}
              id="description"
              name="description"
              type="text"
              placeholder="task description"
              variant="filled"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
            {formik.touched.description && formik.errors.description && (
              <div>{formik.errors.description}</div>
            )}
          </div>
        </Stack>
        <button className={styles.btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Todo;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MenuCard from "./MenuCard";
import axios from "axios";
import Layout from "../components/Layout/Layout";
// import logo from "../Components/img/logo.png";
// import Sidebar from "../Components/Navbar/Sidebar";
import { Typography, AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Select from "react-select";
import { Col, Row } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";

// const customStyles = {
//   control: (provided) => ({
//     ...provided,
//     backgroundColor: "#0f3460",
//     color: "white",
//     borderRadius: "5px",
//     border: "none",
//     boxShadow: "none",
//     width: "300px",
//     height: "40px",
//   }),
//   option: (provided, state) => ({
//     ...provided,
//     backgroundColor: state.isSelected ? "#0f3460" : "white",
//     color: state.isSelected ? "white" : "#0f3460",
//     "&:hover": {
//       backgroundColor: "#0f3460",
//       color: "white",
//     },
//   }),
//   singleValue: (provided) => ({
//     ...provided,
//     color: "white",
//   }),
// };

function Menu() {
  // const [item, setItem] = useState("");
  const [menuItem, setMenuItem] = useState([]);
  const [count, setCount] = useState();
  // const [selectcategory, setSelectcategory] = useState("")
  // console.log(selectcategory,"category");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const category = [
    { category: "Veg" },
    { category: "Non Veg" },
    { category: "Breakfast" },
    { category: "Beverages" },
    { category: "Ice Cream" },
  ];
  // console.log(selectedCategory, "veg");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7000/api/adminmenu/getmenu"
        );
        setMenuItem(response.data.menu);
        // Assuming the data is an array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [count]);

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  return (
    <Layout>
      <Autocomplete
        id="country-select-demo"
        sx={{ width: 300, marginLeft: 10, marginTop: 4 }}
        options={category}
        autoHighlight
        onChange={handleCategoryChange}
        getOptionLabel={(option) => option.category}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading="lazy"
              width="20"
              srcSet={`https://flagcdn.com/w40/${option.category.toLowerCase()}.png 2x`}
              src={`https://flagcdn.com/w20/${option.category.toLowerCase()}.png`}
              alt=""
            />
            {option.category}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a Category"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
      {/* <section className="filter-bar">
        <Container className="filter-bar-contianer">
          <Row className="justify-content-center">
            <Col md={8}>
              <Select options={category}
                defaultValue={{ value: "", label: "Filter By Category" }}
                styles={customStyles}
                onChange={(handleCategoryChange)} />
            </Col>
           
          </Row>
        </Container>

      </section> */}

      <Container>
        <Main>
          {menuItem.length === 0 && (
            <h1 className="no-items product">No Items are add in Cart</h1>
          )}
          {menuItem
            .filter(
              (menu) =>
                !selectedCategory || menu.category === selectedCategory.category
            )
            .map((menu) => (
              <MenuCard
                key={menu._id}
                id={menu._id}
                imageProfile={menu.imageProfile}
                price={menu.price}
                category={menu.category}
                title={menu.title}
                foodID={menu.foodID}
              />
            ))}
        </Main>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  margin-top: 7vh;
  margin-left: 10px;
  width: 100%;
`;

const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;

  grid-auto-rows: 420px;
  grid-template-columns: repeat(5, 250px);
  grid-gap: 40px;
`;

export default Menu;

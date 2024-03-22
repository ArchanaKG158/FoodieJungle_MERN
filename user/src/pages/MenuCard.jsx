import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 5,
  borderRadius: "25px",
};

function MenuCard({ title, imageProfile, price, category, id, foodID }) {
  // const [menuItem, setMenuItem] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [show, setshow] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    // if (localStorage.getItem("token") == null) {
    //   navigate("/menu");
    // } else {
    setToken(JSON.parse(localStorage.getItem("token")));
    setUser(JSON.parse(localStorage.getItem("user")));
    //  }
  }, []);

  const addToCart = () => {
    var username = user.name;
    var usergmail = user.email;
    let cart = JSON.parse(localStorage.getItem("cart"));

    let productdata = [
      {
        title,
        price,
        category,
        id,
        foodID,
        imageProfile,
        count,
        username,
        usergmail,
      },
    ];
    console.log(productdata, "product data");
    if (cart) {
      // alert('1 item is already added to cart')
      let itemincart = cart.find((item) => item.productdata.foodID === foodID);

      if (itemincart) {
        cart = cart.map((item) => {
          if (item.productdata.foodID === foodID) {
            return {
              ...item,
              quantity: item.quantity + count,
            };
          } else {
            return item;
          }
        });
        localStorage.setItem("cart", JSON.stringify(cart));
      } else {
        cart = [
          ...cart,
          {
            productdata,
            quantity: count,
          },
        ];
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    } else {
      cart = [
        {
          productdata,
          quantity: count,
        },
      ];

      // console.log(cart)
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    // setreloadnavbar(!reloadnavbar)
    window.location.reload();
    // toast.success('Item added to cart')

    axios
      .post("http://localhost:7000/api/usercart/addcart", {
        title,
        price,
        category,
        id,
        foodID,
        imageProfile,
        count,
        username,
        usergmail,
      })
      .then(async (response) => {})
      .catch((error) => {
        alert(error.message);
      });
  };

  const [selectedItem, setSelectedItem] = useState(null);
  const [count, setCount] = useState(1);

  const handleOpen = (item) => {
    setOpen(true);
    setSelectedItem(item);
    console.log(item._id);
  };

  const handleClose = () => setOpen(false);

  const handlequantity = (event) => {
    setCount(event.target.value);
  };

  return (
    <>
      <Container>
        <Image>
          <img src={`http://localhost:7000/uploads/${imageProfile}`} alt="" />
        </Image>
        <Description>
          <h5>
            {title} ---- ₹ {price * count}
          </h5>
          <Category>{category}</Category>

          <div className="addbtn">
            <div style={{ display: "flex", marginTop: "10px" }}>
              <button
                onClick={() => {
                  if (count > 1) {
                    setCount(count - 1);
                  }
                }}
              >
                -
              </button>
              <p onChange={handlequantity}>{count}</p>
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>
          </div>
        </Description>
        <Button
          size="small"
          variant="contained"
          sx={{ bgcolor: "green", margin: "12px" }}
          onClick={addToCart}
          startIcon={<ShoppingCartIcon />}
        >
          Add to Cart
        </Button>
      </Container>
    </>
  );
}

const Category = styled.div`
  background-color: #fa89;
  width: 65%;
  padding: 5px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 3px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  background-color: #fff;
  z-index: 10;
  border: 1px solid purple;
  border-radius: 10px;

  &:hover {
    box-shadow: rgba(1, 1, 1, 1) 0 15px 15px;
    transform: translateY(-4px);
  }
`;

const Image = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin-top: 8px;
  flex: 0.3;

  img {
    width: 230px;
    height: 230px;
  }
`;
const Description = styled.div`
  width: 90%;
  margin: 10px;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 0.7;

  h5 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 12px;
  }

  p {
    font-size: 20px;
  }

  button {
    width: 15%;
    height: 20px;
    border: 1px solid green;
    flex-direction: row;
    cursor: pointer;
    justify-content: space-evenly;
    margin: auto 5px;
    position: relative;

    &:hover {
      color: #fff;
      background-color: green;
      box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
      transform: translateY(-2px);
    }
  }
`;

export default MenuCard;

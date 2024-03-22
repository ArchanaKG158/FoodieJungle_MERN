import { createSlice } from "@reduxjs/toolkit";

// const [token, setToken] = useState(null);
// const [cartList, setCartList] = useState(null);

// useEffect(() => {
 
//   setToken(JSON.parse(localStorage.getItem("token")));
//   setCartList(JSON.parse(localStorage.getItem("cartList")));
  
// }, []);


const storedCartList =
  localStorage.getItem("cartList") !== null
    ? JSON.parse(localStorage.getItem("cartList"))
    : [];

const initialState = {
  cartList: storedCartList,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productToAdd = action.payload.title;
      const price = action.payload.price;
      const category = action.payload.category;
      const id = action.payload.id;
      const imageProfile = action.payload.imageProfile;
      const quantity = action.payload.quantity;
      const username = action.payload.username;
      const usergmail = action.payload.usergmail;
      const productExit = state.cartList.find(
        (item) => item.id === productToAdd.id
      );
      // if (productExit) {
      //   state.cartList = state.cartList.map((item) =>
      //     item.id === action.payload.product.id
      //       ? { ...productExit, qty: productExit.qty + action.payload.num }
      //       : item
      //   );
      // } else {
      //   state.cartList.push({ ...productToAdd, qty: quantity });
      // }
    },
    decreaseQty: (state, action) => {
      const productTodecreaseQnty = action.payload;
      const productExit = state.cartList.find(
        (item) => item.id === productTodecreaseQnty.id
      );
      if (productExit.qty === 1) {
        state.cartList = state.cartList.filter(
          (item) => item.id !== productExit.id
        );
      } else {
        state.cartList = state.cartList.map((item) =>
          item.id === productExit.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        );
      }
    },
    deleteProduct: (state, action) => {
      const productToDelete = action.payload;
      state.cartList = state.cartList.filter(
        (item) => item.id !== productToDelete.id
      );
    },
  },
});

export const cartMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type?.startsWith("cart/")) {
    const cartList = store.getState().cart.cartList;
    localStorage.setItem("cartList", JSON.stringify(cartList));
  }
  return result;
};

export const { addToCart, decreaseQty, deleteProduct } = cartSlice.actions;

export default cartSlice.reducer;

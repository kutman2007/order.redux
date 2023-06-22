import React from "react";
import { data } from "../../data";
import { useDispatch, useSelector } from "react-redux";
import { add_order, delete_order } from "../../store/actions";
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Tooltip from '@mui/material/Tooltip';
import Skeleton from '@mui/material/Skeleton';
import ClearIcon from '@mui/icons-material/Clear';



export const OrderBasket = () => {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const handleDelete = ( el,id) => {
    dispatch(delete_order(id));
  };
  return (
    <div style={styles.container}>
      <div style={styles.menuContainer}>
        <h1>Menu</h1>
        <MenuList>
          {data.map((el, id) => {
            return <Tooltip title='добавить заказ'>
   <MenuItem onClick={()=>dispatch(add_order(el))} key={id}>
                {el.title}
                {el.price}
              </MenuItem>
            </Tooltip>
           
            
          })}
        </MenuList>
      </div>
      <div style={styles.orderContainer}>
        <h1>Orders</h1>
        {
          orders.length
        
          ? orders.map((el, id) => {
            return (
              <li key={id}>
                {el.title}
               <b>{el.price} * {el.count} = {el.sum}</b>
              <span>
                <ClearIcon onClick={()=>handleDelete(el,id)}/>
              </span>
              </li>
            );
          })
      :<div>
        <Skeleton>
        </Skeleton>
      </div>
  }
      </div>
    </div>
  );
};

const styles = {
  orderContainer: {
    display: "flex",
    flexDirection: "column",
  },
  menuContainer: {
    with: "50%",
  },
  container:{
    display: "flex",
    gridColumnGap: "50px"
  }
};

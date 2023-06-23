import React from "react";
import { data } from "../../data";
import { useDispatch, useSelector } from "react-redux";
import { add_order, delete_order, increase_quantity, decrease_quantity } from "../../store/actions";
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Tooltip from '@mui/material/Tooltip';
import Skeleton from '@mui/material/Skeleton';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



export const OrderBasket = () => {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const handleDelete = ( el,id) => {
    dispatch(delete_order(id));
  };
  const handleIncreaseQuantity = (el, id) => {
    dispatch(increase_quantity(id));
  };
  
  const handleDecreaseQuantity = (el, id) => {
    dispatch(decrease_quantity(id));
  };
  return (
    <div style={styles.container}>
      <div style={styles.menuContainer}>
        <h1>Menu</h1>
        <MenuList>
          {data.map((el, id) => {
            return <Tooltip title='нажмите чтобы узнать цену'>
   <MenuItem onClick={()=>dispatch(add_order(el))} key={id}>
               <img src={el.img} alt="" />
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
                <span className="food">{el.title}</span>
                <RemoveIcon className="plus" onClick={() => handleDecreaseQuantity(el, id)} />
               <b> {el.sum}</b>
               <AddIcon className="plus" onClick={() => handleIncreaseQuantity(el, id)} />
              <span>
                <ClearIcon className="clear" onClick={()=>handleDelete(el,id)}/>
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
    width: "50%",
  },
  container:{
    display: "flex",
    gridColumnGap: "50px"
  }
};

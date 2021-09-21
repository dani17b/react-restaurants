
import React, { useEffect, useMemo, useState } from 'react';
import { getMenus } from "./actions";
import { RestaurantCard } from './components/restaurantCard/RestaurantCard';
import "./restaurantsList.css";

/* const RestaurantsItems = (props) => {
  return (
    
  )
} */

export const RestaurantsList = () => {

  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const [count, setCount] = useState(0);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    getMenus().then(menusResponse => {
      setMenus(menusResponse);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (reload) {
      setMenus([]);
      getMenus().then(menusResponse => {
        setMenus(menusResponse);
        setLoading(false);
        setReload(false);
      });
    }
  }, [reload]);

  console.log("Render RestaurantsList : ", reload);

  const Items = React.memo(() => <>
    {menus.map(menuItem =>
      <RestaurantCard restaurant={menuItem} key={menuItem.id} />
    )}
  </>, [menus]);

  return (
    <>
      <div id="header">
        <span className="logo"></span>
        <span className="title">Inicio</span>
      </div>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>Add count</button>
      </div>
      <button onClick={() => setReload(true)}>Reload</button>
      <div className="restaurants">
        {loading &&
          <div className="loading">Cargando</div>
        }
        {!loading && <Items />}
      </div>
    </>
  );
};

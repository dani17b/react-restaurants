
import React, { useEffect, useState } from 'react';
import { getMenus } from "./actions";
import "./restaurantsList.css";

export const RestaurantsList = () => {

  const [loding, setLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    getMenus().then(menusResponse => {
      setMenus(menusResponse);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if(reload){
      setMenus([]);
      getMenus().then(menusResponse => {
        setMenus(menusResponse);
        setLoading(false);
        setReload(false);
      });
    }
  }, [reload]);

  console.log("Render RestaurantsList : ", reload);

  return (
    <>
      <div id="header">
        <span className="logo"></span>
        <span className="title">Inicio</span>
      </div>
      <button onClick={() => setReload(true)}>Reload</button>
      <div className="restaurants">
        {loding && 
          <div className="loading">Cargando</div>
        }
        {!loding && menus.map(menuItem =>
          <div className="restaurant-card loading" key={menuItem.id}>
            <div>Carrusel</div>
            <form>
              <div>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      onChange={() => console.log("make order")}
                    />
                    <span>Nombre plato</span>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <span>Nombre plato 2</span>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <span>Nombre plato 3</span>
                  </li>
                </ul>
              </div>
              <div className="restaurant-info">
                <span>{menuItem.name}</span>
                <span>Teléfono {menuItem.phone}</span>
                {menuItem.onlineEnabled &&
                  <button>Pedir</button>
                }
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

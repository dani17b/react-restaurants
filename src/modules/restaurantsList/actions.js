import menus from './restaurantsMenus.json';

export const getMenus = () => {
    console.log("Get menus");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(menus);
        }, 5000);
    });
}
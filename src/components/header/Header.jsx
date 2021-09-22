import "./header.css";

export const Header = () => {
    return (
        <div className="header">
            <span className="logo"></span>
            <div className="user">Hola xxxx</div>
            <div className="menu">
                <div className="menu-item">
                    <span className="icon"></span>
                    <span className="title">Inicio</span>
                </div>
                <div className="menu-item">
                    <span className="icon"></span>
                    <span className="title">Gestion</span>
                </div>
            </div>
        </div>
    )
}
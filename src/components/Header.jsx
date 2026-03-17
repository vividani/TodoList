import "./Header.css";

import { useEffect, useState } from "react";

const Header = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    const today = new Date();
    const day = ['일', '월', '화', '수', '목', '금', '토'];

    return(
    <div className="Header">
        <button onClick={toggleTheme}>
            {theme === "light" ? "🌙 다크모드" : "☀️ 라이트모드"}
        </button>
        <h3>Today is...</h3>
        <h1>{today.getFullYear() + '년 ' + (today.getMonth()+1) + '월 ' + today.getDate() + '일 ' + day[today.getDay()] + '요일'}</h1>
    </div>
    );
};

export default Header;
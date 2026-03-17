import "./Header.css";

const Header = () => {
    const today = new Date();
    const day = ['일', '월', '화', '수', '목', '금', '토'];

    return(
    <div className="Header">
        <h3>Today is</h3>
        <h1>{today.getFullYear() + '년' + (today.getMonth()+1) + '월' + today.getDate() + '일' + day[today.getDay()] + '요일'}</h1>
    </div>
    );
};

export default Header;
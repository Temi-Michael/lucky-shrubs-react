import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Footer() {

    function Time() {
        const [time, setTime] = useState(new Date().toLocaleTimeString());
    
        useEffect(() => {
            const intervalId = setInterval(() => {
                setTime(new Date().toLocaleTimeString());
            }, 1000); // Update every second
    
            return () => {
                clearInterval(intervalId);
            };
        }, []);
    
        return (
            <div>
                <p>{time}</p>
            </div>
        );
    }

    const style = {
        textAlign : "center",
    }

    return (
        <footer>
            <div>
                <p>©️ Lucky Shrubs - 2024</p>
            </div>
            <div style={style}>
                <p>Temi michael</p>
                <Time />
            </div>
            <div>
                <Link to=''>Privacy - Terms</Link>
            </div>
        </footer>
    )
}

export default Footer;
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
    const handleVideoEnd = () => {
        const video = document.getElementById("myVideo");
        rewind(1, video);
    }

    return (
        <div className="hero">
            <video
                autoPlay
                loop
                id="myVideo"
                muted
                playsInline
                className="background-vdo"
            >
                <source src="/farm-vdo.mp4" type="video/mp4"></source>
            </video>
            <nav>
                <Link className="logo" href="/">
                    <img src="/Flogo.jpg" alt="Jamin" width="120px" height="100px" />
                </Link>
            </nav>
            <div className="content">
                <h1>Something</h1>
                <Link href="/">
                    <span>Register Now</span>
                </Link>
            </div>
        </div>
    )
}

export default HomePage
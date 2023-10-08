import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <div>
            <h1>Logout</h1>

            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Logout;
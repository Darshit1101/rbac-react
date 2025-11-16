import { useContext } from "react";
import { AuthContext } from '../../context/Auth'

const dashboard = () => {
    const { user } = useContext(AuthContext);
    console.log("admin==>", user);

    return (
        <div>admin-ashboard</div>
    )
}

export default dashboard
import { useContext } from "react";
import { AuthContext } from '../../context/Auth'

const dashboard = () => {
    const { user } = useContext(AuthContext);
    console.log("user from context==>", user);

    return (
        <div>admin-ashboard</div>
    )
}

export default dashboard
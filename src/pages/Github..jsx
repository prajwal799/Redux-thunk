import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import GithubInput from "./GithubInput";
import GithubList from "./GithubList";

const Github = () => {
    const login = useSelector((state) => state.auth)
    return login ?  (
        <>
        <GithubInput/>
        <GithubList />
        </>
    ) : <Navigate to="/login"></Navigate>
}
export default Github;
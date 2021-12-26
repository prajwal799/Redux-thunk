import {useSelector} from "react-redux";
 
const GithubList = () => {
    const list =  useSelector((state) => state.githubopen);
    const items = useSelector((state) => state.github);
    

    return list ?   (items.github.items.map((item) => (
        <h2 key={item.id}>{item.login}</h2>
    )) ) : <h3>Search by name</h3>
    
}
export default GithubList;
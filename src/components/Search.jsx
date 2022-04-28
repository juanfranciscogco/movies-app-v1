import React from "react";
import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export function Search() {
  const query = useQuery();
  const search = query.get("search");

  // const [searchText, setSearchText] = useState(""); // useState is hook
  const navigate = useNavigate();

  // useEffect(() => {
  //   setSearchText(search || "");
  // }, [search]);

  const handleSubmit = (env) => {
    env.preventDefault();
    // navigate("/?search=" + searchText);
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          //value={searchText}
          value={search ? search : ""}
          placeholder="Title"
          aria-label="Search movies"
          onChange={(env) => {
            const value = env.target.value;
            // setSearchText(value);
            navigate("/?search=" + value);
          }}
        />
        {/* <button className={styles.searchButton} type="submit"> */}
        <FaSearch size={20} color="black" className={styles.searchButton} />
        {/* </button> */}
      </div>
    </form>
  );
}

// react
import { useState, useEffect } from "react";
//components
import SearchBarInput from "./common/SearchBarInput";
import ScrollBox from "./ScrollBox";
//css
import "../style/SearchBar.css";
//services
import { getUsersByTxt, getAllusers } from "../services/usersService";


export default function SearchBar() {
  const [inputTxt, setInputTxt] = useState("");
  const [usersData, setUsersData] = useState([]);
  const [inFocus, setInFocus] = useState(false);

  /* ------ Fix this function ----- */
  useEffect(() => {
      const data = getAllusers();
      setUsersData(data);
  });

  const getData = async (userTxt: string) => {
    /* ------ ADD YOUR CODE HERE ----- */
  };

  return (
    <div className="Main">
      <div className="searchInput">
        <SearchBarInput
          getData={getData}
          setInputTxt={setInputTxt}
          setInFocus={setInFocus}
        />
      </div>
      <div className="scroolable">
        <ScrollBox
          searchedTxt={inputTxt}
          usersData={usersData}
          display={inFocus}
        />
      </div>
    </div>
  );
}

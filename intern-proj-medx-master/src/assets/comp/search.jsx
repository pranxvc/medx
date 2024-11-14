import MaterialIcon, { colorPalette } from "material-icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [q, setq] = useState("");

  function nav(q) {
    navigate("/search/" + q);
  }

  return (
    <div className="mx-[29%] my-5 drop-shadow-lg">
      <div className=" flex ">
        <input
          type={"text"}
          onChange={(e) => {
            setq(e.target.value);
          }}
          placeholder={"search your meds"}
          className=" h-14 w-4/5 border-1 border-black rounded-[50px] text-center "
        ></input>
        <div
          className="border-1 border-black border-solid bg-black text-white h-14 w-24 ml-2 rounded-[50px] text-center 
                hover:bg-emerald-100 hover:text-black overflow-hidden
                "
        >
          <a
            icon="search"
            className="order-last relative top-3"
            onClick={() => {
              nav(q);
            }}
          >
            Search
          </a>
        </div>
      </div>
    </div>
  );
}

export default Search;

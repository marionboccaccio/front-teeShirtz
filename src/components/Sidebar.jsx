import React from "react";

function Sidebar() {
  return (
    <div>
      <form>
        <button>Reset filters</button>

        <div className="line"> </div>
        <label>
          {" "}
          Price max
          <br />
          <input type="range" min={0} max="200" />
        </label>
        <div className="line"> </div>
        <label>
          {" "}
          Brands
          <br />
          <input type="checkbox" />
        </label>
        <br />
        <div className="line"> </div>
        <label>Colors</label>
      </form>
    </div>
  );
}

export default Sidebar;

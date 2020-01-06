import React from "react";

function Sidebar() {
  return (
    <div>
      <form className = "sidebar">
        <button> Reset filters </button>

        <label>
          <h4>Price max</h4>
          <br />
          <input type="range" min={0} max="200" />
        </label>

        <label>
          <h4>Brands</h4>
          <br />
          <input type="checkbox" />
        </label>
        <br />

        <label>Colors</label>
      </form>
    </div>
  );
}

export default Sidebar;

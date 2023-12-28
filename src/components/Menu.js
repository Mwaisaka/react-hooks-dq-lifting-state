import React from "react";

function Menu({ darkMode, onChangeDarkMode }) {
  return (
    <div className="menu item">
      <div className="ui toggle checkbox">
        <input
          type="checkbox"
          name="public"
          checked={darkMode? true : false}
          onChange={(e) => onChangeDarkMode(e.target.checked)}
        />
        <label>ToggleLight/Dark Mode</label>
      </div>
    </div>
  );
}

export default Menu;

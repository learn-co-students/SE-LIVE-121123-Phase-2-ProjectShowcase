import { useState } from "react";

const Header = () => {
  const [isDarkMode, setisDarkMode] = useState(true); // this is a common naming convention for boolean values; booleans are often used in toggles
  // console.log("🚀 ~ Header ~ isDarkMode:", isDarkMode)

  function handleToggleDarkMode() {
    console.log("clicked");
    // let newMode
    // if (isDarkMode === true){ // conditional blocks which assign a boolean value are extra, since the condition itself must resolve to a truthy/falsy value
    //   newMode = false
    // } else {
    //   newMode = true
    // }
    setisDarkMode(!isDarkMode); // the bang (!) operator is often used this way in a toggle fn
  }

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <nav>
        <button onClick={handleToggleDarkMode}>
          {
            isDarkMode
              ? "Light Mode"
              : "Dark Mode" /* we'll be seeing more ternary operators in React! */
          }
        </button>
      </nav>
    </header>
  );
};

export default Header;

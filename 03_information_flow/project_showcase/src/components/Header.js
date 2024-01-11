const Header = ({ isDarkMode, onToggleDarkMode }) => {
  // const [isDarkMode, setIsDarkMode] = useState(true); // lifted up to App

  // function toggleDarkMode(){
  //   setIsDarkMode(isDarkMode => !isDarkMode) // also lifted up to App
  // }

  const handleToggleDarkMode = () => {
    onToggleDarkMode(); // in this case could put the callback directly into the event listener
  };

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleToggleDarkMode}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;

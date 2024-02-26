const Header = () => {
  return (
    <nav className="flex py-7 px-12 bg-red-600">
      <div>logo</div>
      <ul className="flex ml-auto list-none">
        <li className="mx-2">About</li>
        <li className="mx-2">Experience</li>
        <li className="mx-2">Work</li>
        <li className="mx-2">Contact</li>
      </ul>
      <button>resume</button>
    </nav>
  );
};

export default Header;

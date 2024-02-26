import ResumeButton from "../ResumeButton";

const Header = () => {
  return (
    <nav className="flex py-12 px-12 justify-center items-center">
      <div>logo</div>
      <ul className="flex ml-auto list-none mr-5">
        <li className="mx-5">
          <span className="text-purple-400">01.</span> About
        </li>
        <li className="mx-5">
          <span className="text-purple-400">02.</span> Experience
        </li>
        <li className="mx-5">
          <span className="text-purple-400">03.</span> Work
        </li>
        <li className="mx-5">
          <span className="text-purple-400">04.</span> Contact
        </li>
      </ul>
      <ResumeButton />
    </nav>
  );
};

export default Header;

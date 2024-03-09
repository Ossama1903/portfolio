import Link from "next/link";
import ResumeButton from "../ResumeButton";

const Header = () => {
  return (
    <nav className="flex py-8 justify-center items-center fixed bg-inherit w-full opacity-95 shadow-2xl z-50">
      <div className="ml-10">logo</div>
      <ul className="flex ml-auto list-none mr-5">
        <li className="mx-5 opacity-100">
          <Link href="#aboutMe" className="no-underline text-white">
            <span className="text-purple-400">01.</span> About
          </Link>
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
      <div className="mr-10">
        <ResumeButton />
      </div>
    </nav>
  );
};

export default Header;

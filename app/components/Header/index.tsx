import Link from "next/link";
import ResumeButton from "../ResumeButton";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="flex py-8 justify-center items-center fixed bg-inherit w-full opacity-95 shadow-2xl z-50">
      <div className="ml-10">
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={25} height={25} />
        </Link>
      </div>
      <ul className="flex ml-auto list-none mr-5">
        <li className="mx-5 opacity-100">
          <Link href="#AboutMe" className="no-underline text-white text-sm">
            <span className="text-purple-400">01.</span> About
          </Link>
        </li>
        <li className="mx-5">
          <Link href="#Experience" className="no-underline text-white text-sm">
            <span className="text-purple-400">02.</span> Experience
          </Link>
        </li>
        <li className="mx-5  text-sm">
          <span className="text-purple-400">03.</span> Work
        </li>
        <li className="mx-5  text-sm">
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

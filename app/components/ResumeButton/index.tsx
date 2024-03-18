import Button from "../Button";
import Link from "next/link";

const ResumeButton = () => {
  return (
    <Link
      href="/documents/resume.pdf"
      download="Ossama's resume"
      target="_blank"
    >
      <Button className="transition ease-in-out delay-150 py-2 px-5 cursor-pointer hover:bg-purple-400 hover:text-white">Resume</Button>
    </Link>
  );
};

export default ResumeButton;

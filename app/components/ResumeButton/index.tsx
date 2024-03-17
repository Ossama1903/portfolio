import Button from "../Button";
import Link from "next/link";

const ResumeButton = () => {
  return (
    <Link
      href="/documents/resume.pdf"
      download="Ossama's resume"
      target="_blank"
    >
      <Button className="py-2 px-5">Resume</Button>
    </Link>
  );
};

export default ResumeButton;

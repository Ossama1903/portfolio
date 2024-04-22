import Button from "../Button";
import Link from "next/link";
import fonts from "../../fonts";
const ResumeButton = () => {
  return (
    <Link
      href="/documents/resume.pdf"
      download="Ossama's resume"
      target="_blank"
    >
      <Button
        className={`${fonts.chilanka} cursor-pointer pt-1 px-3 transition hover:-translate-x-1 hover:-translate-y-1 ease-in-out hover:shadow-[2px_2px_3px_3px_rgba(192,132,252)] text-white border-solid border-[1px] border-purple-400`}
      >
        Résumé
      </Button>
    </Link>
  );
};

export default ResumeButton;

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaThreads,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className={"bg-stone-100 px-6 py-6"}>
      <div
        className={
          "max-w-screen-lg mx-auto flex flex-wrap gap-y-2 items-center justify-between"
        }
      >
        <p className={"text-sm"}>counsel © 2024–2025</p>
        <div className={"flex items-center gap-x-6"}>
          <FaXTwitter size={18} />
          <FaInstagram size={18} />
          <FaThreads size={18} />
          <FaLinkedin size={18} />
          <FaFacebookF size={18} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

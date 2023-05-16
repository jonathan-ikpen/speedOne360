const Footer = () => {
  return (
    <footer className="mt-20 mx-auto p-6 pb-12 w-full flex flex-col justify-center items-center text-[16px] text-[#89949e] max-w-[400px]">
      <div>
        <span className="font-bold text-[14px]">Socials:</span>{" "}
        <a
          href="https://t.me/SpeedOne360"
          className="underline hover:no-underline text-[14px]"
          target="_blank"
        >
          Telegram
        </a>
      </div>
      <br />
      <div className="text-center text-[12px]">
        Merb Resources Int'l Ltd Copyright &copy; 2022-2023. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;

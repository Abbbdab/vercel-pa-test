import { useTheme } from "next-themes";

const Footer = () => {
  const { theme, setTheme } = useTheme();

  //-- Methods
  const toggleTheme = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");
  return (
    <footer className="  bg-zinc-50 dark:bg-zinc-900 fixed w-full bottom-0 border-t-2 border-zinc-300 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto p-4 flex items-center justify-between">
        <p className="text-xs xl:text-sm w-4/5 text-zinc-600">
          Built with Next.js, TailwindCSS. Deployed on Vercel.
        </p>
        <div>
          <button
            className=" bg-zinc-300 dark:bg-zinc-700 py-1 px-2 rounded text-zinc-600 dark:text-zinc-300"
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <i className="fa-solid fa-moon"></i>
            ) : (
              <i className="fa-solid fa-sun"></i>
            )}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

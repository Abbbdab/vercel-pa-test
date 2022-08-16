const Home = () => {
  return (
    <div>
      <div className=" lg:mt-24">
        <div className=" bg-gradient-to-tr from-blue-600 to-red-500 animate-text text-transparent bg-clip-text py-2 md:flex-1">
          <h1 className=" font-black text-center text-[20vw] md:text-[10vw] lg:text-[100px] leading-none  xl:w-full mx-auto">
            Develop. Preview. Assess.
          </h1>
        </div>
      </div>
      <div className="py-3">
        <p className="text-zinc-700 dark:text-zinc-400">
          The site is deployed as per the assignment instructions for
          Vercel&apos;s Product Advocate role, APAC. The content on the site is
          static, and the repo structure has minor changes to the default
          configuration provided by Next.js.
        </p>
        <h3 className=" font-semibold mt-3 md:mt-6 text-zinc-800 dark:text-zinc-200">
          🌎 Site Structure
        </h3>
        <p className="text-zinc-700 dark:text-zinc-400">
          There are{" "}
          <code className="font-mono text-purple-600 dark:text-purple-400 text-sm ">
            6
          </code>{" "}
          pages in total on the site. The navbar has links to the respective
          assignment questions, and the 6th page{" "}
          <code className="font-mono text-purple-600 dark:text-purple-400 text-sm ">
            `redirects`
          </code>{" "}
          to Vercel at{" "}
          <code className="font-mono text-purple-600 dark:text-purple-400 text-sm ">
            `/onwards-and-upwards`
          </code>
          . There is also a{" "}
          <code className="font-mono text-purple-600 dark:text-purple-400 text-sm ">
            `custom 404`
          </code>{" "}
          page, please feel free to test it.
        </p>
        <h3 className=" font-semibold mt-3 md:mt-6 text-zinc-800 dark:text-zinc-200">
          📂 Repo Folder Structure
        </h3>
        <p className="text-zinc-700 dark:text-zinc-400">
          I like to have order and structure throughout my code / repos. I
          always use the{" "}
          <code className="font-mono text-purple-600 dark:text-purple-400 text-sm ">
            `src`
          </code>
          folder to store pages, components, assets, utils, and store folders.
        </p>

        <p className="text-zinc-700 dark:text-zinc-400">
          I am not fond of long links while importing components, and hence I
          use absolute imports provided by Next.js in
          <code className="font-mono text-purple-600 dark:text-purple-400 text-sm ">
            `jsconfig.json`
          </code>{" "}
          file.
        </p>

        <h3 className=" font-semibold mt-3 md:mt-6 text-zinc-800 dark:text-zinc-200">
          ℹ️ And..
        </h3>
        <p className="text-zinc-700 dark:text-zinc-400">
          Since this is an assessment/assignment, I have taken the liberty to
          change the hero heading to say "Assess". Oh, and as I was stretched
          thin for the time I went with the basic FontAwesome icons. I have also
          used Mac emojis in some places.
        </p>
      </div>
    </div>
  );
};
export default Home;

const ProductAdvocate = () => {
  return (
    <div>
      <h1 className="font-black text-zinc-800 dark:text-zinc-300 text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8">
        Vercel Product Advocate
      </h1>
      <p className="text-zinc-700 dark:text-zinc-400">
        I have created a list of things I would be most and least interested in.
        I did go over the 3 option limit, I hope that&apos;s fine. I have put a
        brief explanation behind every choice.
      </p>
      <h3 className=" font-semibold my-3 text-zinc-800 dark:text-zinc-200 text-xl">
        Things I would be most interested in:
      </h3>
      <p className="md:px-6">
        <ul>
          <li className="my-2 p-2">
            <b className="text-base text-zinc-800 dark:text-zinc-300">
              Hop on a Zoom call for a product demo
            </b>
            <p className="text-sm lg:text-base text-zinc-700 dark:text-zinc-400">
              As a product advocate, I think it would be pertinent if I jumped
              on to call with potential customers and show them everything
              possible with Next.js and Vercel. I do know Next.js and the way it
              works under the hood, and it would be exciting to explain to
              potential clients.
            </p>
          </li>
          <li className="my-2 p-2">
            <b className="text-base text-zinc-800 dark:text-zinc-300">
              Work with the Team to make sure the email tone is consistent with
              the Vercel brand
            </b>
            <p className="text-sm lg:text-base text-zinc-700 dark:text-zinc-400">
              Coming from a design and business background, I am painfully
              meticulous about brand identity, the tone of addressing customers,
              and the CX. I have spent countless hours creating a language
              framework for our customer-facing staff at my current employment.
              The framework included all the possible scenarios, from answering
              even the most naive customer queries professionally to diffusing
              and handling frustrated, angry customers.
            </p>
          </li>
          <li className="my-2 p-2">
            <b className="text-base text-zinc-800 dark:text-zinc-300">
              Find ways to continually improve the day-to-day workflow for
              converting leads
            </b>
            <p className="text-sm lg:text-base text-zinc-700 dark:text-zinc-400">
              Nothing is ever perfect, and there is no time to settle. We are
              wasting time if we are not constantly refining our practices,
              pushing the envelope, and challenging the status quo. Processes
              and workflows should be perpetually improved. Period.
            </p>
          </li>
          <li className="my-2 p-2">
            <b className="text-base text-zinc-800 dark:text-zinc-300">
              Attend weekly enablement meetings to level up your product and
              sales knowledge
            </b>
            <p className="text-sm lg:text-base text-zinc-700 dark:text-zinc-400">
              See pt. 3 👆.
            </p>
          </li>
        </ul>
      </p>
      <h3 className=" font-semibold my-3 text-zinc-800 dark:text-zinc-200 text-xl">
        Things I would be least interested in:
      </h3>
      <p className="md:px-6">
        <ul>
          <li className="my-2 p-2">
            <b className="text-base text-zinc-800 dark:text-zinc-300">
              Organize, Schedule & book meetings for Account Executives with
              prospects
            </b>
            <p className="text-sm lg:text-base text-zinc-700 dark:text-zinc-400">
              I just can&apos;t 😬
            </p>
          </li>
          <li className="my-2 p-2">
            <b className="text-base text-zinc-800 dark:text-zinc-300">
              Empathize with customers
            </b>
            <p className="text-sm lg:text-base text-zinc-700 dark:text-zinc-400">
              I have tried to empathize with customers at my current job, and I
              realized that it limits my objectivity to the situation. As a PM /
              PA I am not only thinking of customers, but the business and the
              business interests too. <br />
              <span className=" italic">
                Objectivity is a super power and should always be in its purest
                form.
              </span>
            </p>
          </li>
          <li className="my-2 p-2">
            <b className="text-base text-zinc-800 dark:text-zinc-300">
              Evaluate OSS sponsorship applications
            </b>
            <p className="text-sm lg:text-base text-zinc-700 dark:text-zinc-400">
              I code for fun in my free time and I use a lot of open-source
              libraries and plugins. As explained earlier, I don't want anything
              affecting my objectivity, and I certainly do not want to show
              leniency towards a project/plugin/framework I like.
            </p>
          </li>
        </ul>
      </p>
    </div>
  );
};

export default ProductAdvocate;

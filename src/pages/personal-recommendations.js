const PersonalRecommendations = () => {
  return (
    <div>
      <h1 className="font-black text-zinc-800 dark:text-zinc-300 text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8">
        Personal Recommendations
      </h1>
      <div>
        <p className="md:px-6">
          <ul>
            <li className="my-2 p-2">
              <b className="text-base text-zinc-800 dark:text-zinc-300">
                A Mom and Pop Business
              </b>
              <p className="text-sm lg:text-base text-zinc-700 dark:text-zinc-400">
                A mom-and-pop business is going to be on the smaller side of the
                scale. A business that size will need to generate all the
                possible leads they can. I'd value a platform that ensures
                proper content indexing to maximize SEO. It should also play
                nicely with Google Ads and Analytics. Most importantly, a
                business that size tends to be reluctant to spend 'extra' money,
                so the platform pricing will have to be reasonable, as well as
                it should justify the pricing - features ratio.
              </p>
            </li>
            <li className="my-2 p-2">
              <b className="text-base text-zinc-800 dark:text-zinc-300">
                An NFT
              </b>
              <p className="text-sm lg:text-base text-zinc-700 dark:text-zinc-400">
                All aboard the NFT hype train! 🚂 <br />
                When we're talking NFTs we're talking money. There will be a lot
                of crypto/cash transactions originating to and from the
                platform. Security and reliability will be the first and
                foremost priority. The Platform must be protected against DDoS,
                and MITM attacks. NFTs also mean fetching, rendering, storing a
                lot of media, and fluctuating traffic in case of auctions, so
                the platform should be able to scale up based on the
                demand/traffic.
              </p>
            </li>
            <li className="my-2 p-2">
              <b className="text-base text-zinc-800 dark:text-zinc-300">
                Marketing Page for Nintendo
              </b>
              <p className="text-sm lg:text-base text-zinc-700 dark:text-zinc-400">
                Two words, edge network! The marketing site will have visitors
                from around the world, and the only way to ensure the best
                performance is by serving the marketing site via Edge servers.
                The platform will also need to be scalable and robust enough to
                handle millions of Marios and Luigis accessing the site,
                localization, and assuming different regions might have their
                respective development teams, round-the-clock support for those
                teams will be a must.
              </p>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};
export default PersonalRecommendations;

// When it comes to looking for a solution for hosting your Next.js site, what are some of the common things
// you would value as the Engineering Manager for:
// 1. A mom and pop business?
// 2. An NFT?
// 3. A Marketing Page for a large corporation like Nintendo?

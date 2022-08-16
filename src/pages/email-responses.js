import { useState } from "react";

const EmailResponse = () => {
  const [collapse, setCollapse] = useState(false);

  const toggleCollapse = (val) => {
    if (collapse == val) {
      setCollapse(false);
    } else {
      setCollapse(val);
    }
  };

  return (
    <div>
      <h1 className="font-black text-zinc-800 dark:text-zinc-300 text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8">
        Email Responses
      </h1>

      <div>
        <h3
          className=" font-semibold mt-3 md:mt-6 text-zinc-800 dark:text-zinc-200 cursor-pointer border-b pb-2 border-b-zinc-600"
          onClick={() => toggleCollapse(1)}
        >
          ◉ Enterprise Sales Enquiry for Barnes and Noble
        </h3>
        <div className={`${collapse === 1 ? "block" : "hidden"} pt-2`}>
          <p className="text-zinc-700 dark:text-zinc-400">
            <span>
              <b className="text-zinc-800 dark:text-zinc-300">To:</b> Joe Fox
            </span>
            <br />
            <span>
              <b className="text-zinc-800 dark:text-zinc-300">Employees:</b>{" "}
              1000+
            </span>
          </p>

          <div>
            <p className="text-zinc-700 dark:text-zinc-400">
              Hi Joe,
              <br />
              <br />I hope you're doing well.
              <br />
              <br />
              Thank you for choosing Next.js! I can positively say Vercel and
              our Enterprise tier would be the most suited for your
              requirements.
              <br />
              <br />
              As Barnes and Nobles offer their services across the globe, I can
              say without making any assumptions that the website observes
              massive traffic every day. Our enterprise tier provides bandwidth,
              build execution, serverless functions, and image optimization
              catered to your very own need.
              <br />
              <br />
              Assuming your developers are located across the globe, and your
              book offerings vary between countries, your teams can rely on
              concurrent builds included with the enterprise tiers. We take user
              security and you will be getting DDoS Protection, custom firewall
              rules, SSO, and 2-factor authentication with the enterprise tier
              saving a lot of extra work for your DevOps and security teams.
              <br />
              <br />
              At Vercel we know migrating, shipping, and hosting products on new
              frameworks can be tedious, and thus one of my colleagues will be
              helping your dev team with the onboarding process. Once we are
              across that, my good friend XYZ will be your dedicated customer
              success engineer for any ongoing support you will need.
              <br />
              <br />
              I have also attached some documents with this email for your
              review. I am happy to provide you with a product demo and walk you
              through Vercel's deployment process. Looking forward to working
              with you.
              <br />
              <br />
              Best, <br />
              Abdullah Khan
            </p>
          </div>
          <small className=" text-zinc-700">
            The above response is written assuming Joe has checked the plans on
            vercel website and needs that little push.
          </small>
        </div>
        {collapse == !1 && (
          <small className=" text-zinc-700">Click heading to expand</small>
        )}
      </div>

      <div>
        <h3
          className=" font-semibold mt-3 md:mt-6 text-zinc-800 dark:text-zinc-200 cursor-pointer border-b pb-2 border-b-zinc-600"
          onClick={() => toggleCollapse(2)}
        >
          ◉ Pro or Enterprise Fit Enquiry
        </h3>
        <div className={`${collapse === 2 ? "block" : "hidden"} pt-2`}>
          <p className="text-zinc-700 dark:text-zinc-400">
            <span>
              <b className="text-zinc-800 dark:text-zinc-300">To:</b> Melissa
              Wright
            </span>
            <br />
            <span>
              <b className="text-zinc-800 dark:text-zinc-300">Employees:</b>{" "}
              10-100
            </span>
          </p>
          <p className="text-zinc-700 dark:text-zinc-400">
            <br />
            Hi Melissa,
            <br />
            <br />I hope you&apos;re doing well.
            <br />
            <br />
            Thank you for considering Vercel!
            <br />
            <br />
            I&apos;d be more than happy to help you evaluate your options.
            <br />
            <br />
            Based on your requirements and team size, I&apos;d suggest moving
            forward with our Pro tier. Opting in for the Enterprise tier at this
            stage might be excessive and overkill for your needs.
            <br />
            <br />
            Moving forward, as your company scales up upgrading your plan to the
            Enterprise tier will be instantaneous and without disruption of
            services. Vercel supports all the leading frameworks and setting up
            your account and mainly deployment should take minutes.
            <br />
            <br />
            I&apos;d also strongly suggest migrating your website to Next.js. I
            can see your current tech stack and yor site is based on React.
            Migrating it to Next.js will be straightforward and achievable well
            within your timeline. Next.js allows you to use Vercel&apos;s edge
            middleware and serverless function to its full extent.
            <br />
            <br />I am happy to set up a meeting with you and your dev team to
            walk you through the migration and deployment process on Vercel.
            <br />
            <br />
            Looking forward to working with you.
            <br />
            <br />
            Regards,
            <br />
            Abdullah Khan
          </p>
          <small className=" text-zinc-700">
            I checked hipcamp's tech stack and they are already using Next.js
            and Vercel as PaaS, so it looks like this question based on actual
            events.
          </small>
        </div>
        {collapse == !2 && (
          <small className=" text-zinc-700">Click heading to expand</small>
        )}
      </div>
    </div>
  );
};

export default EmailResponse;

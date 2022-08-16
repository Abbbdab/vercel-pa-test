import Image from "next/image";
const Custom404 = () => {
  return (
    <div className="">
      <div className=" p-4">
        <div className=" bg-gradient-to-tr from-blue-600 to-red-500 animate-text text-transparent bg-clip-text py-2 md:flex-1">
          <h1 className=" font-black text-center text-9xl leading-none   w-fit mx-auto md:mt-20">
            404.
          </h1>
        </div>
      </div>
      <div className="  mt-6 h-60 md:h-96 relative">
        <Image
          src={"/assets/404.gif"}
          layout="fill"
          className="rounded-lg overflow-hidden"
        />
      </div>
    </div>
  );
};

export default Custom404;

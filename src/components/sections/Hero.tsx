import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center pt-32 pb-20">
      <div className="relative">
        <Image
          src="/images/avatar.jpg"
          alt="avatar"
          width={32}
          height={32}
          className="rounded-full mx-auto shadow-lg"
        />
      </div>
      <h2 className="mt-6 text-lg text-purple-300">
        Hello! I am Ibrahim Memon
      </h2>
      <h1 className="text-3xl md:text-4xl font-bold mt-2">
        A Designer who <br /> Judges a book by its{" "}
        <span className="text-purple-400 underline">cover</span>
      </h1>
      <p className="mt-2 text-sm text-gray-400">
        Because if the cover does not impress you what else can?
      </p>

      <h2 className="mt-8 text-2xl md:text-3xl font-semibold">
        I am a Software Engineer.|
      </h2>
      <p className="mt-2 text-gray-400">
        Currently, I am a Software Engineer at{" "}
        <a
          href="https://facebook.com"
          className="text-blue-400 hover:underline"
        >
          Facebook
        </a>
      </p>

      <p className="mt-4 text-gray-400 max-w-lg">
        A self-taught UI/UX designer, functioning in the industry for 3+ years
        now. I make meaningful and delightful digital products that create an
        equilibrium between user needs and business goals.
      </p>
    </section>
  );
};

export default Hero;

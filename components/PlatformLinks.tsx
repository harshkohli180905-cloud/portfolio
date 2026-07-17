export default function PlatformLinks() {
  const platforms = [
    {
      name: "Behance",
      desc: "Explore my creative projects, posters and visual designs.",
      link: "https://www.behance.net/harshkohlidesigns",
      logo: "Bē",
    },
    {
      name: "Fiverr",
      desc: "Hire me for posters, thumbnails and branding work.",
      link: "https://www.fiverr.com/harshhh_kohli",
      logo: "Fi",
    },
    {
      name: "Pinterest",
      desc: "Discover my visual inspiration and design boards.",
      link: "https://www.pinterest.com/harshkohlidesigns",
      logo: "P",
    },
  ];

  return (
    <section
      id="platforms"
      className="relative overflow-hidden bg-[#050505] px-5 py-20 text-white sm:px-6 lg:px-10"
    >

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[160px]" />


      <div className="relative z-10 mx-auto max-w-7xl">


        {/* Heading */}
        <div className="mb-14 text-center">

          <p className="mb-5 text-xs uppercase tracking-[0.5em] text-red-600">
            Connect With Me
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            My <span className="text-red-600">Platforms</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm text-zinc-400">
            Check out my work, hire me for creative projects,
            or explore more of my designs.
          </p>

        </div>



        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">


          {platforms.map((platform) => (

            <a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
              group relative overflow-hidden rounded-[32px]
              border border-white/10
              bg-zinc-900/80
              p-8
              backdrop-blur-md
              transition-all duration-500
              hover:-translate-y-3
              hover:border-red-600/50
              hover:shadow-[0_0_70px_rgba(220,38,38,0.25)]
              "
            >


              {/* Hover Glow */}
              <div className="
              absolute inset-0
              bg-gradient-to-br
              from-red-600/10
              to-transparent
              opacity-0
              transition duration-500
              group-hover:opacity-100
              " />



              <div className="relative z-10">


                {/* Logo */}
                <div className="
                mb-7 flex h-16 w-16
                items-center justify-center
                rounded-2xl
                bg-red-600/10
                text-2xl
                font-black
                text-red-500
                transition-all duration-500
                group-hover:bg-red-600
                group-hover:text-white
                ">
                  {platform.logo}
                </div>



                <h3 className="text-3xl font-bold">
                  {platform.name}
                </h3>



                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {platform.desc}
                </p>



                <div className="
                mt-8 flex items-center gap-2
                text-sm font-semibold
                text-red-500
                transition
                group-hover:translate-x-2
                ">
                  Visit Profile →
                </div>


              </div>


            </a>

          ))}


        </div>


      </div>


    </section>
  );
}

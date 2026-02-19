import React from "react";
import heroVideo from "@/assets/videos/hero.mp4";
import DoubleBorderView from "@/components/windows-95/layout/DoubleBorderView";

function Main() {
  return (
    <div className="min-h-full w-full">
      <div className="bg-navy-blue w-full py-2.5 text-center text-white">
        <h1 className="text-3xl font-semibold uppercase">
          <span className="inline-block first-letter:text-4xl">Abdur</span>
          &nbsp;
          <span className="inline-block first-letter:text-4xl">Rab</span>
          &nbsp;
          <span className="inline-block first-letter:text-4xl">Khan</span>
          &nbsp;
        </h1>
      </div>

      {/* Add your portfolio content here */}
      <Section title="About Me">
        <div className="flex size-full gap-x-3 px-2">
          <div className="w-4/6">
            <p className="first-letter:text-navy-blue text-sm first-letter:text-2xl first-letter:font-bold">
              Full-stack dev comfortable with React, Next.js, Node, and everything in between. I've
              built UIs in Tailwind, written APIs with Express, worked with both MongoDB and
              Postgres, and yes — I write tests too. Currently exploring React Native. I just like
              building stuff that works.
            </p>
          </div>
          <DoubleBorderView className="p-0">
            <div className="h-72 w-full flex-1">
              <video controls={false} autoPlay loop muted className="size-full object-cover">
                <source src={heroVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </DoubleBorderView>
        </div>
      </Section>

      {/* Showing skills */}
      <Section title="Skills">
        <></>
      </Section>

      {/* Showing projects */}
      <Section title="Projects">
        <></>
      </Section>

      {/* Showing blogs */}
      <Section title="Blogs">
        <></>
      </Section>
    </div>
  );
}

function Section({ children, title }: { children: React.ReactNode; title: string }) {
  const href = `${title.toLowerCase().replaceAll(" ", "-")}`;

  return (
    <section className="size-full">
      <a
        id={href}
        href={"#" + href}
        className="target:text-navy-blue text-xl font-semibold target:underline"
      >
        {title}
      </a>
      <div className="min-h-full w-full">{children}</div>
    </section>
  );
}

export default Main;

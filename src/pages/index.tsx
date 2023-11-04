// pages/index.js
import Head from "next/head";
import Layout from "../components/Layout";
import React, { ReactElement, useEffect, useState } from "react";
import { SeparatorVertical } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
const IndexPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div
        className={`grid grid-cols-10 gap-10 ${
          isVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000 ease-in-out`}
      >
        <div className="col-span-full flex flex-col gap-4">
          <h1 className="text-4xl font-bold mb-4 text-center justify-center ">
            Liam Atkinon Portfolio Website
          </h1>
          <Separator />
          <span>
            I am a 22 year old computer science 1st class graduate, and in an
            attempt to strengthen my Portfolio I have made this website. I am
            interested in all aspects of computer science and have a passion for
            programming. I can program in languages such as Next.js, C#,
            ASP.net, Python, Java, C, C++, PHP, HTML, SQL, JS, POSTGRES just to
            name a few. <br />
            <br />I am currently looking for employment and have relevant
            experience so please do not hesistate to contact me or set me a
            coding task to test my abilities.
          </span>
          <div className="flex justify-center">
            <Image
              src={"/me.jpg"}
              alt={"a picture of myself"}
              height={256}
              width={256}
            />
          </div>
          <Separator />
          <span>
            On a more personal level I'm an avid dog lover and have recently got
            a new puppy, even going as far as to be a major part of the dog
            walking society at my time at university. I also love football and
            am a massive fan of my local team, Crawley Town FC. Noli cedere!
          </span>
        </div>
      </div>
    </>
  );
};

const getLayout = (page: JSX.Element) => {
  return <Layout>{page}</Layout>;
};

IndexPage.getLayout = getLayout;

export default IndexPage;

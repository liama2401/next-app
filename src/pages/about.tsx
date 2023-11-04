import Layout from "@/components/Layout";
import { Separator } from "@/components/ui/separator";
import Head from "next/head";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div
        className={`grid grid-cols-10 gap-10 ${
          isVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000 ease-in-out`}
      >
        <div className="col-span-full flex flex-col gap-4">
          <h1 className="text-4xl font-bold mb-4 text-center justify-center ">
            About Me
          </h1>
          <Separator />
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Where am I based?</AccordionTrigger>
              <AccordionContent>
                Currently in Crawley but travels to Brighton and London.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                What qualifications do I hold?
              </AccordionTrigger>
              <AccordionContent>
                Currently I hold a 1st class degree BSc (hons) from the
                University of Sussex in Computer Science.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Am I looking for employement/freelance.
              </AccordionTrigger>
              <AccordionContent>
                Yes! Please contact me for hire, I would love to work for any
                company or even do freelance work as I have also done that in
                the past.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};
const getLayout = (page: JSX.Element) => {
  return <Layout>{page}</Layout>;
};

AboutPage.getLayout = getLayout;

export default AboutPage;

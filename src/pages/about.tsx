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
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import {
  BookOpenTextIcon,
  EggIcon,
  GraduationCapIcon,
  HotelIcon,
  LaptopIcon,
  LightbulbIcon,
  RepeatIcon,
  SchoolIcon,
  StoreIcon,
} from "lucide-react";
import { TimelineOppositeContent } from "@mui/lab";
import { Typography } from "@mui/material";

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
          <span className="text-lg font-extrabold text-center">
            How I got here.
          </span>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                Present
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <LightbulbIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Univeristy of Sussex Informatics Tutor
                </Typography>
                <Typography>
                  Back teaching at the university in a more advanced role
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="text.secondary"
              >
                Aug-Oct 2023
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <LaptopIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  ForLoop Consulting
                </Typography>
                <Typography>
                  Internship that helped me learn new skills!
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="text.secondary"
              >
                Sep 2019 - July 2023
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="outlined">
                  <GraduationCapIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Computer Science Degree
                </Typography>
                <Typography>
                  Where I obtained a 1st from the University of Sussex
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="text.secondary"
              >
                Sep 2022-July 2023
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="secondary">
                  <BookOpenTextIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Teaching Assistant
                </Typography>
                <Typography>
                  Working as a teaching assistant and marking papers.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="text.secondary"
              >
                June 2019-Sep 2019
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="success">
                  <StoreIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Asda
                </Typography>
                <Typography>
                  Working as a Sales Assistant, stacking shelves and working
                  with the public.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="text.secondary"
              >
                Approx. 2012 - 2019
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="grey">
                  <SchoolIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Oriel High School
                </Typography>
                <Typography>A-levels and GCSEs</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
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

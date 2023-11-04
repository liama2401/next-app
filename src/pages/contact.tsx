import Layout from "@/components/Layout";
import { Separator } from "@/components/ui/separator";
import { MailIcon, PhoneCallIcon } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Head>
        <title>Contact Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div
        className={`grid grid-cols-10 gap-10 ${
          isVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000 ease-in-out`}
      >
        <div className="col-span-full flex flex-col gap-4">
          <h1 className="text-4xl font-bold mb-4 text-center justify-center ">
            Contact Me
          </h1>
          <Separator />
          <div className="flex flex-col items-center mt-8 gap-8">
            <p className="flex gap-2 text-lg">
              <MailIcon /> Email:
              <Link
                href="mailto:liam.a2401@gmail.com"
                className="text-blue-500 hover:underline"
              >
                liam.a2401@gmail.com
              </Link>
            </p>
            <p className="flex gap-2 text-lg">
              <PhoneCallIcon />
              Phone: +44 07804 099915
            </p>
            <Separator />
            <p className="flex gap-2 text-lg font-light text-center">
              In the top right corner, clicking on the icons will bring you to
              my github, linkedin and cv respectively. <br />
              Dissertation available upon request.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
const getLayout = (page: JSX.Element) => {
  return <Layout>{page}</Layout>;
};

ContactPage.getLayout = getLayout;

export default ContactPage;

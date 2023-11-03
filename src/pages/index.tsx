// pages/index.js
import Head from "next/head";
import Layout from "../components/Layout";
import React, { ReactElement, useEffect, useState } from "react";

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
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ${
          isVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000 ease-in-out`}
      >
        <span className="text-lg font-extrabold">Hello</span>
      </div>
    </>
  );
};

const getLayout = (page: JSX.Element) => {
  return <Layout>{page}</Layout>;
};

// Set the getLayout function as a property of the Page component
IndexPage.getLayout = getLayout;

export default IndexPage;

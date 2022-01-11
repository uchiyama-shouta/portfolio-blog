import type { GetStaticProps, NextPage } from "next";
import { Layout } from "src/component/layout/Layout";
import { client } from "src/lib/client";

type Props = {
  title: string;
  body: string;
};

const About: NextPage<Props> = ({ title, body }) => {
  return (
    <Layout>
      <div
        id="blog-post-body"
        className="my-16"
        dangerouslySetInnerHTML={{
          __html: body,
        }}
      ></div>
    </Layout>
  );
};

export default About;

type aboutType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get<aboutType>({
    endpoint: "about",
  });

  const body = `<h2>${data.title}</h2>${data.body}`;

  return {
    props: {
      body,
    },
  };
};

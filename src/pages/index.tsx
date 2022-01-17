import type { NextPage, GetStaticProps } from "next";
import { ArticleList } from "src/component/article/ArticleList";
import { Layout } from "src/component/layout/Layout";
import { client } from "src/lib/client";
import type { postList } from "src/types/postList";
import dayjs from "dayjs";

type Props = {
  data: postList;
};

const Home: NextPage<Props> = (props) => {
  return (
    <Layout>
      <ArticleList data={props.data} />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data: postList = await client.get({ endpoint: "blog" });
  data.contents.forEach((data) => {
    data.updatedAt = dayjs(data.updatedAt).format("YYYY/MM/DD");
    data.thumbnail = data.thumbnail
      ? data.thumbnail
      : { url: "/image/default.jpeg", width: 750, height: 422 };
  });

  return {
    props: {
      data,
    },
    revalidate: 30,
  };
};

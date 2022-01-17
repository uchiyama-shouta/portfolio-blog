import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { Layout } from "src/component/layout/Layout";
import { client } from "src/lib/client";
import type { postType } from "src/types/post";
import type { postList } from "src/types/postList";

import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/hybrid.css";

type Props = {
  data: postType;
  body: string;
  thumbnail: {
    url: string;
    height?: number | undefined;
    width?: number | undefined;
  };
};

const Post: NextPage<Props> = ({ body, thumbnail }) => {
  return (
    <Layout>
      <div className="mx-auto w-64 h-52 sm:m-0 sm:w-[700px] sm:h-[300px]">
        <Image
          src={thumbnail?.url as string}
          width={700}
          height={300}
          alt="サムネイル画像"
        />
      </div>
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

export default Post;

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;

  const data = await client.get<postType>({
    endpoint: `blog/${id}`,
  });

  const thumbnail = data.thumbnail
    ? data.thumbnail
    : { url: "/image/default.jpeg", width: 750, height: 422 };

  const $ = cheerio.load(data.body);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });

  return {
    props: {
      data,
      body: $.html(),
      thumbnail: thumbnail,
    },
    revalidate: 30,
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get<postList>({ endpoint: "blog" });
  const paths = data.contents.map((data) => `/${data.id}`);
  return {
    paths,
    fallback: true,
  };
};

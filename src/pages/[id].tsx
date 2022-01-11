import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { Layout } from "src/component/layout/Layout";
import { client } from "src/lib/client";
import type { postType } from "src/types/post";
import type { postList } from "src/types/postList";

import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/hybrid.css";

const Post: NextPage<{ data: postType }> = (props) => {
  const { thumbnail } = props.data;
  return (
    <Layout>
      {thumbnail ? (
        <div className="mx-auto w-64 h-52 sm:m-0 sm:w-[700px] sm:h-[300px]">
          <Image
            src={thumbnail.url}
            width={700}
            height={300}
            alt="サムネイル画像"
          />
        </div>
      ) : (
        <div className="w-64 h-52 bg-gray-400 sm:w-[700px] sm:h-[300px]" />
      )}

      <div
        id="blog-post-body"
        className="my-16"
        dangerouslySetInnerHTML={{
          __html: props.data.body,
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

  const $ = cheerio.load(data.body);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });

  data.body = $.html();

  return {
    props: {
      data,
    },
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

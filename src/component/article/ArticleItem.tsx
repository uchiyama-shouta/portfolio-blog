import Image from "next/image";
import type { VFC } from "react";
import type { postType } from "src/types/post";

type Props = Pick<postType, "thumbnail" | "title" | "tag" | "updatedAt">;

export const ArticleItem: VFC<Props> = (props) => {
  const thumbnailPath = props.thumbnail
    ? props.thumbnail.url
    : "/image/default.jpeg";
  return (
    <article className="block mb-10 lg:flex">
      <div className="relative mr-10 w-[330px] h-[185px]">
        <Image
          className="absolute inset-0"
          src={thumbnailPath}
          width={330}
          height={185}
          alt="サムネイル"
        />
      </div>
      <div>
        <h2 className="mt-6 max-w-xs text-2xl font-bold whitespace-pre-wrap">
          {props.title}
        </h2>
        <div>
          <ul className="flex">
            {props.tag?.map((tag) => (
              <li
                key={tag.id}
                className="py-1 px-2 mt-3 mr-5 mb-4 border border-amber-500"
              >
                {tag.name}
              </li>
            ))}
          </ul>
        </div>
        <p>{props.updatedAt}</p>
      </div>
    </article>
  );
};

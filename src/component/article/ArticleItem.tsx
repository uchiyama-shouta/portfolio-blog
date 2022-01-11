import Image from "next/image";
import type { VFC } from "react";
import type { postType } from "src/types/post";

type Props = Pick<postType, "thumbnail" | "title" | "tag" | "updatedAt">;

export const ArticleItem: VFC<Props> = (props) => {
  return (
    <article className="block mb-10 lg:flex">
      <div className="mr-10">
        {props.thumbnail ? (
          <Image
            src={props.thumbnail.url}
            width={330}
            height={185}
            alt="サムネイル"
          />
        ) : (
          <div className="w-[330px] h-[185px] bg-gray-400" />
        )}
      </div>
      <div>
        <h2 className="mt-6 text-2xl font-bold">{props.title}</h2>
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

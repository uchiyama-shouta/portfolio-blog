import type { VFC } from "react";
import Link from "next/link";
import { ArticleItem } from "src/component/article/ArticleItem";
import type { postList } from "src/types/postList";

type Props = {
  data: postList;
};

export const ArticleList: VFC<Props> = (props) => {
  return (
    <div>
      {props.data.contents.map((data) => (
        <Link href={`/${data.id}`} key={data.id}>
          <a>
            <ArticleItem
              title={data.title}
              thumbnail={data.thumbnail}
              updatedAt={data.updatedAt}
              tag={data.tag && data.tag}
            />
          </a>
        </Link>
      ))}
    </div>
  );
};

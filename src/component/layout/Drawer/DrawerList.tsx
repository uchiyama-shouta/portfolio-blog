import Link from "next/link";

export const DrawerList = () => {
  return (
    <div className="">
      <ul>
        <Link href="/">
          <a>
            <li>ホーム</li>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <li>このブログについて</li>
          </a>
        </Link>
      </ul>
    </div>
  );
};

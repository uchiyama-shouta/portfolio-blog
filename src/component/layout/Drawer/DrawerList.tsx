import Link from "next/link";

export const DrawerList = () => {
  return (
    <div className="pt-5">
      <ul>
        <Link href="/">
          <a>
            <li className="py-2 pl-3 hover:bg-gray-100" tabIndex={0}>
              ホーム
            </li>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <li className="py-2 pl-3 hover:bg-gray-100" tabIndex={1}>
              このブログについて
            </li>
          </a>
        </Link>
      </ul>
    </div>
  );
};

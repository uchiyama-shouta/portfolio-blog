import Image from "next/image";
import { GithubIcon } from "src/component/icon/GithubIcon";
import { TwitterIcon } from "src/component/icon/TwitterIcon";

export const Profile = () => {
  return (
    <div className="mb-5">
      <p className="text-center sm:text-left">プロフィール</p>
      <div className="mx-auto w-72 text-center border border-gray-500 sm:mx-0">
        <div className="pt-9 pb-2">
          <Image
            src="/image/profile.png"
            className="rounded-full"
            width={80}
            height={80}
            alt="プロフィール画像"
          />
        </div>
        <hr className="mx-auto mb-3 w-52 h-[2px]" />
        <p className="mb-1 text-lg font-bold">内山 翔太</p>
        <p className="mb-2 font-light">Uchiyama Shota</p>
        <p className="font-light">Reactが大好きです</p>
        <div className="flex justify-center my-5">
          <TwitterIcon />
          <div className="w-5" />
          <GithubIcon />
        </div>
      </div>
    </div>
  );
};

"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";

function Footer({ appName }: { appName: string }) {
  const router = useRouter();
  const path = usePathname();
  if (path.includes("/anime")) return null;
  return (
    <footer className="sm:px-16 py-4 px-8 flex-center flex-col gap-2 flex-wrap bg-[#161921] text-white">
      <p className="text-[9px] md:text-sm text-center font-semibold m-auto max-w-4xl">
        <span
          onClick={() => router.push("/")}
          className="font-extrabold text-[red] cursor-pointer underline-offset-4 hover:underline active:translate-y-1 ease-in-out duration-200"
        >
          {appName}
        </span>{" "}
        is not affiliated with or endorsed by any of the anime studios behind
        the creation of the anime presented on this site. This website is only a
        user interface presenting/linking various self-hosted files across the
        internet by other third-party providers for easy access. AnimeTrix never
        downloads the video from any source provider, link will be returned from
        the response hence it is completely not subjected to DMCA compliant.
      </p>
      <div className="w-full flex-between gap-2">
        <p className="text-base font-bold">@2024 {appName}</p>
        <Image
          src="/logo.png"
          alt="logo"
          width={47}
          height={44}
          className="object-contain"
        />
        <div className="flex items-center gap-6">
          {socialMediaLinks.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="scale-125 hover:scale-150 active:translate-y-1 ease-in-out duration-200"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

const socialMediaLinks = [
  {
    icon: <GitHubLogoIcon />,
    url: "https://github.com/gauravdubey19/",
  },
  {
    icon: <InstagramLogoIcon />,
    url: "https://www.instagram.com/silent_way19/",
  },
];

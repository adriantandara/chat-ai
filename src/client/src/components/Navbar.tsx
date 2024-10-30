import { IoChatbubbleOutline, IoBookmarkOutline } from "react-icons/io5";
import { FaCompass } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { useSectionStore } from "@/stores";
import { IoMdExit } from "react-icons/io";
import { Sections } from "@/types";

const navLinks: { name: Sections; icon: IconType }[] = [
  { name: "Chats", icon: IoChatbubbleOutline },
  { name: "Saved", icon: IoBookmarkOutline },
  { name: "Updates", icon: FaCompass },
];

export const Navbar = () => {
  const { section, setSection } = useSectionStore();

  const handleSection = (section: Sections) => setSection(section);

  return (
    <div className="h-screen bg-secondary-dark p-3.5">
      <div className="flex h-full flex-col items-center justify-between">
        <div className="flex flex-col items-start justify-center gap-12">
          <img src="/icons/gpt-logo.png" alt="logo-gpt" />
          <div className="flex flex-col items-start justify-center gap-5">
            {navLinks.map(({ name, icon: Icon }) => (
              <div className="flex items-center justify-start gap-3.5">
                {section === name && (
                  <div className="fixed left-0 h-5 w-[0.20rem] rounded-r-full bg-primary-light transition duration-300" />
                )}
                <div
                  key={name}
                  onClick={() => handleSection(name)}
                  className={`rounded-lg ${section === name ? "bg-primary-light" : "cursor-pointer bg-secondary-light hover:bg-primary-light/25"} p-2 transition duration-200`}
                >
                  <Icon
                    className={`text-base ${section === name ? "text-white" : "text-primary-light"}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-5">
          <div className="cursor-pointer rounded-lg bg-red-900/20 p-1.5 transition duration-200 hover:bg-red-900/15">
            <IoMdExit className="text-xl text-red-900" />
          </div>
          <div className="h-0.5 w-8 rounded-lg bg-secondary-light/70"></div>
          <img
            src="/avatar.png"
            alt="user-avatar"
            className="h-8 w-8 cursor-pointer transition duration-150 hover:brightness-75"
          />
        </div>
      </div>
    </div>
  );
};

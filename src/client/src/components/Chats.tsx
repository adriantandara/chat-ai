import { IoSearchOutline } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import { FiPlus } from "react-icons/fi";

const chats = [
  {
    id: 1,
    title: "Cosmic Evolution",
    questionAt: "10:00 AM",
    question:
      "What is the future of the universe? Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Cosmic Evolution",
    questionAt: "10 oct",
    question:
      "What is the future of the universe? Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Cosmic Evolution",
    questionAt: "12 oct",
    question:
      "What is the future of the universe? Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    id: 4,
    title: "Cosmic Evolution",
    questionAt: "11 oct",
    question:
      "What is the future of the universe? Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    id: 5,
    title: "Cosmic Evolution",
    questionAt: "17 Oct",
    question:
      "What is the future of the universe? Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    id: 6,
    title: "Cosmic Evolution",
    questionAt: "Mon",
    question:
      "What is the future of the universe? Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    id: 7,
    title: "Cosmic Evolution",
    questionAt: "Now",
    question:
      "What is the future of the universe? Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
];

export const Chats = () => {
  return (
    <div className="flex max-w-[18vw] items-center justify-center px-3.5 py-3.5">
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-xl font-semibold text-white">My Chats</h1>
          <div className="flex items-center justify-end gap-3">
            <div className="cursor-pointer rounded-lg bg-primary-light p-1.5 transition duration-200 hover:bg-primary-light/80">
              <FiPlus className="text-base text-white" />
            </div>
            <div className="cursor-pointer rounded-lg bg-secondary-dark p-[0.45rem] transition duration-200 hover:bg-secondary-dark/80">
              <IoIosMore className="text-base text-white" />
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-start">
          <IoSearchOutline className="absolute ml-2 text-base text-zinc-400/60" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-lg bg-secondary-dark/40 py-1.5 pl-7 pr-2 text-sm font-medium text-zinc-400/40 placeholder:text-zinc-400/60"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-3">
          {chats.map(({ title, questionAt, question, id }) => (
            <div
              className={`flex w-[17.3vw] items-center justify-center ${id === 1 ? "bg-secondary-dark px-2" : "cursor-pointer hover:w-[17.3vw] hover:bg-secondary-dark/40"} w-full rounded-lg px-2 py-3`}
            >
              <div
                key={id}
                className="flex w-full items-start justify-start gap-1"
              >
                <img src="/gpt.png" alt="gpt-logo-chat" className="w-5" />
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <div className="flex w-full items-center justify-between">
                    <h1 className="text-sm font-medium text-white">{title}</h1>
                    <h2 className="text-[.6em] font-medium text-zinc-400/50">
                      {questionAt}
                    </h2>
                  </div>
                  <div className="flex w-full items-start justify-start">
                    <p className="line-clamp-2 w-full text-ellipsis text-xs text-zinc-300/80">
                      {question}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

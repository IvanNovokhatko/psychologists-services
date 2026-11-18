import Link from "next/link";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { MdPeopleAlt } from "react-icons/md";
import { TbQuestionMark } from "react-icons/tb";
import { RiCheckFill } from "react-icons/ri";

export default function Hero() {
  return (
    <>
      <section className="pt-[78px]">
        <div className="flex items-center justify-between mx-auto w-full max-w-[1184px]">
          <div>
            <h1 className="mb-5 mt-0 max-w-[595px] font-semibold text-[80px]/[1.02] tracking-tight">The road to the <span className="italic text-button">depths</span> of the human soul</h1>
            <p className="mb-10 max-w-[510px] font-medium text-lg/[1.33] tracking-tight">We help you to reveal your potential, overcome challenges and find a guide in your own life with the help of our experienced psychologists.</p>
            <Link href="/psychologists" className="flex justify-center items-center w-full max-w-[235px] h-15 font-medium tracking-tighter text-xl/[1.2] text-bg-primary rounded-4xl bg-button focus:outline-none focus:bg-button-hover hover:bg-button-hover transition-background duration-250 ease-in-out">Get started <GoArrowUpRight className="ml-3" size={25} strokeWidth={0.5} /></Link>
          </div>

          <div className="relative">
            <Image className="rounded-[10px]" src="/images/hero.png" alt="Hero image with a photo of a phychologist" width={464} height={526}></Image>

            <div className="absolute top-[44px] right-[-38px] flex justify-center items-center w-12 h-12 text-bg-primary bg-yellow rounded-[10px] rotate-15"><MdPeopleAlt size={20} /></div>
            <div className="absolute top-[191px] left-[-34px] flex justify-center items-center w-10 h-10 text-bg-primary bg-violet rounded-[10px] -rotate-15"><TbQuestionMark size={20} strokeWidth={2.5} className="rotate-15" /></div>
            <div className="absolute top-[339px] left-[-96px] flex justify-between p-8 w-full max-w-[311px] h-[118px] rounded-[20px] bg-button">
              <div className="flex justify-center items-center w-[54px] h-[54px] text-button bg-bg-primary rounded-[13px]"><RiCheckFill size={26} strokeWidth={1.5} /></div>
              <div>
                <p className="mb-2 text-sm text-bg-transparent">Experienced psychologists</p>
                <p className="text-2xl text-bg-primary font-bold">15,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
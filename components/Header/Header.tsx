import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="border-b border-border">
        <div className="flex items-center mx-auto h-24 max-w-[1184px]">
          <Link href="/" className="group font-bold text-xl/[1.2] tracking-tight focus:outline-none hover:text-button focus:text-button transition-color duration-250 ease-in-out"><span className="text-button group-hover:text-main group-focus:text-main transition-color duration-250 ease-in-out">psychologists.</span>services</Link>

          <nav className="flex items-center gap-10 ml-[130px]">
            <Link href="/" className="leading-[1.25] tracking-tighter focus:outline-none hover:text-button focus:text-button transition-color duration-250 ease-in-out">Home</Link>
            <Link href="/psychologists" className="leading-[1.25] tracking-tighter focus:outline-none hover:text-button focus:text-button transition-color duration-250 ease-in-out">Psychologists</Link>
          </nav>
        
          <div className="flex gap-2 ml-auto">
            <button type="button" className="w-[124px] h-12 border border-border rounded-4xl font-medium leading-[1.25] tracking-tighter focus:outline-none hover:border-button focus:border-button transition-border duration-250 ease-in-out">Log In</button>
            <button type="button" className="w-[171px] h-12 rounded-4xl text-bg-primary font-medium leading-[1.25] tracking-tighter bg-button focus:outline-none hover:bg-button-hover focus:bg-button-hover transition-background duration-250 ease-in-out">Registration</button>
          </div>
        </div>
      </header>
    </>
  );
}
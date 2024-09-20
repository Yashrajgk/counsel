import Button from "@/app/components/ui/button";
// import Logo from "@/app/components/ui/logo";
// import Link from "next/link";

function Joinus() {
  return (
    <section className="bg-black-900 py-48 px-8 flex justify-center">
        <div className="bg-[#f5f5f4] p-20 rounded-lg w-full max-w-5xl text-center">
           <h2
        className={"text-4xl text-center lg:mt-4 mx-auto max-w-[80%] lg:max-w-3xl lg:text-5xl"}>
        Join hundreds of millions of users and try Counsel today.
      </h2>
          <Button className={"mt-2"}>Start Now</Button>
        </div>
      </section>
);
}
export default Joinus;
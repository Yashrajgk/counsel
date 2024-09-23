import Button from "@/app/components/ui/button";

function Joinus() {
  return (
    <section className="bg-black-900 py-24 px-4 flex justify-center">
      <div className="bg-[#f5f5f4] p-8 rounded-lg w-full max-w-5xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mx-auto mt-4 max-w-[90%] lg:max-w-3xl">
          Join hundreds of millions of users and try Counsel today.
        </h2>
        <Button className="mt-2">Start Now</Button>
      </div>
    </section>
  );
}

export default Joinus;

import Button from "@/app/components/ui/button";

function Banner() {
  return (
    <div className={"flex flex-col items-center gap-y-1 mt-20"}>
      <small className={"text-lg font-bold"}>counsel</small>
      <h1
        className={
          "text-4xl text-center lg:mt-4 mx-auto max-w-[80%] lg:max-w-3xl lg:text-5xl"
        }
      >
        Get answers. Find inspiration. Be more productive.
      </h1>
      <p
        className={
          "text-center mx-auto max-w-[90%] mt-1 lg:mt-4 text-lg lg:max-w-xl"
        }
      >
        Free to use. Easy to try. Just ask and ChatGPT can help with writing,
        learning, brainstorming, and more.
      </p>
      <Button className={"mt-2"}>Start Now</Button>
    </div>
  );
}

export default Banner;

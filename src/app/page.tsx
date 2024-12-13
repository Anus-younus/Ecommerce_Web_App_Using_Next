import Hero from "@/components/Hero";
import NewCollection from "@/components/NewCollection";
import NewsLetter from "@/components/NewsLetter";
import Offers from "@/components/Offers";
import Poppular from "@/components/Poppular";

export default function Home() {
  return (
     <div>
      <Hero />
      <Poppular />
      <Offers />
      <NewCollection />
      <NewsLetter />
     </div>
  );
}

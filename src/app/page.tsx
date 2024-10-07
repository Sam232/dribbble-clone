import Banner from "@/components/Banner";
import Portfolios from "@/components/Portfolios";
import Designers from "@/components/Designers";
import InspiringDesigns from "@/components/InspiringDesigns";
import JoinUs from "@/components/JoinUs";

export default function Home() {
  return (
    <main className="">
      <Banner/>
      <Designers/>
      <InspiringDesigns/>
      <JoinUs/>
      <Portfolios/>
    </main>
  )
}

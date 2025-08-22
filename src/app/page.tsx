import SnowFall from "@/components/sections/SnowFall";
import ProfileCard from "@/components/ProfileCard";
import MainContent from "@/components/MainContent";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <main className="bg-[#243f69] text-white font-sans p-4 gap-4 min-h-screen">
      <SnowFall />
      <Header />
      <Hero />
      <Experience />
      {/* <ProfileCard /> */}
      {/* <MainContent /> */}
    </main>
  );
}

import SnowFall from "@/components/sections/SnowFall";
import ProfileCard from "@/components/ProfileCard";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <main className="flex md:flex-row flex-col bg-black text-white font-sans p-4 gap-4 min-h-screen">
      <SnowFall />
      <ProfileCard />
      <MainContent />
    </main>
  );
}

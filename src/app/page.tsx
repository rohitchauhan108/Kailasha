import Preloader from "@/components/animations/Preloader";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Accommodations from "@/components/home/Accommodations";
import VideoExperience from "@/components/home/VideoExperience";
import Gallery from "@/components/home/Gallery";
import Amenities from "@/components/home/Amenities";
import WelcomeMessage from "@/components/home/WelcomeMessage";
import LocationReachUs from "@/components/home/LocationReachUs";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="flex-grow">
      <Preloader />
      <Hero />
      <About />
      <VideoExperience />
      {/* <TextReveal /> */}
      <Accommodations />
      <Gallery />
      <Amenities />
      <WelcomeMessage />
      <LocationReachUs />
    </main>
  );
}

import Footer from "./ui/footer";
import NavBar from "./ui/navbar";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-white">
      <NavBar />
      <div className="text-blue-500">Index</div>
      <footer className="absolute bottom-0">
        <Footer />
      </footer>
    </main>
  );
}

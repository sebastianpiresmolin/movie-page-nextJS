import NavBar from "./ui/navbar";
import AllUsers from "./ui/all-users";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-white">
      <NavBar />
      <h1 className="text-blue-500">Index</h1>
    </main>
  );
}

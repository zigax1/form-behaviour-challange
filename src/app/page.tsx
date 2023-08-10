import CalebMeliusForm from "@/components/CalebMeliusForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideNav from "@/components/SideNav";

export default function Home() {
  return (
    <main className="bg-white">
      <header className="relative z-10">
        <Header />
      </header>
      <div className="max-w-[1440px] mx-auto relative min-h-screen bg-white">
        <main className="flex">
          <div className="border-r border-gray-300 w-[10%]  md:w-[225px] lg:w-[300px]">
            <SideNav />
          </div>
          <div className="max-w-[1440px] mx-auto flex-1">
            <CalebMeliusForm />
          </div>
        </main>
      </div>
      <footer className="bg-dark-blue ">
        <Footer />
      </footer>
    </main>
  );
}

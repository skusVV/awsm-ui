// import Link from "next/link";
import Header from "~/app/_components/header/Header";
import Footer from "~/app/_components/footer/Footer";

// import { api } from "~/trpc/server";

export default async function Home() {

  return (
    <main className="">
        <Header />
        <Footer />
    </main>
  );
}


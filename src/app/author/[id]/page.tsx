
import { api } from "~/trpc/server";
import Header from "~/app/_components/header/Header";
import Footer from "~/app/_components/footer/Footer";

export default async function Author() {
  const author = await api.author.getAuthor({ id: "kaivan-dave" });

  return (
    <main className="">
        <Header />
        {author.name}
        <Footer />
    </main>
  );
}


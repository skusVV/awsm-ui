import Link from "next/link";

import { api } from "~/trpc/server";

export default async function Home() {
  const author = await api.author.getAuthor({ id: "kaivan-dave" });

  return (
    <main className="">
    {author.name}
    </main>
  );
}


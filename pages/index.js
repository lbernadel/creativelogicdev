import Head from "next/head";
import About from "../components/About"

export default function Home() {
    return (
      <div className="space-y-14 lg:space-y-24">
        <Head>
          <title>Creative Logic | Laurie Bernadel, Web Developer</title>
          <meta content="Web developer bringing ideas to life with the magic of code" typeof="description" />
        </Head>

        <main className="max-w-4xl mx-auto mt-16 antialiased">
          <About/>
        </main>
      </div>
    )
}
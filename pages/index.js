import Head from "next/head";

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Creative Logic | Laurie Bernadel, Web Developer</title>
        <meta
          content="Web developer bringing ideas to life with the magic of code"
          typeof="description"
        />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <div className="container px-4 mx-auto">
          <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
            <div className="lg:px-4 lg:mt-12 ">
              <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                Hello I'm Laurie,
              </h1>
              <div className="mt-6 text-gray-800 dark:text-white">
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

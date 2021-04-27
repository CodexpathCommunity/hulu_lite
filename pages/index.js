import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>hulu_lite</title>
        <link
          rel="icon"
          href="data:image/jpeg;base64,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"
        />
      </Head>
      <Header />
    </div>
  );
}

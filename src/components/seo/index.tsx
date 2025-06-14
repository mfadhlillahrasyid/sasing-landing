import Head from "next/head";

interface SEOProps {
  title: string;
  description?: string;
}

export default function SEO({
  title,
  description = "Sasing Gaming | Landing"
}: SEOProps) {
  const siteTitle = `${title}`;

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" type="image/png" sizes="32x32" />
      <link rel="icon" href="/favicon.ico" type="image/jpeg" sizes="32x32" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.ico" />
    </Head>
  );
}

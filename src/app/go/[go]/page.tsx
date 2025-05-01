import { notFound } from "next/navigation";

const GO_LINKS: Record<string, string> = {
  "stream-keys":
    "https://docs.google.com/spreadsheets/d/12LvxeXGz3GcIUrza5TVJ6PbAsd7t6gQXDRj_jFvKFgk/edit?gid=0#gid=0",
  live: "https://docs.google.com/document/d/1kQcz9uh8wqEfJqCae-_olfhB3wvBGgQV1QxGBcpwnQo/edit?tab=t.0",
  "la1-guides": "https://drive.google.com/drive/u/0/folders/14Ake1gV-kIoC3aLVU-DZrLuLeyZPfFNv",
  "vase-go-live": "https://youtu.be/sr-xGQ2_ViI",
};

export async function generateStaticParams() {
  const links = [];
  for (const link in GO_LINKS) {
    if (Object.prototype.hasOwnProperty.call(GO_LINKS, link)) {
      links.push(link);
    }
  }
  return links.map((link) => ({ go: link }));
}

export default async function GoRedirect({
  params,
}: {
  params: Promise<{ go: string }>;
}) {
  // initially i tried to use a route handler to issue a redirect, but that doesn't work on static output

  const { go } = await params;
  if (Object.prototype.hasOwnProperty.call(GO_LINKS, go)) {
    const target = GO_LINKS[go];
    return (
      <>
        {/* putting this in <Head> means nextjs yeets it because they don't like <meta http-equiv> lol */}
        <meta httpEquiv="refresh" content={`0; url=${target}`} />

        <p>
          If you have not been redirected, please click to go to{" "}
          <a
            style={{ textDecoration: "underline", color: "blue" }}
            href={target}
          >
            {target}
          </a>
          .
        </p>
      </>
    );
  } else {
    notFound();
  }
}

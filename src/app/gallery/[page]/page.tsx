import { RevalidatePathTest } from "./revalidate-path-test";

export async function generateStaticParams() {
  return Array.from({ length: 10 }, () => null).map((_, i) => ({
    page: `${i}`,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const param = await params;
  const page = Number(param.page);
  console.log(`calling '/gallery/${page}'`);
  return (
    <div>
      <h1>Gallery Page</h1>
      <p>page={page}</p>
      <RevalidatePathTest />
    </div>
  );
}

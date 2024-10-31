import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const path = searchParams.get("path");
  if (!path) {
    return new Response("No path provided", { status: 400 });
  }
  revalidatePath(path, "page");
  return new Response("Revalidation triggered", { status: 200 });
}

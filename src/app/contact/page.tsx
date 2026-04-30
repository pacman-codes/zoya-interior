import { redirect } from "next/navigation";
import { getLocale } from "@/lib/i18n";

export default async function ContactPage(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const locale = await getLocale(props.searchParams);

  redirect(`/?lang=${locale}&slide=contacts`);
}

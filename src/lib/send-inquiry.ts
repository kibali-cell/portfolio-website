import { SITE } from "@/data/portfolio";

export type Inquiry = { name: string; email: string; phone: string; type: string; message: string };

/**
 * Posts the inquiry to the form endpoint (see SITE.formEndpoint) so it lands in
 * your inbox directly — the visitor's email app never opens. Throws on failure.
 */
export async function sendInquiry(data: Inquiry): Promise<void> {
  const res = await fetch(SITE.formEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      ...data,
      _subject: `New project inquiry — ${data.type} (${data.name})`,
      _template: "table",
      _captcha: "false",
    }),
  });
  let body: { success?: string | boolean; message?: string } | null = null;
  try {
    body = await res.json();
  } catch {
    /* non-JSON response */
  }
  const failed = !res.ok || body?.success === false || body?.success === "false";
  if (failed) throw new Error(body?.message || `Request failed (${res.status})`);
}

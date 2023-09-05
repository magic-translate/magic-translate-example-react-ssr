/**
 * This function returns the base URL of the webapp.
 * If you're not deploying on Vercel, please set the NEXT_PUBLIC_WEBAPP_URL
 * env variable to make sure the webapp URL is accurate.
 */
export function getWebappUrl() {
  return (
    process.env.NEXT_PUBLIC_WEBAPP_URL ??
    (process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : null) ??
    "http://localhost:3000"
  );
}

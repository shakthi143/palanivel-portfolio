const configuredSiteUrl = process.env.SITE_URL?.trim();

export const siteUrl = configuredSiteUrl ? new URL(configuredSiteUrl) : undefined;

if (
  siteUrl &&
  (!["http:", "https:"].includes(siteUrl.protocol) ||
    siteUrl.username ||
    siteUrl.password ||
    siteUrl.pathname !== "/" ||
    siteUrl.search ||
    siteUrl.hash)
) {
  throw new Error(
    "SITE_URL must be an absolute HTTP(S) origin without credentials, path, query, or fragment.",
  );
}

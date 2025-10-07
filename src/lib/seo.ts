export const siteConfig = {
  name: "Plan Genie",
  shortName: "PlanGenie",
  description:
    "Plan Genie helps teams plan smarter and execute with clarity — AI planning, training, and execution tools in one platform.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://www.plangenie.com",
  twitter: {
    site: "@plangenie",
    creator: "@plangenie",
  },
};


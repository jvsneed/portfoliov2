import { defineMiddleware } from "astro:middleware";
import { sequence } from "astro:middleware";

const authMiddleware = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname;

  // Check if the route is a protected case study
  const isCaseStudy = pathname.startsWith("/case-study/");

  if (isCaseStudy) {
    // Check for valid auth token in cookies or headers
    const authToken = context.cookies.get("caseStudyAuth")?.value;
    const expectedPassword = import.meta.env.CASE_STUDY_PASSWORD;

    // If no valid auth token, redirect to password gate
    if (!authToken || authToken !== expectedPassword) {
      return context.redirect(`/case-study-access?redirect=${encodeURIComponent(pathname)}`);
    }
  }

  return next();
});

export const onRequest = sequence(authMiddleware);

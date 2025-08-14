import posthog from "posthog-js"

// This file is automatically loaded by Next.js to initialize PostHog in the client
posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  api_host: "/ingest",
  ui_host: "https://us.posthog.com",
  defaults: '2025-05-24',
  capture_exceptions: true, // Enables exception capturing via PostHog Error Tracking
  debug: false, // Disable debug mode to reduce console noise
  disable_session_recording: process.env.NODE_ENV === "development", // Disable in development
  loaded: (posthog) => {
    if (process.env.NODE_ENV === "development") {
      console.log("PostHog loaded in development mode")
    }
  }
});

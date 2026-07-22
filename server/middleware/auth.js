// middleware/auth.js
// Verifies the Clerk session token sent by the client so API routes cannot be
// hit directly by an unauthenticated caller (the client's <SignedIn> guard is
// UI-only and provides no server-side protection on its own).
// clerkMiddleware() (mounted in app.js) populates req.auth() for every request;
// this just enforces it's present and returns JSON instead of Clerk's default
// browser sign-in redirect, which is the wrong behavior for a JSON API.
export const requireAuth = (req, res, next) => {
  const { userId } = req.auth();
  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

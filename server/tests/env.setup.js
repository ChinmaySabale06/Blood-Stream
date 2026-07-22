// Fake but well-formed Clerk keys so clerkMiddleware() doesn't throw during tests.
// No real Clerk calls happen in these tests — every protected route is expected
// to short-circuit with 401 before hitting Clerk's network verification.
process.env.CLERK_PUBLISHABLE_KEY = 'pk_test_ZXhhbXBsZS5jbGVyay5hY2NvdW50cy5kZXYk';
process.env.CLERK_SECRET_KEY = 'sk_test_00000000000000000000000000000000000000000000';

import { authMiddleware } from '@clerk/nextjs'

// This is a custom middleware that will be applied to all routes.
export default authMiddleware({})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}

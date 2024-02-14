'use client'
import { ClerkProvider, useAuth } from '@clerk/nextjs'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import {
  ConvexProvider,
  AuthLoading,
  Authenticated,
  ConvexReactClient,
} from 'convex/react'
import Loading from '@/components/auth/Loading'

interface ConvexProviderProps {
  children: React.ReactNode
}
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!
const convex = new ConvexReactClient(convexUrl)

export const ConvexClientProvider = ({ children }: ConvexProviderProps) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <Authenticated>{children}</Authenticated>
        <AuthLoading>
          <Loading />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}

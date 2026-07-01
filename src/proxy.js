import { NextResponse } from 'next/server'

import { headers } from 'next/headers';
import { auth } from './app/lib/auth';


 
// This function can be marked `async` if using `await` inside
export async function proxy(request) {


const session = await auth.api.getSession({
    headers: await headers()
});
if (!session) {
return NextResponse.redirect(new URL('/login', request.url))
}


 
}
 
export const config = {
  matcher: [
    '/dashboard/:path*',      // Protects main dashboard and all nested panels
    '/api/admin/:path*',      // Protects your administrative API endpoints
    '/api/users/:path*',      // Protects user-specific backend endpoint actions
  ],
}
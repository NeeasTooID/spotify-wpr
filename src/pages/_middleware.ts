import { getToken } from 'next-auth/jwt'
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export const middleware = async (req: NextRequest, ev: NextFetchEvent) => {
    const token = await getToken({ req: req as any, secret: process.env.JWT_SECRET! })
    const { pathname } = req.nextUrl
    if (pathname.includes('/api/auth') || token) {
        return NextResponse.next()
    }
    if (!token && !pathname.includes('/login')) {
        return NextResponse.redirect('/login')
    }
}

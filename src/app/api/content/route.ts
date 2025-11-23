import { NextResponse } from "next/server"

// This is a simple in-memory store for live-updating content
// For production, you'd use a database or external service
let liveContent = {
  featured: {
    title: "Latest Project",
    description: "This is my latest featured project",
    updatedAt: new Date().toISOString(),
  },
}

// GET: Retrieve live content
export async function GET() {
  return NextResponse.json(liveContent)
}

// POST: Update live content
export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate the incoming data
    if (body.featured?.title && body.featured?.description) {
      liveContent.featured = {
        ...body.featured,
        updatedAt: new Date().toISOString(),
      }

      return NextResponse.json(
        { success: true, data: liveContent },
        { status: 200 }
      )
    }

    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update content" },
      { status: 500 }
    )
  }
}

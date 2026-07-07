import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.email || typeof body.email !== "string") {
      return NextResponse.json(
        { success: false, message: "Укажите корректный email" },
        { status: 400 }
      );
    }

    console.log("Newsletter subscription:", body.email);
    return NextResponse.json({
      success: true,
      message: "Вы успешно подписались на рассылку!",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Ошибка сервера" },
      { status: 500 }
    );
  }
}
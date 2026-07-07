import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("Contact request:", body);
    return NextResponse.json({
      success: true,
      message:
        "Сообщение отправлено! Мы ответим вам в ближайшее время.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Ошибка сервера" },
      { status: 500 }
    );
  }
}
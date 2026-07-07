import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("Quote request:", body);
    return NextResponse.json({
      success: true,
      message:
        "Заявка отправлена! Мы свяжемся с вами в ближайшее время.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Ошибка сервера" },
      { status: 500 }
    );
  }
}
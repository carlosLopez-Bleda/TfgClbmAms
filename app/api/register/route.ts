import { NextResponse } from 'next/server';
import { prisma } from '../../lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: 'Email y contraseña requeridos' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: 'Usuario creado', user }, { status: 201 });
  } catch (error: any) {
    console.error('❌ Error en /api/register:', error);
    return NextResponse.json(
      { error: 'Server error', detail: error.message || 'Unknown error' },
      { status: 500 }
    );
  }
}

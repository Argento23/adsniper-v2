import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { productUrl, brand } = body;

        if (!productUrl) {
            return NextResponse.json({ error: 'Product URL is required' }, { status: 400 });
        }

        // Call n8n Webhook - PRODUCTION URL
        const n8nUrl = 'https://manager.generarise.space/webhook/shopify-adsniper';

        const response = await fetch(n8nUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                product_url: productUrl,
                language: body.language || 'es', // Default to Spanish
                brand: brand || {} // Pass Brand Identity (Name, Tone, Avatar)
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            return NextResponse.json({ error: `n8n Error: ${response.status} - ${errorText}` }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data);

    } catch (error: any) {
        console.error('API Error:', error);
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}

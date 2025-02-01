export async function GET(request) {
  const data = {
    name: "Bob",
    aga: 10,
    bio: "Some info",
  };
  return new Response(JSON.stringify(data));
}

export async function POST(request) {
  return new Response(request.body);
}

export async function DELETE(request) {
  return new Response(request.body);
}

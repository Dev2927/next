export async function GET() {
 const req = await fetch("http://localhost:11002/login", {"method": "POST"})
 const data = await req.json(); 
 return Response.json({data})
}

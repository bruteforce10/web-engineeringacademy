import request, { gql } from "graphql-request";

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const email = searchParams.get("email");
  const query =
    gql`
      query {
        dataCostumers(where: { email: "` +
    email +
    `" }) {
           namaLengkap
        email
        nomorTelepon
        alamat
        orderType
        }
      }
    `;
  try {
    const result = await request(process.env.HYGRAPH_SERVER, query);
    console.log(result);
    return Response.json({ data: result, status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ data: error, status: 500 });
  }
}

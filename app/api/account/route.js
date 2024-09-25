import request, { gql } from "graphql-request";

export async function GET() {
  const query = gql`
    query {
      dataCostumers {
        createdAt
        publishedAt
        email
        orderType
        link
        callback
        nomorTelepon
        namaLengkap
      }
    }
  `;
  try {
    const result = await request(process.env.HYGRAPH_SERVER, query);
    return Response.json({ data: result, status: 200 });
  } catch (error) {
    return Response.json({ data: error, status: 500 });
  }
}

export async function POST(req) {
  const body = await req.json();

  const query =
    gql`
  mutation {
  updateDataCostumer(where:{email:"` +
    body?.email +
    `"  }
  data:{callback:true}) {
        namaLengkap
        email
        nomorTelepon
        alamat
        orderType
      }
        publishDataCostumer(where: {email: "` +
    body?.email +
    `"}) {
        id
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

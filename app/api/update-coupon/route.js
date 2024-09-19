import request, { gql } from "graphql-request";

export async function POST(req) {
  const body = await req.json();

  const mutationQuery =
    gql`
    mutation {
      updateCouponDiscount(
        where: { id: "` +
    body?.id +
    `" }
        data: { limitCoupon: "` +
    body?.coupon +
    `" }
      ) {
        nameDiscount
      }
        publishCouponDiscount(where: { id: "` +
    body?.id +
    `"}) {
        id
      }
    }
  `;

  try {
    const result = await request(process.env.HYGRAPH_SERVER, mutationQuery);

    return Response.json({
      data: result,
      status: 200,
    });
  } catch (error) {
    return Response.json({ data: error, status: 500 });
  }
}

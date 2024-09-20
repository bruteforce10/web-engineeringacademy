import request, { gql } from "graphql-request";

export async function PUT(req) {
  const body = await req.json();

  console.log(body);

  return Response.json({
    data: body,
    status: 200,
  });

  const mutationQuery =
    gql`
    mutation {
      updateCouponDiscount(
        where: { promoCode: "` +
    body?.promoCode +
    `" }
        data: { limitCoupon: "` +
    body?.coupon +
    `" }
      ) {
        nameDiscount
      }
        publishCouponDiscount(where: {where: { promoCode: "` +
    body?.promoCode +
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

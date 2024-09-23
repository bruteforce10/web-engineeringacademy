import request, { gql } from "graphql-request";

export async function GET() {
  const query = gql`
    query {
      couponDiscounts {
        nameDiscount
        qty
        promoCode
        limitCoupon
        percentDiscount
      }
    }
  `;

  const result = await request(process.env.HYGRAPH_SERVER, query);

  return Response.json({ data: result?.couponDiscounts, status: 200 });
}

export async function POST(req) {
  const body = await req.json();
  let mutationQuery = null;

  if (body?.orderType === "Google Drive") {
    mutationQuery =
      gql`
    mutation {
      createDataCostumer(
        data: {
          namaLengkap: "` +
      body["nama-lengkap"] +
      `",
          email: "` +
      body?.email +
      `",
        callback: false,
          nomorTelepon: "` +
      body["nomor-telpon"] +
      `",
          orderType:"` +
      body?.orderType +
      `"
        }
      ) {
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
  } else {
    mutationQuery =
      gql`
    mutation {
      createDataCostumer(
        data: {
          namaLengkap: "` +
      body["nama-lengkap"] +
      `",
          email: "` +
      body?.email +
      `",
          provinsi: "` +
      body?.provinsi +
      `",
       callback: false,
          kotaKabupaten: "` +
      body["kota-kabupaten"] +
      `",
          nomorTelepon: "` +
      body["nomor-telpon"] +
      `",
          alamat: "` +
      body?.alamat +
      `",
          kodePos: "` +
      body["kode-pos"] +
      `",
          orderType:"` +
      body?.orderType +
      `"
        }
      ) {
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
  }

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

export async function PUT(req) {
  const body = await req.json();
  console.log(body);

  const mutationQuery =
    gql`
    mutation {
      updateDataCostumer(
      where: {
        email: "` +
    body?.email +
    `"
      }
        data: {
          namaLengkap: "` +
    body["nama-lengkap"] +
    `",
          email: "` +
    body?.email +
    `",
          provinsi: "` +
    body?.provinsi +
    `",
       callback:  ` +
    `${Boolean(body?.callback)}` +
    `,
       link: "` +
    body?.link +
    `",
          kotaKabupaten: "` +
    body["kota-kabupaten"] +
    `",
          nomorTelepon: "` +
    body["nomor-telpon"] +
    `",
          alamat: "` +
    body?.alamat +
    `",
          kodePos: "` +
    body["kode-pos"] +
    `",
          orderType:"` +
    body?.orderType +
    `"
        }
      ) {
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
    const result = await request(process.env.HYGRAPH_SERVER, mutationQuery);
    console.log(result);

    return Response.json({
      data: result,
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return Response.json({ data: error, status: 500 });
  }
}

import Midtrans from "midtrans-client";

let snap = new Midtrans.Snap({
  isProduction: true,
  serverKey: process.env.NEXT_PUBLIC_SECRET,
  clientKey: process.env.NEXT_PUBLIC_CLIENT,
});

export async function POST(req) {
  const body = await req.json();
  console.log(body);

  let parameter = {
    transaction_details: {
      order_id: body["nomor-telpon"] + "-" + Math.floor(Math.random() * 1000),
      gross_amount: body?.totalPrice,
    },
    item_details: {
      name: body["nama-lengkap"],
      price: body?.totalPrice,
      quantity: 1,
    },

    customer_details: {
      first_name: body["nama-lengkap"],
      email: body?.email,
      phone: body["nomor-telpon"],
    },
  };

  try {
    const token = await snap.createTransaction(parameter);
    console.log(token);
    return Response.json({
      token: token.token,
      redirect: token.redirect_url,
      status: 200,
    });
  } catch (error) {
    console.log(error);
  }
}

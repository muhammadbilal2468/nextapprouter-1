import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Sepatu NIKE 1",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4b8d3b6c-e5cf-4c19-8d89-4e05dad6ebf9/luka-2-pf-basketball-shoes-LM9ScX.png",
    price: 100000,
  },
  {
    id: 2,
    title: "Sepatu NIKE 2",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c00d92bc-b95b-498a-9a7e-0a35863b8a4e/air-max-1-shoes-9JTw1z.png",
    price: 200000,
  },
  {
    id: 3,
    title: "Sepatu NIKE 3",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-retro-shoe-66RGqF.png",
    price: 300000,
  },
  {
    id: 4,
    title: "Sepatu NIKE 4",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-retro-shoe-66RGqF.png",
    price: 400000,
  },
];

export async function GET(request: NextRequest) {
  console.log("request", request);
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = await retrieveDataById("products", id);
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: detailProduct,
    });
  }

  const products = await retrieveData("products");

  return NextResponse.json({ status: 200, message: "Success", data: products });
}

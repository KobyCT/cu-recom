// app/page.js
import Products from "./allproduct";
import MainLayout from "./clientcom";

export default async function Shop({ searchParams }) {
  const para = await searchParams;
  return (
    <MainLayout>
      <Products searchpara={para} />
    </MainLayout>
  );
}

// app/page.js
import Products from "./allproduct";
import MainLayout from "./clientcom";

export default async function Shop({ searchPara }) {
  const para = await searchPara;
  return (
    <MainLayout>
      <Products />
    </MainLayout>
  );
}

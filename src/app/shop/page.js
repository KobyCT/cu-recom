// app/page.js
import Products from "./allproduct";
import MainLayout from "./clientcom";

export default function Shop() {
  return (
    <MainLayout>
      <Products />
    </MainLayout>
  );
}

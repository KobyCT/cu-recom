import UnappProducts from "./server";
import StorePage from "./clicom";

export default function Main() {
  return (
    <StorePage>
      <div className="mb-10">
        <UnappProducts title={"สินค้าที่ยืนยันแล้ว"} app={"a=true"} />
        <UnappProducts title={"สินค้าที่ยังไม่ได้ยืนยัน"} app={"a=false"} />
      </div>
    </StorePage>
  );
}

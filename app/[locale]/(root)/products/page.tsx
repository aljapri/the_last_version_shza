import Products from "@/components/features/products/Products";
import { galleryImages } from "@/constants/index";
import Image from "next/image";
export default function page() {
  return (
    <div className="w-full h-full bg-[#333333] pb-10">
      <div className="h-[150px] w-full"></div>
      <div className="w-full flex flex-row justify-center gap-10 px-10 flex-wrap ">
        {galleryImages.map((img: any) => {
          return (
            <Products key={img} image={img}/>
          );
        })}
      </div>
    </div>
  );
}

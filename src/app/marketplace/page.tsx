import Carrousel from "@/components/carrousel";
import Image from "next/image";
import advancedLighting from "@/public/items/advanced-lighting/fullres.png";

export default function Marketplace() {
  return (
    <main>
      <Carrousel>
        {[
          <Image
            key={0}
            src={advancedLighting}
            alt="Advanced Lighting"
            width={1600}
            height={360}
            quality={100}
            style={{ objectFit: "cover", maxWidth: "100%" }}
          />,
          <Image
            key={1}
            src={advancedLighting}
            alt="Advanced Lighting"
            width={1600}
            height={360}
            quality={100}
            style={{ objectFit: "cover", maxWidth: "100%" }}
          />,
          <Image
            key={2}
            src={advancedLighting}
            alt="Advanced Lighting"
            width={1600}
            height={360}
            quality={100}
            style={{ objectFit: "cover", maxWidth: "100%" }}
          />,
        ]}
      </Carrousel>
      <h1>Scrap Mechanic Marketplace</h1>
    </main>
  );
}

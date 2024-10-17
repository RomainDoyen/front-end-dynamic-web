import Container from "@/ui/components/container/container"
import Image from "next/image"

export default function registerview() {
  return (
    <Container className="grid grid-cols-2 gap-20 mb-32">
      <div>
        <div className="realtive w-full h-[531px]">
          <Image 
            fill
            src="/svg/character-1.svg" 
            alt="logo"
            className=""
          />
        </div>
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, veniam. Saepe illo consectetur non commodi!
      </div>
    </Container>
  )
}

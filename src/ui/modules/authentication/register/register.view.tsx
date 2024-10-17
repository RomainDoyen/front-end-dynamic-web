import Container from "@/ui/components/container/container"
import Image from "next/image"
import Box from "@/ui/design-system/box/box"

export default function registerview() {
  return (
    <Container className="grid grid-cols-2 gap-20 mb-32">
      <div>
        <div className="relative w-full h-[531px]">
          <Image 
            fill
            src="/svg/character-1.svg" 
            alt="logo"
            className=""
          />
        </div>
      </div>
      <div>
        <Box padding_x="px-9" padding_y="py-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, veniam. Saepe illo consectetur non commodi!
        </Box>
      </div>
    </Container>
  )
}

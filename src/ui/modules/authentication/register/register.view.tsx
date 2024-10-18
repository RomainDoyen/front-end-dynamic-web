import Container from "@/ui/components/container/container"
import Image from "next/image"
import Box from "@/ui/design-system/box/box"
import Typography from "@/ui/design-system/typography/typography"
import Link from "next/link"
import Registerform from "./register.form"
import { FormType } from "@/types/forms"

type RegisterType = {
  form: FormType
}

export default function registerview({ form }: RegisterType) {
  return (
    <Container className="grid grid-cols-2 gap-20 mb-32">
      <div className="flex items-center">
        <div className="relative w-full h-[531px]">
          <Image 
            fill
            src="/images/character-1.png" 
            alt="logo"
            className="object-scale-down"
          />
        </div>
      </div>
      <div className="flex items-center">
        <Box padding_x="px-9" padding_y="py-5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" component="h1">Inscription</Typography>
            <div className="flex items-center gap-2">
              <Typography variant="caption4" component="span" theme="gray">Tu as déjà un compte ?</Typography>
              <Typography variant="caption4" component="span" theme="primary">
                <Link href="/connexion">Connexion</Link>
              </Typography>
            </div>
          </div>
          <Registerform form={form} />
          <Typography 
              variant="caption4" 
              component="p" 
              theme="gray"
              className="max-w-md mx-auto space-y-1 text-center"
          >
            <div>En t'inscrivant, tu acceptes les</div>
            <div>
              <Link href="/#" className="text-gray">
                Conditions générales d'utilisation
              </Link>
              {" "} et la {" "}
              <Link href="/#" className="text-gray">
                Politique de confidentialité.
              </Link>
            </div>
          </Typography>
        </Box>
      </div>
    </Container>
  )
}

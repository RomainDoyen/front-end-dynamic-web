import Container from "@/ui/components/container/container";
import Image from "next/image";
import Box from "@/ui/design-system/box/box";
import Typography from "@/ui/design-system/typography/typography";
import Link from "next/link";
import Forgetpasswordform from "./forget-password.form";
import { FormType } from '@/types/forms'

type RegisterType = {
  form: FormType
}

export default function forgetpasswordview({ form }: RegisterType ) {
  return (
    <Container className="grid grid-cols-2 gap-20 mb-32">
      <div className="flex items-center">
        <div className="relative w-full h-[531px]">
          <Image 
            fill
            src="/images/character-3.png" 
            alt="logo"
            className="object-scale-down"
          />
        </div>
      </div>
      <div className="flex items-center">
        <Box padding_x="px-9" padding_y="py-5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" component="h1">Mots de passe perdu ?</Typography>
            <div className="flex items-center gap-2">
              <Typography variant="caption4" component="span" theme="primary">
                <Link href="/connexion">Connexion</Link>
              </Typography>
            </div>
          </div>
          <Forgetpasswordform form={form} />
        </Box>
      </div>
    </Container>
  )
}

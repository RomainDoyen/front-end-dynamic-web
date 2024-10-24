import Container from '@/ui/components/container/container'
import Box from '@/ui/design-system/box/box'
import Typography from '@/ui/design-system/typography/typography'
import Image from 'next/image'
import Link from 'next/link'
import Loginform from './login.form'
import { FormType } from '@/types/forms'

type RegisterType = {
  form: FormType
}

export default function loginview({ form }: RegisterType ) {
  return (
    <Container className="grid grid-cols-2 gap-20 mb-32">
      <div className="flex items-center">
        <div className="relative w-full h-[531px]">
          <Image 
            fill
            src="/images/character-2.png" 
            alt="logo"
            className="object-scale-down"
          />
        </div>
      </div>
      <div className="flex items-center">
        <Box padding_x="px-9" padding_y="py-5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" component="h1">Connexion</Typography>
            <div className="flex items-center gap-2">
              <Typography variant="caption4" component="span" theme="gray">Tu n'as pas de compte ?</Typography>
              <Typography variant="caption4" component="span" theme="primary">
                <Link href="/connexion/inscription">S'inscrire</Link>
              </Typography>
            </div>
          </div>
          <Loginform form={form} />
          <Typography 
              variant="caption4"  
              theme="primary"
              className="max-w-md mx-auto space-y-1 text-center"
          >
            <Link href="/connexion/mots-de-passe-perdu" className='flex justify-center'>
              Mot de passe perdu ?
            </Link>
          </Typography>
        </Box>
      </div>
    </Container>
  )
}

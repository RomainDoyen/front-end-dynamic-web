import Container from '@/ui/components/container/container'
import Navigation from '@/ui/components/navigation/navigation'
import Seo from '@/ui/components/seo/seo'
import Avatar from '@/ui/design-system/avatar/avatar'
import Button from '@/ui/design-system/button/button'
import Logo from '@/ui/design-system/logo/logo'
import Typography from '@/ui/design-system/typography/typography'
import React from 'react'
import { RiAccountCircleFill } from 'react-icons/ri'

export default function designsystem() {
  return (
    <div>
      <Seo 
        title={"Dynamic Web"} 
        description={"Description..."}
      />
      <Navigation />
      <Container className="py-10 space-y-10">
        <Typography component="h1" variant="display">
          Bienvenue sur Dynamic Web !
        </Typography>
        <Button variant="accent" size="medium">
          Cliquez ici
        </Button>
        <Button variant="ico" size="medium" icon={{ icon: RiAccountCircleFill }} iconTheme="accent" />
        <Button variant="accent" size="medium" icon={{ icon: RiAccountCircleFill }} iconPosition="right">
          Cliquez ici
        </Button>
        <Button variant="accent" size="medium" isLoading>
          Cliquez ici
        </Button>
        {/* <Spinner size="small" /> */}
        <Logo size="large" />
        <Avatar src="/images/avatar.png" alt="avatar" size="large" />
      </Container>
    </div>
  )
}

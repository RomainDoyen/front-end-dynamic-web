import Container from "../container/container"
import Logo from "../../design-system/logo/logo"
import Typography from "@/ui/design-system/typography/typography"
import Button from "@/ui/design-system/button/button"
import Link from "next/link"
import ActiveLink from "./active-link"

export default function navigation() {
  return (
    <div className="border-b-2 border-gray-400">
      <Container className="flex items-center justify-between py-1.5 gap-7">
        <Link href="/">
          <div className="flex items-center gap-2.5">
            <Logo size="medium" />
            <div className="flex flex-col">
              <div className="text-gray font-extrabold text-[24px]">
                Dynamic Web
              </div>
              <Typography component="span" variant="caption4" theme="gray">
                Description...
              </Typography>
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-7">
          <Typography component="div" variant="caption3" className="flex items-center gap-7">
            <ActiveLink href="/design-system">Design System</ActiveLink>
            <ActiveLink href="/projets">Projets</ActiveLink>
            <ActiveLink href="/formations">Formations</ActiveLink>
            <ActiveLink href="/contacts">Contacts</ActiveLink>
          </Typography>
          <div className="flex items-center gap-2">
            <Button variant="accent" size="small" baseUrl="/connexion">
              Connexion
            </Button>
            <Button variant="secondary" size="small" baseUrl="/connexion/inscription">
              Rejoindre
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

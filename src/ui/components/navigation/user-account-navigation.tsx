import { firebaseLogout } from "@/api/authentication";
import Box from "@/ui/design-system/box/box"
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Button from "@/ui/design-system/button/button";
import Typography from "@/ui/design-system/typography/typography";
import Activelink from "./active-link";

export default function Useraccountnavigation() {

  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await firebaseLogout();
    if (error) {
      toast.error("Erreur lors de la déconnexion");
      return;
    }
    toast.success("Vous êtes déconnecté avec succès");
    router.push("/connexion");
  }

  return (
    <Box className="flex flex-col gap-7">
      <div className="flex flex-col gap-3">
        <Typography variant="caption2" weight="medium">
          <Activelink href="/mon-compte" >
            Mon espace
          </Activelink>
        </Typography>
        <Typography variant="body-lg">
          <Activelink href="/mes-compte/mes-projets" >
            Mes projets
          </Activelink>
        </Typography>
      </div>
      <Button 
        variant="danger" 
        action={() => handleLogout()}
      >
        Déconnexion
      </Button>
    </Box>
  )
}

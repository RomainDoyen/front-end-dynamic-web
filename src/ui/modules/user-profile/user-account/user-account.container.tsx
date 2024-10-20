// import Button from "@/ui/design-system/button/button"
// import { firebaseLogout } from "@/api/authentication"
// import { toast } from "react-toastify";
// import { useRouter } from "next/router";

export default function Useraccountcontainer() {

  // const router = useRouter();

  // const handleLogout = async () => {
  //   const { error } = await firebaseLogout();
  //   if (error) {
  //     toast.error("Erreur lors de la déconnexion");
  //     return;
  //   }
  //   toast.success("Vous êtes déconnecté avec succès");
  //   router.push("/connexion");
  // }

  return (
    <div className="flex justify-center pt-20 pb-20">
      {/* <Button 
        variant="danger" 
        size="large"
        action={() => handleLogout()}
      >
        Déconnexion
      </Button> */}
    </div>
  )
}

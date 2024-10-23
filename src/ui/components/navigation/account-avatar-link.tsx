import Link from 'next/link'
import Avatar from '@/ui/design-system/avatar/avatar'
import Typography from '@/ui/design-system/typography/typography'
import { useAuth } from '@/context/AuthUserContext';

export default function AccountAvatarNavigationLink() {

  const { authUser } = useAuth();

  const { displayName, photoURL } = authUser;

  return (
    <Link href="/mon-espace" className='flex items-center gap-2'>
      <Avatar src={photoURL} alt={displayName ? displayName : "Avatar de l'utilisateur"} size="large" />
      <div className='max-w-[160px]'>
        <Typography variant='caption2' weight='medium' className='truncate'>
          {displayName ? displayName : "Nom Prénom"}
        </Typography>
        <Typography variant='caption4' weight='medium' theme='gray'>
          Mon espace
        </Typography>
      </div>
    </Link>
  )
}

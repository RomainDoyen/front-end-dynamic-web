import { useState } from 'react'

type UsetoggleType = {
  initial?: boolean;
}

export default function Usetoggle({ initial = false }: UsetoggleType) {

  const [value, setValue] = useState<boolean>(initial);

  return {
    value,
    setValue
  }
}

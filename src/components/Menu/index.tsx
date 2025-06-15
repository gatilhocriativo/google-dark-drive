import Logo from '@/assets/logo.png'
import Image from 'next/image'

type Menu = {
  name: string
  icon?: string
  slug: string
}

const MENU: Menu[] = [
  {
    name: 'Pessoal',
    slug: 'pessoal',
  },
]

export function Menu() {
  return (
    <div className="flex flex-col gap-8 items-start">
      <Image src={Logo} alt="Logo" />
      <button>Novo</button>
      <div>
        <ul>
          {MENU.map((menu) => (
            <li key={menu.slug}>
              <a href={menu.slug}>{menu.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

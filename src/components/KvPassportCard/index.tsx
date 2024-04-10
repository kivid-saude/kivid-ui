import { DatePatternEnum, formatDateByPattern } from '../../common/date-utils'
import styles from './styles.module.scss'

import defaultAvatar from '/src/components/KvPassportCard/assets/avatar-void.png'

type TUser = {
  photo?: string
  name: string
}

type TKvPassportCard = {
  variant?: 'individual' | 'family'
  passportDueDate?: string | Date
  user: TUser
}

export const KvPassportCard = ({
  variant = 'individual',
  passportDueDate = '',
  user = {
    photo: '',
    name: '',
  },
}: TKvPassportCard) => {
  const classVariantDictionary = {
    individual: styles['kv-passport-card-image-individual'],
    family: styles['kv-passport-card-image-family'],
  }

  const typeVariantDictionary = {
    individual: 'Individual',
    family: 'Família',
  }

  const classes = [
    classVariantDictionary[variant],
    styles['kv-passport-card'],
    styles['kv-button--rounded'],
  ]

  const formatedPassportDueDate = formatDateByPattern({
    date: passportDueDate,
    pattern: DatePatternEnum.pointer,
  })

  return (
    <div className={`${classes.join(' ')}`}>
      <header className={styles['kv-passport-card-header']}>
        <div>
          <h2>Passaporte</h2>
          <p>{typeVariantDictionary[variant]}</p>
        </div>

        <img
          src={user.photo ?? defaultAvatar}
          alt='Icone de perfil do cliente'
        />
      </header>

      <footer className={styles['kv-passport-card-footer']}>
        <div>
          <h2>{user.name}</h2>

          <p>Validade: {<>{formatedPassportDueDate}</>}</p>
        </div>

        <img src='/src/components/KvPassportCard/assets/logo-kivid-sm.png' />
      </footer>
    </div>
  )
}

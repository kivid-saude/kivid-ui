import { DatePatternEnum, formatDateByPattern } from '../../common/date-utils'
import styles from './styles.module.scss'

import defaultAvatar from './assets/avatar-void.png'
import logoKivid from './assets/logo-kivid-sm.png'

type TUser = {
  photo?: string
  name: string
}

type TKvPassportCard = {
  variant?: 'individual' | 'family'
  user: TUser
  passportDueDate?: string | Date
  hasProfileImage?: boolean
}

export const KvPassportCard = ({
  variant = 'individual',
  passportDueDate = '',
  hasProfileImage = true,
  user = {
    photo: '',
    name: '',
  },
}: TKvPassportCard) => {
  const typeVariantDictionary = {
    individual: 'Individual',
    family: 'Família',
  }

  const classes = [
    styles['kv-passport-card'],
    styles[`kv-passport-card--variant-${variant}`],
  ].join(' ')

  const formatedPassportDueDate = formatDateByPattern({
    date: passportDueDate,
    pattern: DatePatternEnum.dot,
  })

  return (
    <div className={classes}>
      <header className={styles['kv-passport-card__header']}>
        <div>
          <h2 className={styles['kv-passport-card__title']}>Passaporte</h2>
          <p className={styles['kv-passport-card__subtitle']}>
            {typeVariantDictionary[variant]}
          </p>
        </div>

        {hasProfileImage && (
          <img
            src={user.photo ?? defaultAvatar}
            alt='Icone de perfil do cliente'
          />
        )}
      </header>

      <footer className={styles['kv-passport-card__footer']}>
        <div>
          <h2 className={styles['kv-passport-card__username']}>{user.name}</h2>

          <p className={styles['kv-passport-card__due-date']}>
            Validade: {<>{formatedPassportDueDate}</>}
          </p>
        </div>

        <img src={logoKivid} />
      </footer>
    </div>
  )
}

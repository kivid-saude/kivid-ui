import React, { useState } from 'react'
import styles from './style.module.scss'

import { KvIcon } from '..'

type TKvCheckbox = React.InputHTMLAttributes<HTMLInputElement>

export const KvCheckboxInput = React.forwardRef<HTMLInputElement, TKvCheckbox>(
  ({ className = '', ...props }, ref) => {
    const [isChecked, setIsChecked] = useState(props.checked ?? false)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked)
    }

    return (
      <div className={styles['kv-input-container']}>
        <input
          ref={ref}
          type='checkbox'
          id={props.id}
          className={`${styles['kv-checkbox-input']} ${className}`}
          onChange={handleInputChange}
          {...props}
        />

        {isChecked && (
          <KvIcon
            icon='check'
            color='white'
            size='xsmall'
            className={styles['kv-checkbox-icon']}
          />
        )}
      </div>
    )
  }
)

KvCheckboxInput.displayName = 'KvCheckboxInput'

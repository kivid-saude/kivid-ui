import moment from 'moment'

export enum DatePatternEnum {
  'default' = 'DD/MM/YYYY',
  'dot' = 'DD.MM.YYYY',
}

type TFormatDate = {
  date?: Date | string
  pattern?: DatePatternEnum
}

export const formatDateByPattern = ({
  date = new Date(),
  pattern = DatePatternEnum.default,
}: TFormatDate) => {
  const formatted = moment(new Date(date)).format(pattern)

  return formatted
}

import moment from 'moment'

export enum DatePatternEnum {
  'default' = 'DD/MM/YYYY',
  'pointer' = 'DD.MM.YYYY',
}

type TFormatDate = {
  date?: Date | string
  pattern?: DatePatternEnum
}

export function formatDateByPattern({
  date = new Date(),
  pattern = DatePatternEnum.default,
}: TFormatDate) {
  const formatted = moment(new Date(date)).format(pattern)

  return formatted
}

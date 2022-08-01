import Zigzags from '/@/assets/svg/zigzags.svg'
import Dots from '/@/assets/svg/dots.svg'
import Cross from '/@/assets/svg/cross.svg'
import Donut from '/@/assets/svg/donut.svg'
import Donut2x from '/@/assets/svg/dots-2x.svg'
import CurveBig from '/@/assets/svg/curve-big.svg'
import CurveSmall from '/@/assets/svg/curve-small.svg'
import Blob from '/@/assets/svg/blob.svg'

export enum graphicType {
  'ZIGZAG' = 'zigzag',
  'DOTS' = 'dots',
  'DOTS_2X' = 'dots-2x',
  'CROSS' = 'cross',
  'DONUT' = 'donut',
  'CURVE_BIG' = 'curve-big',
  'CURVE_SMALL' = 'curve-small',
  'BLOB' = 'blob',
}

export const graphicTypeMap: Record<string, any> = {
  [graphicType.ZIGZAG]: Zigzags,
  [graphicType.DOTS]: Dots,
  [graphicType.DOTS_2X]: Donut2x,
  [graphicType.CROSS]: Cross,
  [graphicType.DONUT]: Donut,
  [graphicType.CURVE_BIG]: CurveBig,
  [graphicType.CURVE_SMALL]: CurveSmall,
  [graphicType.BLOB]: Blob,
}

const AsGraphicConsts = { graphicType, graphicTypeMap }
export default AsGraphicConsts

import Zigzags from '/@/assets/svg/zigzags.svg'
import Dots from '/@/assets/svg/dots.svg'
import CROSS from '/@/assets/svg/cross.svg'
import DONUT from '/@/assets/svg/donut.svg'
import CurveBig from '/@/assets/svg/curve-big.svg'
import CurveSmall from '/@/assets/svg/curve-small.svg'

export enum graphicType {
  'ZIGZAG' = 'zigzag',
  'DOTS' = 'dots',
  'CROSS' = 'cross',
  'DONUT' = 'donut',
  'CURVE_BIG' = 'curve-big',
  'CURVE_SMALL' = 'curve-small',
}

export const graphicTypeMap = {
  [graphicType.ZIGZAG]: Zigzags,
  [graphicType.DOTS]: Dots,
  [graphicType.CROSS]: CROSS,
  [graphicType.DONUT]: DONUT,
  [graphicType.CURVE_BIG]: CurveBig,
  [graphicType.CURVE_SMALL]: CurveSmall,
}

const AsGraphicConsts = { graphicType, graphicTypeMap }
export default AsGraphicConsts

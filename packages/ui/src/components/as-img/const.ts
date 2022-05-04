export enum imgFitModes {
  FILL = 'fill',
  CONTAIN = 'contain',
  COVER = 'cover',
}

export enum imgLoadingMode {
  EAGER = 'eager',
  LAZY = 'lazy',
}

export enum imgCaptionType {
  BOTTOM = 'bottom',
  FULL = 'full',
  OUTSIDE = 'outside',
}

export const imgAspectRatios = ['16/9', '4/3', '1/1', '2/3']

const AsImgConsts = {
  imgFitModes,
  imgCaptionType,
  imgAspectRatios,
  imgLoadingMode,
}
export default AsImgConsts

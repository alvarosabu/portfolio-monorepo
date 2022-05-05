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

export const imgAspectRatiosSafelist = imgAspectRatios.map(
  aspect => `aspect-${aspect.replace('/', '-')}`,
)

const AsImgConsts = {
  imgFitModes,
  imgCaptionType,
  imgAspectRatios,
  imgLoadingMode,
  imgAspectRatiosSafelist,
}
export default AsImgConsts

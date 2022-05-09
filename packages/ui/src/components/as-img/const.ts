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
  aspect => `aspect-${aspect}`,
)

export const imgFitModesList = Object.values(imgFitModes)
export const imgLoadingModeList = Object.values(imgLoadingMode)
export const imgCaptionTypeList = Object.values(imgCaptionType)

const AsImgConsts = {
  imgFitModes,
  imgCaptionType,
  imgAspectRatios,
  imgLoadingMode,
  imgAspectRatiosSafelist,
  imgFitModesList,
  imgLoadingModeList,
  imgCaptionTypeList,
}
export default AsImgConsts

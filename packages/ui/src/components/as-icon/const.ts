export const asNavigationIcons = new Map([
  ['menu', 'gg-menu-right'],
  ['close', 'gg-close'],
  ['location', 'carbon-location'],
  ['share', 'carbon-share'],
])

export const asSocialIcons = new Map([
  ['twitter', 'carbon-logo-twitter'],
  ['github', 'carbon-logo-github'],
  ['dev-to', 'bx-bxl-dev-to'],
  ['youtube', 'carbon-logo-youtube'],
  ['twitch', 'bi-twitch'],
])

export const asTechIcons = new Map([
  ['code', 'carbon-code'],
  ['repo', 'octicon-repo-24'],
  ['star', 'carbon-star'],
  ['fork', 'octicon-repo-forked-16'],
  ['term', 'carbon-terminal'],
  ['brush', 'carbon-brush-freehand'],
  ['lamp', 'teenyicons-desklamp-outline'],
])

export const miscIcons = new Map([
  ['heart-outline', 'ant-design-heart-outlined'],
  ['heart-fill', 'ant-design-heart-filled'],
  ['baby-bottle', 'mdi-baby-bottle-outline'],
  ['png', 'carbon-png'],
  ['download', 'carbon-download'],
])

export const asIcons = new Map([
  ...asNavigationIcons,
  ...asSocialIcons,
  ...asTechIcons,
  ...miscIcons,
])

export const iconList = Array.from(asIcons.entries())
console.log(iconList)

export const iconSafelist = [...iconList.map(([key, value]) => `i-${value}`)]

export default asIcons

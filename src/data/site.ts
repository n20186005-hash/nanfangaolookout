/**
 * 全站單一事實來源：景點名稱、地址、電話、座標、Google 評價與地圖連結。
 * 修改開放資訊、電話或評分時，只需調整此檔案。
 */

export const SITE_URL = 'https://nanfangaolookout.com/';

/** SEO 站名格式：景點名稱 + 城市 + 旅遊指南 */
export const SITE_NAME = '南方澳觀景台蘇澳旅遊指南';

/** 頁首與頁尾使用的短品牌名 */
export const BRAND_NAME = '南方澳觀景台';

export const ATTRACTION = {
  name: '南方澳觀景台',
  officialName: '南方澳觀景臺',
  alternateName: ['南方澳觀景臺', 'Nanfangao Lookout', "Nanfang'ao Observation Deck"],
  category: '觀景台',
  description:
    '位於宜蘭縣蘇澳鎮蘇花公路（台9丁線）約 5.5 公里處的免費觀景平台，可俯瞰南方澳漁港、內埤海灣、筆架山與太平洋。',
  latitude: 24.5765079,
  longitude: 121.8667597,
  coordinateText: '24.5765079, 121.8667597',
  plusCode: 'HVG8+JP 蘇澳鎮 台灣宜蘭縣',
  postalCode: '270',
  addressCountry: 'TW',
  addressRegion: '宜蘭縣',
  addressLocality: '蘇澳鎮',
  streetAddress: '蘇花公路（台9丁線約 5.5 公里處）',
  addressFull: '270台灣宜蘭縣蘇澳鎮蘇花公路',
  telephone: '+886-3-9953885',
  telephoneDisplay: '03-9953885',
  elevation: '約 140 公尺',
  ratingValue: 4.5,
  ratingCount: 9019,
  ratingSource: 'Google 地圖',
  ratingChecked: '2026 年 9 月',
  lastChecked: '2026-09-30',
  mapsUrl: 'https://maps.app.goo.gl/jhsX491V3Sp5r4pN7',
  navigationUrl:
    'https://www.google.com/maps/dir/?api=1&destination=24.5765079%2C121.8667597&destination_place_id=ChIJMYba8knOZzQRGUjgaehywyq',
  embedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.367567257208!2d121.8667597!3d24.576507900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3467e849f2da8631%3A0x2ac372e869e04819!2z5Y2X5pa55r6z6KeA5pmv6Ie6!5e0!3m2!1szh-TW!2stw!4v1785384409720!5m2!1szh-TW!2stw',
} as const;

/** 子頁標題統一附加站名後綴 */
export function withSiteName(suffix: string): string {
  return `${suffix}｜${SITE_NAME}`;
}

/** 子頁路徑（集中管理，跨頁互鏈與麵包屑共用） */
export const PAGES = [
  { path: '/status/', label: '開放狀態與門票', short: '開放狀態' },
  { path: '/parking/', label: '停車與交通', short: '停車交通' },
  { path: '/night-view/', label: '夜景與日出', short: '夜景日出' },
  { path: '/nearby/', label: '周邊順遊與美食', short: '周邊順遊' },
] as const;

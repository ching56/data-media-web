var media = ['蘋果日報', '聯合報', '自由時報', '東森新聞雲', '中央通訊社', '中國時報'];
var mediaEN = ['apple', 'udn', 'liberty', 'ettoday', 'cna', 'china'];
var smallDesktopWidthSize = 980;
var mediaColor = {
  '中央通訊社': '#26A69A',
  '蘋果日報': '#ef5350',
  '東森新聞雲': '#5C6BC0',
  '自由時報': '#FFCA28',
  '聯合報': '#FF7043',
  '中國時報': '#03A9F4'
};

function mediaNameTranslate(mediaName) {
  var dict = {
    'apple': '蘋果日報',
    'udn': '聯合報',
    'liberty': '自由時報',
    'ettoday': '東森新聞雲',
    'cna': '中央通訊社',
    'china': '中國時報',
    '蘋果日報': 'apple',
    '聯合報': 'udn',
    '自由時報': 'liberty',
    '東森新聞雲': 'ettoday',
    '中央通訊社': 'cna',
    '中國時報': 'china'
  };

  return dict[mediaName];
}

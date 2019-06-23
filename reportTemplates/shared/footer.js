const colorHexs = require('../../constants/autodesk/color-hexs');
const standardPageSizes = require('../../node_modules/pdfmake/src/standardPageSizes');

const horizontalLine = (y1, y2, pageWidth, pageMargin) => {
  return { canvas:
    [{ type: 'line', x1: pageMargin, y1, x2: pageWidth - pageMargin, y2, lineWidth: 0.5, lineColor: colorHexs.grayLight }]
  };
};

const pageCountSummary = (currentPage, pageCount) => {
  return 'Page ' + currentPage.toString() + ' of ' + pageCount;
};

const pageFooter = (currentPage, pageCount) => {
  return {
    columns: [
      { text: 'Created with', width: 'auto', style: 'pageFooterLeft' },
      { text: 'Autodesk® BIM 360™', width: 'auto', style: 'BimName', link: 'http://google.com' },
      { text: pageCountSummary(currentPage, pageCount), style: 'pageFooterRight', width: "*", alignment: 'right' }
    ]
  };
};

/**
 *
 * @param pageSize
 * @param pageOrientation
 * @param pageMargin
 */
const footerFunction = (pageSize, pageOrientation, pageMargin) => {
  let pageWidth;

  if (pageOrientation === 'landscape') {
    pageWidth = standardPageSizes[pageSize][1];
  } else {
    pageWidth = standardPageSizes[pageSize][0];
  }

  return (currentPage, pageCount) => {
    if (currentPage !== 1) {
      return [
        horizontalLine(0, 0, pageWidth, pageMargin),
        pageFooter(currentPage, pageCount)
      ];
    }
  };
};

module.exports = footerFunction;

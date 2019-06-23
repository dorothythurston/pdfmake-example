const sharedStyles = (archivedStatus, colorHexs, pageMargin) => {
  return {
    reportHeader: {
      fontSize: 18,
      bold: true,
      margin: [0, 0, 0, 10]
    },
    pageHeader: {
      fontSize: 11,
      margin: [pageMargin, 15, pageMargin, 20],
      color: colorHexs.gray
    },
    pageFooterRight: {
      fontSize: 10,
      bold: true,
      margin: [20, 5, pageMargin, 0]
    },
    pageFooterLeft: {
      fontSize: 10,
      bold: true,
      margin: [pageMargin, 5, 5, 0]
    },
    BimName: {
      fontSize: 10,
      bold: true,
      color: colorHexs.autodeskBlueDark,
      margin: [0, 5, 0, 0]
    },
    coverProjectName: {
      fontSize: 18,
      bold: true,
      color: colorHexs.grayDark,
      margin: [0, 0, 0, 0]
    },
    coverReportTitle: {
      fontSize: 25,
      bold: true,
      margin: [0, 0, 0, 20]
    },
    contentSummaryTable: {
      fontSize: 8,
      margin: [0, 0, 0, 0]
    },
    coverSummaryTable: {
      margin: [0, 5, 0, 15]
    },
    coverSummaryTableLeftColumns: {
      fillColor: colorHexs.grayLighter,
      alignment: 'left',
      margin: [0, 5, 0, 5]
    },
    coverSummaryTableRightColumns: {
      alignment: 'left',
      margin: [0, 5, 0, 5]
    },
    coverSummaryTableRightColumnsLink: {
      color: colorHexs.autodeskBlueDark,
      bold: true,
      alignment: 'left',
      margin: [0, 5, 0, 5]
    },
    tableHeader: {
      bold: true,
      fontSize: 10,
      color: colorHexs.black,
      fillColor: colorHexs.grayLighter
    },
    tableLink: {
      color: colorHexs.autodeskBlueDark,
      bold: true,
      alignment: 'left'
    },
    overDue: {
      color: colorHexs.red,
      italics: true
    },
    dateOverDue: {
      color: colorHexs.red,
      bold: true
    },
    itemStatusHeader: {
      color(value) {
        return (archivedStatus.includes(value)) ? colorHexs.grayLightest : colorHexs.white;
      }
    }
  };
};

module.exports = sharedStyles;

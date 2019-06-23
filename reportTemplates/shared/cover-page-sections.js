const LocaleHelper = require('../helpers/locale-helper');
const colorHexs = require('../../constants/autodesk/color-hexs');

const summaryContent = (reportAttributes, itemsCount) => {
  return [
    [{ text: 'Report Generated', style: 'coverSummaryTableLeftColumns' }, { text: LocaleHelper.generateTimeStamp(reportAttributes.timezone), style: 'coverSummaryTableRightColumns' }],
    [{ text: 'Created by', style: 'coverSummaryTableLeftColumns' }, { text: reportAttributes["reportcreatorname"], link: `mailto:${reportAttributes["reportcreatoremail"]}`, style: 'coverSummaryTableRightColumnsLink' }],
    [{ text: 'Message', style: 'coverSummaryTableLeftColumns' }, { text: reportAttributes.reportDescription, style: 'coverSummaryTableRightColumns' }],
    [{ text: 'Total items in this report', style: 'coverSummaryTableLeftColumns' }, { text: itemsCount, style: 'coverSummaryTableRightColumns' }]
  ];
};

/**
* Format the cover Project Name
* @param name
*/
const projectName = (name) => {
  return { text: name.toUpperCase(), style: 'coverProjectName' };
};

/**
* Format the cover Report Title
* @param title
*/
const reportTitle = (title) => {
  return { text: title, style: 'coverReportTitle' };
};

/**
  * Format the cover summary Table
  * @param reportAttributes
  * @param itemsCount
  */
const summaryTable = (reportAttributes, itemsCount) => {
  return {
    style: 'coverSummaryTable',
    table: {
      widths: ['auto', '*'],
      body: summaryContent(reportAttributes, itemsCount)
    },
    layout: {
      hLineColor: colorHexs.grayDark,
      vLineColor: colorHexs.grayDark,
      hLineWidth(i, node) {
        return 0.5;
      },
      vLineWidth(i, node) {
        return 0.5;
      },
      paddingLeft(i) { return 10;},
      paddingRight(i, node) { return 10; },
      paddingTop(i, node) { return 10; },
      paddingBottom(i, node) { return 10; }
    }
  };
};

const coverPageSections = (reportAttributes, itemsCount) => {
  return [
    projectName(reportAttributes.projectname),
    reportTitle(reportAttributes.reportTitle),
    summaryTable(reportAttributes, itemsCount)
  ];
};

module.exports = coverPageSections;

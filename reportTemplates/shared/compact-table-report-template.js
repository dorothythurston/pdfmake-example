const colorHexs = require('../../constants/autodesk/color-hexs');
const statusColors = require('../../constants/autodesk/status-colors-map');
const coverPageSections = require('./cover-page-sections');
const footerFunction = require('./footer');
const headerFunction = require('./header');
const LocaleHelper = require('../helpers/locale-helper');
const sharedStyles = require('../styles/shared.js');
const closedStatus = ["closed", "void", "Completed"];
const defaultPageSize = 'LETTER';

const closed = (status) => {
  return closedStatus.includes(status);
};

const itemStatusTextColor = (status) => {
  return (closed(status) ? colorHexs.grayDark : colorHexs.white);
};

const itemStatusFillColor = (status) => {
  return statusColors[status];
};

const formattedStatusText = (status) => {
  return status.toUpperCase().split('_').join(' ');
};

const summaryHeaders = (headers) => {
  const finalHeader = headers.length - 1;

  return headers.map((header, i) => {
    return { text: header.text, style: 'tableHeader', border: [i === 0, true, i === finalHeader, true]};
  });
};

const summaryRows = (items, itemRow) => {
  return items.map((item) => {
    return itemRow(item);
  });
};

const contentSummaryTable = (items, itemHeaders, itemRow) => {
  return {
    style: 'contentSummaryTable',
    pageBreak: 'before',
    table: {
      headerRows: 1,
      widths: itemHeaders.map((header) => header.width),
      body: [summaryHeaders(itemHeaders), ...(summaryRows(items, itemRow))]
    },
    layout: {
      hLineWidth(i, node) {
        return 0.5;
      },
      vLineWidth(i, node) {
        return 0.5;
      },
      hLineColor(i, node) {
        return (i === 0 || i === node.table.body.length) ? colorHexs.grayDark : colorHexs.grayLight;
      },
      vLineColor(i, node) {
        return (i === 0 || i === node.table.widths.length) ? colorHexs.grayDark : colorHexs.grayLight;
      },
      paddingLeft(i) { return 5;},
      paddingRight(i, node) { return 5; },
      paddingTop(i, node) { return 5; },
      paddingBottom(i, node) { return 5; },
      fillColor(i, node) {
        return (i % 2 === 0) ? colorHexs.grayLightest : null;
      }
    }
  };
};

const overDue = (date) => {
  return new Date(date).valueOf() < LocaleHelper.localDate();
};

/**
 * CompactTableTemplate
 */
module.exports = class CompactTableTemplate {
  /**
  * Generate the pdfmake definition
  * @param reportData
  * @param itemHeaders need to pass these in for each different issues based report
  * @param itemRow
  */
  static assembleReport(reportData, itemHeaders, itemRow) {
    const pageSize = reportData.reportAttributes.pageSize || defaultPageSize;
    const pageOrientation = 'landscape';
    const pageMargin = 30;

    return {
      pageOrientation,
      pageSize,
      footer: footerFunction(pageSize, pageOrientation, pageMargin),
      header: headerFunction(reportData.reportCreationInformation),
      content: [
        ...coverPageSections(reportData.reportCreationInformation, reportData.reportContent.length),
        contentSummaryTable(reportData.reportContent, itemHeaders, itemRow)
      ],
      styles: sharedStyles(closedStatus, colorHexs, pageMargin),
      defaultStyle: {
        columnGap: 0,
        alignment: 'left',
        font: 'Noto'
      }
    };
  }

  /**
  * Generate a table text object
  * @param text defaults to "" in case null is passed
  * @param style
  */
  static tableTextObject(text, style = "") {
    const safeText = text || "";
    return { text: safeText, style, border: [false, false, false, true]};
  }

  /**
  * Generate a table link object
  * @param text
  * @param link
  */
  static tableLinkObject(text, link) {
    return Object.assign(CompactTableTemplate.tableTextObject(text, 'tableLink'), { link });
  }

  /**
  * Generate a table email link
  * @param name display name
  * @param email email for link
  */
  static tableEmailLinkObject(name, email) {
    if (name && email) {
      return CompactTableTemplate.tableLinkObject(name, `mailto:${email}`);
    } else {
      return CompactTableTemplate.tableTextObject(name);
    }
  }

  /**
  * Generate a table date object
  * @param date
  */
  static tableDateObject(date) {
    return CompactTableTemplate.tableTextObject(LocaleHelper.formatDate(date));
  }

  /**
  * Generate a table date that could be over due object
  * @param date
  * @param status need the status so that we do not highlight anything closed
  */
  static tableDueDateObject(date, status) {
    if (date && overDue(date) && !closed(status)) {
      return CompactTableTemplate.tableTextObject([LocaleHelper.formatDate(date), CompactTableTemplate.tableTextObject('\noverdue', 'overDue')], 'dateOverDue');
    }

    return CompactTableTemplate.tableDateObject(date);
  }

  /**
  * Generate a table status object
  * @param date
  */
  static tableStatusObject(status) {
    return {
      text: formattedStatusText(status),
      fillColor: itemStatusFillColor(status),
      color: itemStatusTextColor(status),
      border: [true, false, false, true]
    };
  }

  /**
  * add a Right border to a table object
  * @param object
  */
  static addRightBorder(object) {
    return Object.assign(object, { border: [false, false, true, true]});
  }
};

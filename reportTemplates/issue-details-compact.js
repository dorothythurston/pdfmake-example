const CompactTableReportTemplate = require('./shared/compact-table-report-template');
const qualityIssueTypeMap = require('../constants/issues/quality-issue-types-map');

const summaryTableHeaders = [
  { text: "Status", width: "auto" },
  { text: "Id", width: "auto" },
  { text: "Title", width: "*" },
  { text: "Assignee", width: "auto" },
  { text: "Owner", width: "auto" },
  { text: "Type", width: "auto" },
  { text: "Root Cause", width: "auto" },
  { text: "Due Date", width: "auto" }
];

const summaryTableRowFunction = (itemLinkRoot) => {
  const summaryTableRow = (qualityIssue) => {
    const qualityIssuesUrl = itemLinkRoot + "/projects/" + qualityIssue.projectid + "/issues?preview=" + qualityIssue.id;

    return [
      CompactTableReportTemplate.tableStatusObject(qualityIssue.status),
      CompactTableReportTemplate.tableLinkObject(qualityIssue.identifier, qualityIssuesUrl),
      CompactTableReportTemplate.tableTextObject([qualityIssue.title, { text: `\n${qualityIssue.description}`, italics: true }]),
      CompactTableReportTemplate.tableEmailLinkObject(qualityIssue.assignee, qualityIssue.assignee),
      CompactTableReportTemplate.tableEmailLinkObject(qualityIssue.owneremail, qualityIssue.owneremail),
      CompactTableReportTemplate.tableTextObject(qualityIssueTypeMap[qualityIssue.type]),
      CompactTableReportTemplate.tableTextObject(qualityIssue.rootcause),
      CompactTableReportTemplate.addRightBorder(CompactTableReportTemplate.tableDueDateObject(qualityIssue.duedate, qualityIssue.status))
    ];
  };

  return summaryTableRow;
};

/**
 * IssueDetailsCompactPDFMakeTemplate
 */
module.exports = class IssueDetailsCompactPDFMakeTemplate {

  /**
  * Generate the pdfmake definition
  * @param reportData
  */
  static generateDefinition(reportData) {
    return CompactTableReportTemplate.assembleReport(reportData, summaryTableHeaders, summaryTableRowFunction(reportData.reportAttributes.itemLinkRoot));
  }
};

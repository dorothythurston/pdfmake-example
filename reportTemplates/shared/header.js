const formatPageHeader = (text, alignment) => {
  return { text, alignment, style: 'pageHeader' };
};

const pageHeader = (reportCreationInformation) => {
  return [
    { columns: [
      formatPageHeader(reportCreationInformation["projectname"], "left"),
      formatPageHeader(reportCreationInformation.reportTitle, "center"),
      formatPageHeader(reportCreationInformation["reportcreatorcompanyname"], "right")
    ]}
  ];
};

const headerFunction = (reportCreationInformation) => {
  return (currentPage, pageCount) => {
    if (currentPage !== 1) {
      return pageHeader(reportCreationInformation);
    }
  };
};

module.exports = headerFunction;




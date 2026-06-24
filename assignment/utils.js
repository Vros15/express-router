const _ = require("lodash");

const sort = (data, sortByProperty, sortOrder) => {
  const sortedData = _.sortBy(data, sortByProperty);

  if (sortOrder === "desc") {
    sortedData.reverse();
  }

  return sortedData;
};

module.exports = { sort }
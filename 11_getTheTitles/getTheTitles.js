const getTheTitles = function(object) {
    let titles=[];
    for (const item of object)
        titles.push(item['title']);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;

const Section = require('../models/article_section');

async function getSection(sectionid) {
	let section = await new Promise((resolve, reject) => {
		Section.findById(sectionid, (err, section) => {
			if (err) {
				res.send(err);
			}
			resolve(section);
		});
	});
	return section;
}

function getArticleSections(sectionids) {
	sections = sectionids.map(id => {
		let section = getSection(id);
		return section;
	});
	return sections;
}

module.exports.getArticleSections = getArticleSections;
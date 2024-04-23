import Utils from "./utils.js"

const utils = new Utils();

utils.drawNavBar("projets");
utils.drawFooter();

const showContent = (data) => {
    utils.drawContent(data);
}

utils.getContent("projets").then(data => {
    data = JSON.parse(data);

    data.forEach(element => {
        utils.drawContentSummary(element.summary,() => showContent(element.all));

    });
})
import designer from "./designer.js";
import Utils from "./utils.js";

window.onload = function() {
  Utils.activateLoader();
};
await designer.drawNavBar("projets");
await designer.drawFooter();



Utils.getContent("projets.md").then((data) => {
  data = Utils.parseMarkdown(data);


  data.forEach(async (element) => {
     await designer.drawContentSummary(element, () => designer.drawContent(element));
  });
});
Utils.disactivateLoader();
document.querySelector(".container").addEventListener("scroll", () => {
  Utils.setMaxContent();
});
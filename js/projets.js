import designer from "./designer.js";
import Utils from "./utils.js";

await designer.drawNavBar("projets");
await designer.drawFooter();



Utils.getContent("projets.md").then((data) => {
  Utils.makeImgClickable();
  data = Utils.parseMarkdown(data);


  data.forEach(async (element) => {
     await designer.drawContentSummary(element, () => designer.drawContent(element));
  });
});
document.querySelector(".container").addEventListener("scroll", () => {
  Utils.setMaxContent();
});
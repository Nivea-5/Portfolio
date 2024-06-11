import designer from "./designer.js";
import Utils from "./utils.js"

await designer.drawNavBar("experiences");
await designer.drawFooter();


Utils.setupMoreButton();


  
  Utils.getContent("experiences.md").then((data) => {
    data = Utils.parseMarkdown(data);
    Utils.makeImgClickable();
    data.forEach(async (element) => {
      await designer.drawContentSummary(element, () => designer.drawContent(element));
      
    });
  });

  document.querySelector(".container").addEventListener("scroll", () => {
    Utils.setMaxContent();
  });
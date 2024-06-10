import designer from "./designer.js";
import Utils from "./utils.js"

Utils.activateLoader();
await designer.drawNavBar("experiences");
await designer.drawFooter();




  
  Utils.getContent("experiences.md").then((data) => {
    data = Utils.parseMarkdown(data);
  
    data.forEach(async (element) => {
      await designer.drawContentSummary(element, () => designer.drawContent(element));
    });
  });

  Utils.disactivateLoader();
  document.querySelector(".container").addEventListener("scroll", () => {
    Utils.setMaxContent();
  });
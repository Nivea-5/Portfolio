import designer from "./designer.js";
import Utils from "./utils.js"

designer.drawNavBar("experiences");
designer.drawFooter();




  
  Utils.getContent("experiences.md").then((data) => {
    data = Utils.parseMarkdown(data);
  
    data.forEach((element) => {
      designer.drawContentSummary(element, () => designer.drawContent(element));
    });
  });

  document.querySelector(".container").addEventListener("scroll", () => {
    Utils.setMaxContent();
  });
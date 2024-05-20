import designer from "./designer.js";
import Utils from "./utils.js";


designer.drawNavBar("projets");
designer.drawFooter();



Utils.getContent("projets.md").then((data) => {
  data = Utils.parseMarkdown(data);


  data.forEach((element) => {
     designer.drawContentSummary(element, () => designer.drawContent(element));
  });
});

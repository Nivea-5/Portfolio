import Creator from "./creator.js";

export default class designer {
  static async drawNavBar(selectedId, parent = "body") {
    let navbar = await Creator.createNavbar(selectedId);
    let menuBtn = Creator.createMenuBtn(navbar);
    let searchBtn = await Creator.createSearch();
    let firstChild = document.querySelector("body").firstChild
    document
      .querySelector(parent)
      .insertBefore(navbar, firstChild);
    document
      .querySelector(parent)
      .insertBefore(menuBtn, firstChild);
      document
      .querySelector(parent)
      .insertBefore(searchBtn, firstChild);
  }

  static async drawFooter(parent = ".container") {
    let footer = await Creator.createFooter();
    document.querySelector(parent).appendChild(footer);
  }

  static async drawSearch(parent = "body") {
    let search = await Creator.createSearch();
    document.querySelector(parent).appendChild(search);
  }
  static async drawPopUp(title, content, parent = "body") {
    let popup = await Creator.createPopup(title, content);
    document.querySelector(parent).appendChild(popup);
  }

  static removePopup(parent = "body") {
    document
      .querySelector(parent)
      .removeChild(document.querySelector(".popup"));
  }

  static async drawContentSummary(content, onClickAction, parent = "main") {
    let contentElem = await Creator.createContentSummary(content, onClickAction);
    document.querySelector(parent).appendChild(contentElem);
  }

  static async drawContent(content, parent = "body") {
    let contentElem = await Creator.createContent(content)
    document.querySelector(parent).appendChild(contentElem);
    document.querySelector(".container").classList.add("smaller");
  }

  static removeContent(id, parent = "body") {
    document.querySelector(parent).removeChild(document.getElementById(id))
  }
}

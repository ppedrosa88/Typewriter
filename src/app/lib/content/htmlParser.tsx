export function parseHTML(htmlString) {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = htmlString;

  const parsedElements = [];
  const childNodes = tempElement.childNodes;

  for (let i = 0; i < childNodes.length; i++) {
    const node = childNodes[i];
    if (
      node.nodeType === Node.ELEMENT_NODE &&
      (node.tagName === "P" || node.tagName === "H1")
    ) {
      const tagName = node.tagName.toLowerCase();
      const innerHTML = node.innerHTML;
      parsedElements.push({ tag: tagName, text: innerHTML });
    }
  }

  return parsedElements;
}

export function generateHTML(elements) {
  let htmlString = "";

  elements.forEach((element) => {
    const { tag, text } = element;
    htmlString += `<${tag}>${text}</${tag}>`;
  });

  console.log(htmlString);
  return htmlString;
}

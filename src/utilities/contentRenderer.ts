// Helper function to render blocks
export function renderBlock(block_content: any): string {
  const content =
    block_content.content?.map((child: any) => child.text).join("") || "";

  switch (block_content.type) {
    case "paragraph":
      return content ? `<p>${content}</p>` : "";
    case "heading":
      return content
        ? `<h${block_content.attrs.level}>${content}</h${block_content.attrs.level}>`
        : "";
    case "codeBlock":
      return content ? `<pre><code>${content}</code></pre>` : "";
    case "bulletList":
    case "numberedList":
      const listItems = block_content.content
        .map((item: any) => renderBlock(item))
        .filter((item: string) => item.trim() !== "")
        .join("");
      return listItems
        ? `<${block_content.type === "bulletList" ? "ul" : "ol"}>${listItems}</${block_content.type === "bulletList" ? "ul" : "ol"}>`
        : "";
    case "listItem":
      const listItemContent = block_content.content
        .map((item: any) => renderBlock(item))
        .join("");
      return listItemContent ? `<li>${listItemContent}</li>` : "";
    default:
      return "";
  }
}

export function renderContent(block_content: any[]): string {
  return block_content.map(renderBlock).join("");
}

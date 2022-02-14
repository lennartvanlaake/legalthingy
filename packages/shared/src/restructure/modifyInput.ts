import type { MarkupRule, ParsedNode } from "..";

export function modifyInput(
  node: ParsedNode,
  markupRules: MarkupRule[],
  parentNode: ParsedNode | null = null
) {
  markupRules.forEach((it) => {
    switch (it.tag) {
      case "li-marker":
        applyLiMarkerRule(node, it, parentNode);
        break;
    }
  });
  node.children?.forEach((it) => modifyInput(it, markupRules, node));
  return node;
}

function applyLiMarkerRule(
  node: ParsedNode,
  markupRule: MarkupRule,
  parentNode: ParsedNode | null
) {
  if (!parentNode) {
    return;
  }
  // only break up nodes when using regex on text to find li markers
  if (markupRule.filter.location != "text" || markupRule.filter.op != "regex") {
    return;
  }
  const re = new RegExp(markupRule.filter.value);
  const match = node?.text?.match(re);
  if (!match || match.length == 0) {
    return;
  }
  const matchedString = match[0]?.trim();
  // when the entire element is a marker the grandparent is a list
  if (matchedString == node.text) {
    node.name = "li-marker";
    return;
  }
  // break marker away from actual text
  node.text = node.text?.replace(matchedString, "")?.trim();
  parentNode.children?.push({ text: matchedString, name: "li-marker" });
}

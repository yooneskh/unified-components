import { Text, Fragment, Comment } from 'vue';


function isVnodeEmpty(node) {

  if (node.type === Comment) {
    return true;
  }

  if (node.type === Text && typeof node.children === 'string' && !node.children.trim()) {
    return true;
  }

  if (node.type === Fragment && isVnodeEmpty(node.children)) {
    return true;
  }

  return false;

}

export function areVnodesEmpty(nodes) {

  if (!nodes) {
    return true;
  }

  if (Array.isArray(nodes)) {
    return nodes.every(isVnodeEmpty);
  }

  return isVnodeEmpty(nodes);

}

export function isSlotEmpty(slot) {

  if (!slot || typeof slot !== 'function') {
    return true;
  }

  return areVnodesEmpty(slot());

}

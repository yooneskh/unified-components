import { Text, Fragment, Comment } from 'vue';


function isVnodeEmpty(node, visibilityCheck) {

  if (node.type === Comment) {
    return true;
  }

  if (node.type === Text && typeof node.children === 'string' && !node.children.trim()) {
    return true;
  }

  if (node.type === Fragment && isVnodeEmpty(node.children)) {
    return true;
  }

  if (node.type?.__name === 'u-dropdown' && visibilityCheck) {
    return true;
  }

  if (node.type?.__name === 'u-tooltip' && visibilityCheck) {
    return true;
  }

  return false;

}

export function areVnodesEmpty(nodes, visibilityCheck) {

  if (!nodes) {
    return true;
  }

  if (Array.isArray(nodes)) {
    return nodes.every(node => isVnodeEmpty(node, visibilityCheck));
  }

  return isVnodeEmpty(nodes, visibilityCheck);

}

export function isSlotEmpty(slot, visibilityCheck) {

  if (!slot || typeof slot !== 'function') {
    return true;
  }

  return areVnodesEmpty(slot(), visibilityCheck);

}

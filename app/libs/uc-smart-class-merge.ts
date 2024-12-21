

export function smartClassMerge(baseClasses: string | undefined, higherClasses: string | undefined) {

  const baseClassesArray = baseClasses?.split(' ') ?? [];
  const higherClassesArray = higherClasses?.split(' ') ?? [];

  const collisionGroups = [
    [ 'fill', 'raise', 'outline', 'soft', 'ghost', 'link', 'text' ],
    [ 'neutral', 'primary', 'success', 'warning', 'danger', 'surface' ],
  ];

  const result = [];

  for (const item of baseClassesArray) {

    let shouldBeAdded = true;

    for (const group of collisionGroups) {
      if (group.includes(item) && group.some(i => higherClassesArray?.includes(i))) {
        shouldBeAdded = false;
        break;
      }
    }

    if (shouldBeAdded) {
      result.push(item);
    }

  }

  for (const item of higherClassesArray) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return result.join(' ');

}
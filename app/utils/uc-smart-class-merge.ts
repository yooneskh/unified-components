

export function ucSmartClassMerge(baseClasses: string, higherClasses: string) {

  const baseClassesArray = baseClasses.split(' ');
  const higherClassesArray = higherClasses.split(' ');

  const collisionGroup = [
    ...[ 'fill', 'outline', 'soft', 'ghost', 'link', 'text' ],
    ...[ 'neutral', 'primary', 'success', 'warning', 'danger', 'surface' ],
  ];

  const result = [];

  for (const item of baseClassesArray) {
    if (!collisionGroup.includes(item)) {
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
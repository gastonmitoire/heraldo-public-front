export function zoom(
  e:
    | React.MouseEvent<HTMLDivElement, MouseEvent>
    | React.TouchEvent<HTMLDivElement>
    | any
): void {
  const zoomer = e.currentTarget as HTMLDivElement;
  let offsetX = 0;
  let offsetY = 0;

  if ("touches" in e) {
    const touch = e.touches[0];
    const rect = zoomer.getBoundingClientRect();
    offsetX = touch.pageX - rect.left;
    offsetY = touch.pageY - rect.top;
  } else {
    offsetX = e.nativeEvent.offsetX || 0;
    offsetY = e.nativeEvent.offsetY || 0;
  }

  const x = (offsetX / zoomer.offsetWidth) * 100;
  const y = (offsetY / zoomer.offsetHeight) * 100;
  zoomer.style.backgroundPosition = `${x}% ${y}%`;
}

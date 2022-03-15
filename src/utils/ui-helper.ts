export function scrollTo(element: Element, to: number, duration: number) {
  if (duration <= 0) return;
  const difference = to - element.scrollTop;
  const perFrame = (difference / duration) * 8;

  const scroll = () => {
    element.scrollTop += perFrame;
    if (element.scrollTop < to) {
      window.requestAnimationFrame(scroll);
    }
  };
  window.requestAnimationFrame(scroll);
}

export function getScreenFps(targetCount = 50) {
  return new Promise((resolve) => {
    const startTimestamp = Date.now();
    let count = 0;
    const test = () => {
      if (++count <= targetCount) {
        window.requestAnimationFrame(test);
      } else {
        const fps = (targetCount / (Date.now() - startTimestamp)) * 1000;
        resolve(fps);
      }
    };
    window.requestAnimationFrame(test);
  });
}

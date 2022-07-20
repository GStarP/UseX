/**
 * {clickTime} clicks in {interval}(ms) time can trigger a multiple click event
 */
export interface UseMultipleClickOptions {
  clickTime: number;
  interval: number;
}

const defaultOptions: UseMultipleClickOptions = {
  clickTime: 3,
  interval: 500
};

export interface UseMultipleClickEventComposite {
  clicks: UseMultipleClickEvent[];
}
export interface UseMultipleClickEvent {
  nativeEvent: MouseEvent;
  time: number;
}

/**
 * listen multiple click
 * @param el        target element
 * @param callback  multiple click callback
 * @param options   options
 * @returns         a function to clear side effect
 */
export function useMultipleClick(
  el: HTMLElement,
  callback: (this: HTMLElement, e: UseMultipleClickEventComposite) => void,
  options?: UseMultipleClickOptions
) {
  const opt = {
    ...defaultOptions,
    ...options
  };

  let clicks: UseMultipleClickEvent[] = [];
  function clickHandler(e: MouseEvent) {
    const curTime = performance.now();
    clicks.push({
      nativeEvent: e,
      time: curTime
    });
    if (clicks.length === opt.clickTime) {
      if (curTime - clicks[0].time <= opt.interval) {
        callback.call(el, { clicks: clicks.concat([]) });
        clicks = [];
      } else {
        clicks.shift();
      }
    }
  }

  el.addEventListener('click', clickHandler);
  return () => {
    el.removeEventListener('click', clickHandler);
  };
}

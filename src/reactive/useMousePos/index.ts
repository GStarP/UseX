import { reactive } from '@vue/reactivity';

/**
 * use mouse position
 * @return pos reactive mouse position
 * @return clear: clear event listener
 */
export function useMousePos() {
  const pos = reactive({
    x: 0,
    y: 0
  });
  const onMouseMoveHandler = (e: MouseEvent) => {
    pos.x = e.clientX;
    pos.y = e.clientY;
  };
  document.addEventListener('mousemove', onMouseMoveHandler);
  const clear = () => {
    document.removeEventListener('mousemove', onMouseMoveHandler);
  };
  return {
    pos,
    clear
  };
}

/**
 * event can only use {data} to pass information
 */
export interface UseEventBusEvent {
  type: string
  data: unknown
}
export type UseEventBusEventHandler = (e: UseEventBusEvent) => void

/**
 * @returns functions to listen and emit events
 */
export function useEventBus() {
  const typeHandlersMap = new Map<string, UseEventBusEventHandler[]>;
  /**
   * register event handler
   */
  const on = (type: string, handler: UseEventBusEventHandler) => {
    if (!typeHandlersMap.has(type)) typeHandlersMap.set(type, []);
    typeHandlersMap.get(type)?.push(handler);
  };
  /**
   * unregister event handler
   */
  const off = (type: string, handler: UseEventBusEventHandler) => {
    if (typeHandlersMap.has(type)) {
      const handlers = typeHandlersMap.get(type);
      handlers && handlers.splice(handlers.indexOf(handler), 1);
    }
  };
  /**
   * register event handler which only excute once
   */
  const once = (type: string, handler: UseEventBusEventHandler) => {
    let excuted = false;
    const wrappedHandler = (e: UseEventBusEvent) => {
      off(type, wrappedHandler);
      if (!excuted) {
        excuted = true;
        handler(e);
      }
    };
    on(type, wrappedHandler);
  };
  /**
   * emit event and trigger handlers
   */
  const emit = (type: string, data: unknown) => {
    const handlers = typeHandlersMap.get(type);
    if (handlers) {
      for (const handler of handlers) {
        handler({ type, data });
      }
    }
  };

  return {
    on,
    off,
    once,
    emit
  };
}
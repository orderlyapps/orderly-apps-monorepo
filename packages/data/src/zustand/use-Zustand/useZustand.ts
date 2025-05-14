import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * Creates a type-safe Zustand store with optional localStorage persistence.
 *
 * @param initialState - The initial state of the store
 * @param options - Optional configuration options
 * @param options.storeName - If provided, enables localStorage persistence with this name
 * @returns An object containing state and setState functions
 */
export const useZustand = <T extends Record<string, unknown>>(
  initialState: T,
  options?: { storeName?: string }
) => {
  // Create the appropriate Zustand store based on whether storeName is provided
  const useStore = create<T>()(
    options?.storeName
      ? persist(() => initialState, { name: options.storeName })
      : () => initialState
  );

  // Function to get the current state
  const getState = (): T => useStore.getState();

  // Function to set the entire state
  const setState = (newState: Partial<T>): void => {
    useStore.setState((state) => ({
      ...state,
      ...newState,
    }));
  };

  // Function to set a specific property in the state
  const setProperty = <K extends keyof T>(property: K, value: T[K]): void => {
    useStore.setState((state) => ({
      ...state,
      [property]: value,
    }));
  };

  // Function to update an object property by merging
  const updateObjectProperty = <K extends keyof T>(
    property: K,
    value: Partial<T[K]>
  ): void => {
    useStore.setState((state) => {
      const currentValue = state[property];

      // Only merge if both are objects
      if (
        typeof currentValue === "object" &&
        currentValue !== null &&
        typeof value === "object" &&
        value !== null
      ) {
        return {
          ...state,
          [property]: {
            ...currentValue,
            ...value,
          },
        };
      }

      // Otherwise just replace the value
      return {
        ...state,
        [property]: value,
      };
    });
  };

  // Function to set multiple specific properties in the state
  const setProperties = <K extends keyof T>(
    properties: Record<K, T[K]>
  ): void => {
    useStore.setState((state) => ({
      ...state,
      ...properties,
    }));
  };

  return {
    // Store access
    useStore,

    // State getters and setters
    state: { ...getState() },
    setState,
    setProperty,
    setProperties,
    updateObjectProperty,
  };
};

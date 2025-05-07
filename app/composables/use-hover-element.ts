export function useHoverElement(): ComputedRef<HTMLElement | null>;
export function useHoverElement(
  target: MaybeRefOrGetter<EventTarget | null | undefined>
): ComputedRef<boolean>;
export function useHoverElement(
  target?: MaybeRefOrGetter<EventTarget | null | undefined>
) {
  const element = useState<HTMLElement | null>("hover-element", () => null);
  const isHovered = useElementHover(target);

  watch(isHovered, (value) => {
    if (value) {
      element.value = unref(target) as HTMLElement;
      return;
    }

    element.value = null;
  });

  return computed(() => (target ? isHovered.value : element.value));
}

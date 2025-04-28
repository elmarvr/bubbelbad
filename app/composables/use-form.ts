import { useForm as __useForm, type FormOptions } from "vee-validate";
import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";
import { useId } from "reka-ui";

export function useForm<TSchema extends z.AnyZodObject>(
  schema: TSchema,
  opts?: Omit<
    FormOptions<TSchema["_input"], TSchema["_output"]>,
    "validationSchema"
  >
) {
  return __useForm<TSchema["_input"], TSchema["_output"]>({
    validationSchema: toTypedSchema(schema),
    ...opts,
  });
}

export const [provideFormField, useFormField] = createInjectionState(
  (name: MaybeRef<string>) => {
    const id = computed(() => useId(null, unref(name)));

    return reactiveComputed(() => ({
      id: id.value,
      messageId: `${id.value}:message`,
    }));
  }
);

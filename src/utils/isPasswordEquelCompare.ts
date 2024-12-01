import { FieldValues, Path, UseFormReturn } from "react-hook-form";

export const isPasswordEqualCompare = <T extends FieldValues>(
    form: UseFormReturn<T>,
    fieldOne: Path<T>,
    fieldTwo: Path<T>,
): boolean => {
    return form.watch(fieldOne) === form.watch(fieldTwo);
}

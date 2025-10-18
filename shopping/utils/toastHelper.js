import { Toast } from "primereact/toast";

export function show(toast, detail='',summary='Success',severity='success', life=500){
  toast.current.show({
      severity,
      summary,
      detail,
      life,
    });
}
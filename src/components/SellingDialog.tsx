import * as Dialog from "@radix-ui/react-dialog";
import * as Form from "@radix-ui/react-form";
import InputMask from "react-input-mask";

export function SellingDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>Cadastrar novo Pedido</Dialog.Trigger>
      <Dialog.Overlay className="bg-black bg-opacity-25 fixed inset-0" />
      <Dialog.Content className="absolute inset-6">
        <Dialog.Title className="bg-blue-800 px-4  py-4 rounded-t text-2xl font-semibold text-slate-100 ">
          Cadastro Pedido
        </Dialog.Title>
        <Form.Root className="px-4 py-2 bg-slate-100 rounded-b">
          <fieldset className="flex gap-6">
            <Form.Field name="empresa" className="flex">
              <div className="flex flex-col ">
                <div className="w-80 flex justify-between items-baseline">
                  <Form.Label>Empresa*</Form.Label>
                  <Form.Message
                    className="text-red-400 text-sm pointer-events-none select-none"
                    match="valueMissing"
                  >
                    Insira uma empresa
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input type="text" className="w-full px-2" required />
                </Form.Control>
              </div>
            </Form.Field>
            <Form.Field name="clifor" className="flex">
              <div className="flex flex-col ">
                <div className="w-32 flex justify-between items-baseline">
                  <Form.Label>Clifor*</Form.Label>
                  <Form.Message
                    className="text-red-400 text-sm pointer-events-none select-none"
                    match="valueMissing"
                  >
                    obrigatório
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input type="text" className="w-32 px-2" required />
                </Form.Control>
              </div>
            </Form.Field>
            <Form.Field name="cnpj" className="flex">
              <div className="flex flex-col ">
                <div className="w-40 flex justify-between items-baseline">
                  <Form.Label>CNPJ</Form.Label>
                </div>
                <InputMask
                  alwaysShowMask
                  mask="99.999.999/9999-99"
                  type="text"
                  className="w-40 px-2"
                />
              </div>
            </Form.Field>
            <Form.Field name="emissao" className="flex">
              <div className="flex flex-col ">
                <div className="w-60 flex justify-between items-baseline">
                  <Form.Label>Data emissão*</Form.Label>
                  <Form.Message
                    className="text-red-400 text-sm pointer-events-none select-none"
                    match="valueMissing"
                  >
                    Insira uma data
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input type="date" className="px-2" required />
                </Form.Control>
              </div>
            </Form.Field>
          </fieldset>
          <fieldset className="flex gap-6">
            <Form.Field name="cond" className="flex">
              <div className="flex flex-col ">
                <div className="w-80 flex justify-between items-baseline">
                  <Form.Label>Cond. Pagamento*</Form.Label>
                  <Form.Message
                    className="text-red-400 text-sm pointer-events-none select-none"
                    match="valueMissing"
                  >
                    Insira um valor
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input type="text" className="w-full px-2" required />
                </Form.Control>
              </div>
            </Form.Field>
            <Form.Field name="forma" className="flex">
              <div className="flex flex-col ">
                <div className="w-32 flex justify-between items-baseline">
                  <Form.Label>Forma*</Form.Label>
                  <Form.Message
                    className="text-red-400 text-sm pointer-events-none select-none"
                    match="valueMissing"
                  >
                    obrigatório
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input type="text" className="w-32 px-2" required />
                </Form.Control>
              </div>
            </Form.Field>
            <Form.Field name="forma" className="flex">
              <div className="flex flex-col ">
                <div className="w-32 flex justify-between items-baseline">
                  <Form.Label>Moeda*</Form.Label>
                  <Form.Message
                    className="text-red-400 text-sm pointer-events-none select-none"
                    match="valueMissing"
                  >
                    obrigatório
                  </Form.Message>
                </div>
                <div className="flex gap-2">
                  <Form.Control asChild>
                    <input type="text" className="w-32 px-2" required />
                  </Form.Control>
                  <p>R$</p>
                </div>
              </div>
            </Form.Field>
          </fieldset>
          <Form.Submit asChild>
            <button>Confirm</button>
          </Form.Submit>
        </Form.Root>
      </Dialog.Content>
    </Dialog.Root>
  );
}

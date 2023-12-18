import * as Dialog from "@radix-ui/react-dialog";
import * as Form from "@radix-ui/react-form";

export function SellingDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>Cadastrar novo Pedido</Dialog.Trigger>
      <Dialog.Overlay className="bg-black bg-opacity-25 fixed inset-0" />
      <Dialog.Content className="absolute inset-6">
        <Dialog.Title className="bg-blue-800 px-4 py-2 text-2xl font-semibold text-slate-100 ">
          Cadastro Pedido
        </Dialog.Title>
        <Form.Root className="px-4 py-2 bg-slate-100 ">
          <Form.Field name="empresa">
            <Form.Label>Empresa</Form.Label>
            <Form.Message match="valueMissing">
              Digite o nome de uma empresa
            </Form.Message>
            <Form.Control asChild>
              <input type="text" required />
            </Form.Control>
            <Form.Submit asChild>
              <button>Confirm</button>
            </Form.Submit>
          </Form.Field>
        </Form.Root>
      </Dialog.Content>
    </Dialog.Root>
  );
}

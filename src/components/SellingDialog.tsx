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
        <Form.Root className="px-4 py-8 pb-24  bg-slate-100 rounded-b">
          <div className="flex flex-col relative gap-5 border border-gray-300 rounded-md p-4">
            <p className="absolute -top-4 left-0 bg-slate-100 px-4 text-lg font-semibold">
              Pedido
            </p>
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
            <fieldset className="flex gap-6">
              <Form.Field name="vendedor" className="flex">
                <div className="flex flex-col ">
                  <div className="w-80 flex justify-between items-baseline">
                    <Form.Label>Vendedor</Form.Label>
                  </div>
                  <Form.Control asChild>
                    <input type="text" className="w-full px-2" required />
                  </Form.Control>
                </div>
              </Form.Field>
              <Form.Field name="prevista" className="flex">
                <div className="flex flex-col ">
                  <div className="w-60 flex justify-between items-baseline">
                    <Form.Label>Data prevista</Form.Label>
                    <Form.Message
                      className="text-red-400 text-sm pointer-events-none select-none"
                      match="valueMissing"
                    >
                      Insira uma data
                    </Form.Message>
                  </div>
                  <Form.Control asChild>
                    <input type="date" className="px-2" />
                  </Form.Control>
                </div>
              </Form.Field>
              <Form.Field name="entrega" className="flex">
                <div className="flex flex-col ">
                  <div className="w-60 flex justify-between items-baseline">
                    <Form.Label>Data entrega</Form.Label>
                  </div>
                  <Form.Control asChild>
                    <input type="date" className="px-2" />
                  </Form.Control>
                </div>
              </Form.Field>
            </fieldset>
            <fieldset className="flex gap-6">
              <Form.Field name="presenca" className="flex">
                <div className="flex flex-col ">
                  <div className="w-80 flex justify-between items-baseline">
                    <Form.Label>Ind. Presença*</Form.Label>
                    <Form.Message className="text-red-400 text-sm pointer-events-none select-none">
                      obrigatório
                    </Form.Message>
                  </div>
                  <Form.Control asChild>
                    <select className="px-2 bg-white" id="presenca">
                      <option value="1">1 - Presencial</option>
                      <option value="2">2 - Internet</option>
                      <option value="3">3 - Teleatendimento</option>
                      <option value="4">4 - não presencial, outros</option>
                    </select>
                  </Form.Control>
                </div>
              </Form.Field>
            </fieldset>
          </div>
          <div className="flex flex-col relative  border mt-10 border-gray-300 rounded-md p-4">
            <p className="absolute -top-4 left-0 bg-slate-100 px-4 text-lg font-semibold">
              Itens do pedido
            </p>
            <fieldset className="flex gap-12">
              <Form.Field name="produto" className="flex">
                <div className="flex flex-col ">
                  <div className="w-80 flex justify-between items-baseline">
                    <Form.Label>Item*</Form.Label>
                    <Form.Message
                      className="text-red-400 text-sm pointer-events-none select-none"
                      match="valueMissing"
                    >
                      Insira um produto
                    </Form.Message>
                  </div>
                  <Form.Control asChild>
                    <input type="text" className="w-full px-2" required />
                  </Form.Control>
                </div>
              </Form.Field>
              <Form.Field name="quantidade" className="flex">
                <div className="flex flex-col ">
                  <div className="w-32 flex justify-between items-baseline">
                    <Form.Label>Quantidade*</Form.Label>
                    <Form.Message
                      className="text-red-400 text-sm pointer-events-none select-none"
                      match="valueMissing"
                    >
                      obrigatório
                    </Form.Message>
                  </div>
                  <Form.Control asChild>
                    <input type="number" className="w-32 " required />
                  </Form.Control>
                </div>
              </Form.Field>
              <Form.Field name="valor" className="flex">
                <div className="flex flex-col ">
                  <div className="w-32 flex justify-between items-baseline">
                    <Form.Label>Valor*</Form.Label>
                    <Form.Message className="text-red-400 text-sm pointer-events-none select-none">
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
              <Form.Field name="desconto" className="flex">
                <div className="flex flex-col ">
                  <div className="w-32 flex justify-between items-baseline">
                    <Form.Label>Desconto</Form.Label>
                  </div>
                  <div className="flex gap-2">
                    <Form.Control asChild>
                      <input type="text" className="w-32 px-2" required />
                    </Form.Control>
                  </div>
                </div>
              </Form.Field>
            </fieldset>
            <fieldset className="flex gap-12">
              <input type="text" className="w-80" />
              <input type="number" className="w-32" />
              <div className="flex gap-2">
                <input type="text" className="w-32 px-2" required />
                <p>R$</p>
              </div>
              <input type="text" className="w-32" />
            </fieldset>
            <fieldset className="flex gap-12">
              <input type="text" className="w-80" />
              <input type="number" className="w-32" />
              <div className="flex gap-2">
                <input type="text" className="w-32 px-2" required />
                <p>R$</p>
              </div>
              <input type="text" className="w-32" />
            </fieldset>
            <fieldset className="flex gap-12">
              <input type="text" className="w-80" />
              <input type="number" className="w-32" />
              <div className="flex gap-2">
                <input type="text" className="w-32 px-2" required />
                <p>R$</p>
              </div>
              <input type="text" className="w-32" />
            </fieldset>
          </div>
          <Form.Submit className="absolute right-8 mt-10" asChild>
            <button className="bg-blue-600 text-slate-50 font-semibold px-4 py-2 rounded border border-transparent transition-all duration-200 ease-in-out hover:bg-slate-100 hover:text-blue-500 hover:border-blue-500 focus:bg-slate-100 focus:text-blue-500 focus:border-blue-500">
              Salvar
            </button>
          </Form.Submit>
        </Form.Root>
      </Dialog.Content>
    </Dialog.Root>
  );
}

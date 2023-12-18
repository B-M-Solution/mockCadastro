import * as Tabs from "@radix-ui/react-tabs";
import { SellingDialog } from "./components/SellingDialog";
import { DadosPedido } from "./components/DadosPedido";

export default function App() {
  return (
    <>
      <main className="relative">
        <Tabs.Root defaultValue="pedido">
          {/* <Tabs.List>
            <Tabs.Trigger className="data-[state=active]:outline" value="item">
              Item
            </Tabs.Trigger>
            <Tabs.Trigger value="pedido">Pedido</Tabs.Trigger>
          </Tabs.List> */}
          <Tabs.Content value="pedido">
            <>
              <SellingDialog />
              <div className="flex ml-4 gap-4">
                <DadosPedido
                  empresa="Empresa"
                  clifor="Clifor"
                  cnpj="CNPJ"
                  emissao="Data de Emissão"
                  cond="Condição de Pagamento"
                  forma="Forma"
                  moeda="Moeda"
                  vendedor="Vendedor"
                  prevista="Data Prevista"
                  entrega="Data de Entrega"
                  presenca="Indicação de Presença"
                  itensPedido={[
                    {
                      produto: "Produto",
                      quantidade: "Quantidade",
                      preco: "Preço",
                      total: "Total",
                    },
                  ]}
                />
                <DadosPedido
                  empresa="Empresa"
                  clifor="Clifor"
                  cnpj="CNPJ"
                  emissao="Data de Emissão"
                  cond="Condição de Pagamento"
                  forma="Forma"
                  moeda="Moeda"
                  vendedor="Vendedor"
                  prevista="Data Prevista"
                  entrega="Data de Entrega"
                  presenca="Indicação de Presença"
                  itensPedido={[
                    {
                      produto: "Produto",
                      quantidade: "Quantidade",
                      valor: "Preço",
                      desconto: "Total",
                    },
                  ]}
                />
              </div>
            </>
          </Tabs.Content>
          <Tabs.Content value="item">Item</Tabs.Content>
        </Tabs.Root>
      </main>
    </>
  );
}

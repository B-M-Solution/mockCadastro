import * as Tabs from "@radix-ui/react-tabs";
import { SellingDialog } from "./components/SellingDialog";

export default function App() {
  return (
    <>
      <main className="relative">
        <Tabs.Root defaultValue="pedido">
          <Tabs.List>
            <Tabs.Trigger className="data-[state=active]:outline" value="item">
              Item
            </Tabs.Trigger>
            <Tabs.Trigger value="pedido">Pedido</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="pedido">
            <SellingDialog />
          </Tabs.Content>
          <Tabs.Content value="item">Item</Tabs.Content>
        </Tabs.Root>
      </main>
    </>
  );
}

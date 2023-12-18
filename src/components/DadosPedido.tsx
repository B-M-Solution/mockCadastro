export function DadosPedido({
  empresa,
  clifor,
  cnpj,
  emissao,
  cond,
  forma,
  moeda,
  vendedor,
  prevista,
  entrega,
  presenca,
  itensPedido,
}) {
  return (
    <div className="border rounded-md p-6 w-[40%] bg-white shadow-md">
      <h2 className="text-2xl font-bold mb-4">Detalhes do Pedido</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>
            <span className="font-semibold">Empresa:</span> {empresa}
          </p>
          <p>
            <span className="font-semibold">Clifor:</span> {clifor}
          </p>
          <p>
            <span className="font-semibold">CNPJ:</span> {cnpj}
          </p>
          <p>
            <span className="font-semibold">Data de Emissão:</span> {emissao}
          </p>
          <p>
            <span className="font-semibold">Condição de Pagamento:</span> {cond}
          </p>
        </div>
        <div>
          <p>
            <span className="font-semibold">Forma:</span> {forma}
          </p>
          <p>
            <span className="font-semibold">Moeda:</span> {moeda}
          </p>
          <p>
            <span className="font-semibold">Vendedor:</span> {vendedor}
          </p>
          <p>
            <span className="font-semibold">Data Prevista:</span> {prevista}
          </p>
          <p>
            <span className="font-semibold">Data de Entrega:</span> {entrega}
          </p>
          <p>
            <span className="font-semibold">Indicação de Presença:</span>{" "}
            {presenca}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Itens do Pedido</h3>
        {itensPedido.map((item, index) => (
          <div key={index} className="border rounded-md p-4 mb-4">
            <p>
              <span className="font-semibold">Item:</span> {item.produto}
            </p>
            <p>
              <span className="font-semibold">Quantidade:</span>{" "}
              {item.quantidade}
            </p>
            <p>
              <span className="font-semibold">Valor:</span> {item.valor}
            </p>
            <p>
              <span className="font-semibold">Desconto:</span> {item.desconto}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

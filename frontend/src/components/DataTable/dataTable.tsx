import axios from "axios";
import Pagination from "components/pagination/pagination";
import { SalePage } from "models/salePage";
import { useEffect, useState } from "react";
import { formatLocalDate } from "utils/formatDate";
import { BASE_URL } from "utils/requests";

function DataTable() {
  const [activePage, setActivePage] = useState(0);
  const [page, setPage] = useState<SalePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0,
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/sales?page=${activePage}&size=20&sort=date,desc`)
      .then((response) => {
        setPage(response.data);
      });
  }, [activePage]); //lista de variáveis para o useEffect observar a mudança e execuutar caso mude.

  const changePage = (index: number) => {
    setActivePage(index);
  };

  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Data</th>
              <th>Vendedor</th>
              <th>Clientes visitados</th>
              <th>Negócios fechados</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {page.content?.map((item) => (
              <tr key={item.id}>
                <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
                <td>{item.seller.name}</td>
                <td>{item.visited}</td>
                <td>{item.deals}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination page={page} onPageChange={changePage} />
    </>
  );
}

export default DataTable;

import BarChart from "components/barChart/barChart";
import DataTable from "components/dataTable/dataTable";
import DonutChart from "components/donutChart/donutChart";
import Footer from "components/footer/footer";
import NavBar from "components/navbar/navbar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Dashboard de Vendas</h1>
        <div className="row py-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas as vendas</h5>
            <DonutChart />
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-primary">Tabela de vendas</h2>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;

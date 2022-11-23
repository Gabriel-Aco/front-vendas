import { Route, Routes, Navigate, Link, BrowserRouter } from 'react-router-dom'

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/vendas" />}/>

          {/* Pagina inicial */}
          <Route path="/vendas" element={<Link to={'/vendas/cadastroVenda'}> Vendas ir para cadastro Vendas </Link>}/>

          {/* Rotas administração */}
          <Route path="/vendas/cadastroVenda" element={<Link to={'/vendas/listaVendas'}>Vendas ir para Lista</Link>}/>
          <Route path="/vendas/listaVendas" element={<Link to={'/vendas/editaVenda'}>Lista ir para edita Vendas</Link>}/>
          <Route path="/vendas/editaVenda" element={<Link to={'/vendas'}>Vendas ir para Home</Link>}/>

        </Routes>
      </BrowserRouter>
    )
}

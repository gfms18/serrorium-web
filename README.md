const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Div1login />}></Route>
            <Route path="/loginadministrador" element={<Loginadm />}></Route>
        </Routes>
    )
}

rotas vai ser o componente que vai ser responsavel pelas rotas 




 <Routes>

            <Route path="/" element={<Div1login />}></Route>
            <Route path="/loginadministrador" element={<Loginadm />}></Route>
 </Routes>
o Routes é onde vamos gerenciar as rotas e os caminhos para os componentes

o route é onde vamos definir o caminho e qual componente vai ser renderizado ao entrar pra esse caminho

<div class="a">
     <Link to="loginadministrador" className="a">Você é um administrador?</Link>
</div>

link vai ser responsavel por redirecionar para o componente clicado


 <Router>
    <Rotas />
</Router>

va no app, gerencia o componente de rotas
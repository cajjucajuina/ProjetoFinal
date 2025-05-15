import "./Header.css"

export default function Header() {
  return (
    <>
 <header>
    <div className="cabecalho"/>
      <div className="logo">
        <img src="imagens/logo-header.svg" alt="Logo do site" draggable="false"/>

              <div className="navegacao">
        <div className="botoes-nav">
      <nav>
          <button className="opcoes-ativa" onclick="novaaba(this, 'home')">Home</button>
          <button className="opcoes" onclick="novaaba(this, 'produtos')">Produtos</button>
          <button className="opcoes" onclick="novaaba(this, 'categorias')">Categorias</button>
          <button className="opcoes" onclick="novaaba(this, 'meuspedidos')">Meus Pedidos</button>
      </nav>
      </div>

      <section id="home" className="secao" style="display: none;">
      </section>

      <section id="produtos" className="secao" style="display: none;">
      </section>

      <section id="categorias" className="secao" style="display: none;">
      </section>

      <section id="meuspedidos" className="secao" style="display: none;">
      </section>

      </div>  
        </div>

      <div className="barra-pesquisa">
        <input type="search" name="barra" placeholder="Pesquisar produto..."/>
        <button className="lupa">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#8f8f8f" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
          </svg>
        </button>
      </div>

      <div className="botoes-header">
      <button className="btncinza" onclick="location.href='signinpage.html'">Cadastrar-se</button>
        <button className="btnrosa" onclick="location.href='loginpage.html'">Entrar</button>
        </div>
        

      <div className="carrinho" id="cart">
        <button className="cart" onclick="togglecart()">
            <img src="imagens/mini-cart.svg" alt="carrinho" width="24" height="24" draggable="false"/>
            </button>
            </div>
      </header>  
      </>
      )
      }
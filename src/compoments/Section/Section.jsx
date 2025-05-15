import "./Section.css"

export default function Section() {
  return (
    <>
<div className="carrossel">
        <div className="slides">
          <div className="slide-ativo">
            <div className="slide-1-textos">
            <div className="slide-1-pequenotitulo"><h6>Melhores ofertas personalizadas</h6></div>
            <div className="slide-1-titulo"><h1>Queima de<br/>stoque Nike 🔥</h1></div>
            <div className="slide-1-subtitulo"><p>Consequat culpa exercitation mollit nisi excepteur do<br/>do tempor laboris eiusmod irure consectetur.</p></div>
            <div className="slide-1-botao">
              <button className="btnrosa2" onclick="novaaba(this, 'produtos')">Ver Ofertas</button>
            </div>
            </div>
            <div className="slide-1-imagem">
              <img src="imagens/shoes.png" alt="sapato" draggable="false"/>
            </div>

           <div className="ornamento">
           <img src="imagens/ornament.svg" alt="ornament" draggable="false"/>
            </div>
          </div>


          <div className="slide">Oferta 2</div>
          <div className="slide">Oferta 3</div>
          <div className="slide">Oferta 4</div>
        </div>


        <div className="indicadores">
          <span className="indicador-ativo" onclick="mudarSlide(0)"></span>
          <span className="indicador" onclick="mudarSlide(1)"></span>
          <span className="indicador" onclick="mudarSlide(2)"></span>
          <span className="indicador" onclick="mudarSlide(3)"></span>
        </div>
      </div>

      <div class="promo-cards">
        <div class="titulo-promo"><h5>Coleções em destaque</h5></div>
      
        <div class="cards-container">
          <div class="card1">
            <div class="card1-content">
              <h5 class="percent">30% OFF</h5>
              <h1 class="titulo">Novo drop<br/>Supreme</h1>
              <div class="card1-btn">
                <button class="btnbranco" onclick="novaaba(this, 'produtos')">Comprar</button>
              </div>
              <div class="card1-image">
                <img src="imagens/camisa.png" alt="camisa" width="300" height="300" draggable="false"/>
              </div>
            </div>
          </div>
      
          <div class="card2">
            <div class="card2-content">
              <h5 class="percent">30% OFF</h5>
              <h1 class="titulo2">Coleção<br/>Adidas</h1>
              <div class="card1-btn">
                <button class="btnbranco" onclick="novaaba(this, 'produtos')">Comprar</button>
              </div>
              <div class="card2-image">
                <img src="imagens/shoes2.png" alt="shoes2" width="300" height="300" draggable="false"/>
              </div>
            </div>
          </div>
      
          <div class="card3">
            <div class="card3-content">
              <h5 class="percent">30% OFF</h5>
              <h1 class="titulo3">Novo<br/>Beats Bass</h1>
              <div class="card1-btn">
                <button class="btnbranco" onclick="novaaba(this, 'produtos')">Comprar</button>
              </div>
              <div class="card3-image">
                <img src="imagens/headphone.png" alt="headphone" width="300" height="300" draggable="false"/>
              </div>
            </div>
          </div>
        </div>

        <div class="colecoes-destaque">
          <h2>Coleções em destaque</h2>
          <div class="botoes-colecoes">
            <button>
              <img src="imagens/tshirt-_1_.svg" alt="Camisetas" draggable="false"/>
              <span>Camisetas</span>
            </button>
            <button>
              <img src="imagens/pants.svg" alt="Calças" draggable="false"/>
              <span>Calças</span>
            </button>
            <button>
              <img src="imagens/pants (1).svg" alt="Bonés" draggable="false"/>
              <span>Bonés</span>
            </button>
            <button>
              <img src="imagens/headphones_1.svg" alt="Headphones" draggable="false"/>
              <span>Headphones</span>
            </button>
            <button>
              <img src="imagens/sneakers.svg" alt="Tênis" draggable="false"/>
              <span>Tênis</span>
            </button>
          </div>
        </div>
      </div>   
      

      
<section class="produtos-em-alta">
  <div class="topo-secao">
    <h2>Produtos em alta</h2>
    <button class="ver-todos">Ver todos</button>
  </div>

  <div class="grid-produtos">
    <div class="produto-box">
      <div class="imagem-produto">
        <img src="https://via.placeholder.com/200x150" alt="Tênis"/>
      </div>
      <div class="info-produto">
        <span class="categoria">Tênis</span>
        <h3 class="titulo-produto">K-Swiss V8 - Masculino</h3>
        <div class="preco">
          <span class="preco-antigo">$200</span>
          <span class="preco-atual">$100</span>
        </div>
      </div>
    </div>
  </div>
</section>
      </>
      )
      }
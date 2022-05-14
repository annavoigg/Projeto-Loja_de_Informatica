//  temos 3 partes que compõe um componente em JavaScript:
import React from "react";
import './App.css';
import loja from './img/loja.jpg'


// segunda parte
// classe ou função 
// escolhendo classe :

class App extends React.Component{
    render(){
    return(

      <div>
      <header class="cabecalho">
      <h1 class="logo">
          <a href="index.html" title = "Loja de Informática do Obama" > Loja de Informática do Obama </a>
      </h1>
      <form action="" method="post">
          <input type="text" name="busca" id="busca" placeholder="Faça uma busca aqui!"/>
          
          <button> <i class="fa-solid fa-magnifying-glass"></i> </button>
         
      </form>
   </header>
     <nav className="menu">
         <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#contatos">Contatos</a></li>
         </ul>

         <div class="social-icons">
            <a href="#" class="btn-facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" class="btn-twitter"><i class="fa-brands fa-twitter"></i></a>
            <a href="#" class="btn-google"><i class="fa-brands fa-google"></i></a>
  
        </div>
     </nav>

     <main class="principal">

         <article class="sobre">
             <h2>Sobre Nós</h2>
             <img src={loja} alt="imagem de uma loja de informática com três pessoas, sendo dois homens e uma mulher. Mulher vestida... homem ao lado dela vestido... e homem à frente deles vestido..."/>
             <p>Somos uma empresa que nasceu apaixonada por tecnologia.
                 Nosso objetivo é prestar serviços com excelência e qualidade  na instalação e manutenção de computadores, notebooks e equipamentos de informática.</p>
                 
                 <p>Contamos com um laboratório equipado com grande quantidade de peças em estoque para atendimentos emergenciais.</p>

                 <p>Com a constante mudança da tecnologia, realizamos várias pesquisas de desenvolvimento para que nossos produtos e serviços sempre estejam atualizados. Os serviços que oferecemos são executados por profissionais com formação e experiência técnica a mais de 07 anos no mercado.
                     Prezamos o compromisso com nossos clientes, trabalhando com agilidade, produtos de qualidade e preço justo. Sabemos que o nosso sucesso se deve ao sucesso de nossos clientes, e é este motivo que nosso foco está em atender bem nosso cliente, seja através de manutenção e consertos ou melhoramento do sistema.</p>

                     <p>Oferecemos serviços a domicílio, inclusive a busca e entrega do seu equipamento, fazendo o orçamento sem compromisso.</p>
                     
                     <p>Relações de confiança e seriedade são valores praticados em nosso dia a dia, pois a satisfação dos nossos clientes e colaboradores é o que nos faz crescer e manter um lugar de destaque em nosso segmento.
                         Se ainda não é cliente da Loja de Informática dp Obama, entre em contato,  via telefone, ou e-mail, face e saiba mais informações sobre nossos produtos e serviços.</p>
                         
                         <h6 class="creditos">Texto retirado do site: guardiaoinformatica.com.br</h6>
         </article>
         <aside class="onde-estamos">
             <h2>Onde Estamos</h2>
             <p>Rua: Tito nº54 - Vila Romana - São Paulo - Brasil</p>
             
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.52748707274!2d-39.28678145023931!3d-14.795624603070642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x739aaf0cc0db597%3A0x9dfa10026b580036!2sAv.+Juc%C3%A1+Le%C3%A3o+-+Centro+Comercial%2C+Itabuna+-+BA!5e0!3m2!1spt-BR!2sbr!4v1449945134287%22%3E"></iframe>

             <h2>Contatos</h2>
             <ul>
                 <li><i class="fa-solid fa-phone"></i>(11) 9 0000-1111</li>
                 <li><i class="fa-brands fa-whatsapp"></i>(11) 9 0000-1111</li>
                 <li><i class="fa-solid fa-envelope"></i>gomesgiovanna006@gmail.com</li>
             </ul>
         </aside>

     </main>

     <section class="newsletter">
         <h3>Newsletter</h3>
         <p>Receba nossas promoções por e-mail.</p>
         <form action="" method="post">
             <input type="text" name="" id="" placeholder="Seu nome"/>
             <input type="email" name="" id="" placeholder="Seu e-mail"/>
             <button>Cadastrar</button>
         </form>
     </section>
     
     <footer class="rodape">
         <p>Loja do Obama - Todos os direitos reservados | Recriado por Giovanna Gomes Cortez &copy;</p>
     </footer>

     </div>
)
}
}
export default App;

// terceira parte: 

//puxando o nome do app pra dar export





//  TESTES 

// import React from 'react';
// import './App.css';

// function App(props){
// const name= "Giovanna";
// let idade= "20";
// const url = "http://s2.glbimg.com/xh-6m6zVudk6nZCSsQMAqSV5mHQ=/620x430/e.glbimg.com/og/ed/f/original/2016/01/13/presidente-barack-obama-faz-seu-ultimo-discurso-de-estado-da-uniao.jpg"
//   return (
//     <div className="App"> 
//     <h1>Hello World</h1>
//     <p className='App-paragrafo'> Essa é a minha primeira <br/> alteração no React</p>
//     <div className='estilo-p'>
//     <p>Olá, {name}</p>
//     <p>Minha idade é: {idade}</p>
//     </div>
//     <p> Barack Obama é o Ex presidente {props.pais}</p>
//     <img src= {url} alt="obama"/>
//     </div>
//   );
// }


//  TESTES  02

// class App extends React.Component{
//   render(){
//   return(
// <div className='App'>
//   <p>Jailson</p>
// </div>
//   )
// }
// }
// export default App;

//  TESTES ENDS



// ****************** CODIGO PROFESSOR **************************


// /3 partes que compões um componente em JavaScript/

/**Primeira Parte */

// import React from "react";

// import "./App.css";



/**Segunda Parte

 * Classe ou Função

 * Classe

*/





// class App extends React.Component{

// render(){

//   return(

//     <div className="App">

//       <header className="App-cabecalho">

//         <h1>

//         <a href="#index.html" title="Loja de Informática do Obama">Loja de Informática do Obama</a>

//         </h1>

//         <form>

//           <input type="text" name="pesquisa" id="pesquisa" placeholder="Faça uma busca"/>

//           <button></button>

//         </form>

//       </header>

//     </div>

//   );

// }

// }

// /**Terceira Parte */

// export default App;

// ****************************** FIM CODIGO PROFESSOR ********************* 



'use client'

import { useState } from "react";

import { createParticipante } from '@/app/lib/actions';
import { formDataParticipante } from "../lib/definitions_btt";
import { getDBConnection } from "../lib/database";


export default function Page() {
{ /* */}
  const backgroundImageStyle = {
    backgroundImage: 'url(https://greentrekker.pt/site/assets/files/100095/31.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'auto',
    color: 'beige',
    marginTop: 50,
    padding: 0,
};
    
    //const Form = () => {
    const[tipoParticipante, setTipoParticipante] = useState<'equipa' | 'individual'>();

    const handleSelecaoTipoParticipante = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setTipoParticipante(event.target.value as 'equipa' | 'individual');
    };
    
    /*
      const [nomeEquipa, setNomeEquipa] = useState('');
      const [responsavelEquipa, setResponsavelEquipa] = useState('');
      const [numeroElementos, setNumeroElementos] = useState('');
      const [idadeElementos, setIdadeElementos] = useState('');
      const [generoEquipa, setGeneroEquipa] = useState('');
      const [enderecoInstitucional, setEnderecoInstitucional] = useState('');
      const [telefoneEquipa, setTelefoneEquipa] = useState('');
      const [emailEquipa, setEmailEquipa] = useState('');

      const [nomeIndividual, setNomeIndividual] = useState('');
      const [generoIndividual, setGeneroIndividual] = useState('');
      const [morada, setMorada] = useState('');
      const [codigoPostal, setCodigoPostal] = useState('');
      const [concelho, setConcelho] = useState('');
      const [dataNascimento, setDataNascimento] = useState('');
      const [identificacao, setIdentificacao] = useState('');
      const [telefoneIndividual, setTelefoneIndividual] = useState('');
      const [emailIndividual, setEmailIndividual] = useState('');
      const [hipertensao, setHipertensao] = useState('');
      const [insuficienciaCardiaca, setInsuficienciaCardiaca] = useState('');
      const [asma, setAsma] = useState('');
      const [epilepsia, setEpilepsia] = useState('');
      const [insuficienciaRenal, setInsuficienciaRenal] = useState('');
      const [outraPatologia, setOutraPatologia] = useState('');

      const [isSubmitting, setIsSubmitting] = useState(false);
      const [errorMessage, setErrorMessage] = useState('');
*/
    const handleSubmit = (event: React.FormEvent) => {event.preventDefault();
        //setIsSubmitting(true);
        console.log('Formulário submetido com a opção ', tipoParticipante)
      };
    
    return (
    // Os elementos devem ser inseridos entre a tag main (AS).
    <main>
      <div style={backgroundImageStyle}>
      
        {/* (AS) How to Align Form Elements to Center using Tailwind CSS? 
          https://www.geeksforgeeks.org/how-to-align-form-elements-to-center-using-tailwind-css/ 
        */}

        <form /*action={createParticipante}*/ className="flex flex-col items-center" onSubmit={(event) =>
          {
            event.preventDefault();
            handleSubmit(event);
          }
        }>

          <h1 className="text-3xl font-black bg-blue-900 rounded-lg mt-10 mb-5">Ficha de inscrição</h1>
          
          {/* 'the htmlFor attribute ensures that each form field has a descriptive text label'
          (https://nextjs.org/learn/dashboard-app/improving-accessibility) */}
          
          <div className="text-2xl font-bold bg-blue-900 rounded-lg mt-5 mb-5">
            <label htmlFor="tipologiaParticipante">Tipologia de participante</label>
            <select name="tipologiaParticipante" id="tipologia-participante" required value={tipoParticipante} onChange={handleSelecaoTipoParticipante}>
              <option value=""></option>
              <option value="equipa">Equipa</option>
              <option value="individual" defaultValue="#dc2626">Individual</option>
            </select>
          </div>
          <br />
         
          <div className={`tipo-equipa ${tipoParticipante !== 'equipa' ? 'hidden' : ""}`}>  
            
          <h3 className="flex flex-col items-center text-amber-200 text-1xl font-bold bg-blue-900 rounded-lg mt-5 mb-5" >Dados da equipa</h3>

            <div className="flex flex-col font-semibold text-amber-200 bg-blue-900 rounded-lg p-5 mb-5">
              
              <label htmlFor="nome-equipa">Nome da equipa</label>
              <input type="text" name="nomeEquipa"/>
              <br />

              <label htmlFor="responsavel-equipa">Responsável pela equipa</label>
              <input type="text" name="responsavelEquipa"/>
              <br />

              <label htmlFor="numero-elementos">Número de elementos da equipa</label>
              <input type="text" name="numeroElementos"/>
              <br />

              <label htmlFor="genero-equipa">Género dos membros da equipa</label>
              <select name="generoEquipa" id="genero-equipa">
                <option value=""></option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
              </select>
              <br />

              <label htmlFor="endereco-institucional">Endereço institucional</label>
              <input type="text" name="enderecoInstitucional"/>
              <br />

              <label htmlFor="contacto" className="flex flex-col items-center pt-3 pb-2">Contacto</label>
              <label htmlFor="telefone">Telefone</label>
              <input type="text" name="telefoneEquipa"/>
              <br />

              <label htmlFor="e-mail">E-mail</label>
              <input type="text" name="emailEquipa"/>
              <br />

              <label htmlFor="prova">ID da prova</label>
              <input type="text" name="idProva"/>
            </div>
          </div>

          <div className={`tipo-individual ${tipoParticipante !== 'individual' ? 'hidden' : ""}`}>
            
            <h3 className="flex flex-col items-center text-orange-500 text-1xl font-bold bg-blue-900 rounded-lg mt-5 mb-5">Dados do participante individual</h3>
            
            <div className="flex flex-col font-semibold text-orange-500 bg-blue-900 rounded-lg p-5 mb-10">

              <label htmlFor="nome">Nome</label>
              <input type="text" name="nomeIndividual"/>
              <br />

              <label htmlFor="idade">Idade</label>
              <input type="text" name="idadeIndividual"/>
              <br />

              <label htmlFor="genero-individual">Género</label>
              <select name="generoIndividual" id="genero-individual">
                <option value=""></option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
              </select>
              <br />

              <label htmlFor="morada">Morada</label>
              <textarea name="morada" id="morada"></textarea>
              <br />

              <label htmlFor="codigo-postal">Código postal</label>
              <input type="text" name="codigoPostal" />
              <br />

              <label htmlFor="concelho">Concelho</label>
              <input type="text" name="concelho"/>
              <br />

              <label htmlFor="data-nascimento">Data de nascimento</label>
              <input type="date" name="dataNascimento"/>
              <br />

              <label htmlFor="identificacao">Documento de identificação</label>
              <input type="text" name="identificacao"/>
              <br />

              <label htmlFor="contacto" className="flex flex-col items-center pt-3 pb-2">Contacto</label>
              <label htmlFor="telefone">Telefone</label>
              <input type="text" name="telefoneIndividual"/>
              <br />
              <label htmlFor="e-mail">E-mail</label>
              <input type="text" name="emailIndividual"/>
              <br />

              <p>Observações:</p>
              <br />
              <p>Indique se sofre de alguma das seguintes patologias</p>
              <br />
              <div>
                <input type="checkbox" id="hipertensao" name="hipertensao" value="hipertensao" />
                <label htmlFor="hipertensao">Hipertensão</label>
              </div>
            
              <div>
                <input type="checkbox" id="insuficiencia-cardiaca" name="insuficienciaCardiaca" value="insuficiencia-cardiaca" />
                <label htmlFor="hipertensao">Insuficiência cardíaca</label>
              </div>

              <div>
                <input type="checkbox" id="asma" name="asma" value="asma" />
                <label htmlFor="hipertensao">Asma</label>
              </div>

              <div>
                <input type="checkbox" id="epilepsia" name="epilepsia" value="epilepsia" />
                <label htmlFor="hipertensao">Epilepsia</label>
              </div>

              <div>
                <input type="checkbox" id="insuficiencia-renal" name="insuficienciaRenal" value="insuficiencia-renal" />
                <label htmlFor="hipertensao">Insuficiência renal</label>
              </div>
              <br />

              <p>Se sofrer de outra patologia, indique qual</p>
              <label htmlFor="outra-patologia"></label>
              <textarea name="outraPatologia" id="outra-patologia"></textarea>
              <br />
            </div>
          </div>

          {/*<input type="submit" value="Submeter"/>*/}

          <button className="bg-blue-900 hover:text-stone-200 text-xl text-amber-200 font-bold py-2 px-4 my-10 rounded" onSubmit={handleSubmit}>Submeter</button>
        </form>
      </div>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-2">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
    {/* Coluna 1 - Sobre */}
    <div>
      <h3 className="text-lg font-bold mb-2">Sobre o Campeonato</h3>
      <p className="text-sm">
        Somos apaixonados pelo desafio, quebrando barreiras e realizando sempre o melhor possível junto com você. 
        Promovemos as maiores competições de Portugal! Conheça nossas competições e faça parte deste grupo de apaixonados pelo desafio.
      </p>
    </div>
    {/* Coluna 2 - Links Rápidos */}
    <div>
      <h3 className="text-lg font-bold mb-2">Links Rápidos</h3>
      <ul className="text-sm space-y-1">
        <li>
          <a href="/calendario" className="hover:underline">
            Calendário
          </a>
        </li>
        <li>
          <a href="/provasfuturas" className="hover:underline">
            Provas Futuras
          </a>
        </li>
        <li>
          <a href="/regulamento" className="hover:underline">
            Regulamento
          </a>
        </li>
        <li>
          <a href="/form-participante2" className="hover:underline">
            Participantes
          </a>
        </li>
        <li>
          <a href="/form-organizador" className="hover:underline">
            Organizadores
          </a>
        </li>
      </ul>
    </div>
    {/* Coluna 3 - Redes Sociais */}
    <div>
      <h3 className="text-lg font-bold mb-2">Nos Siga</h3>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-blue-500">
          Facebook
        </a>
        <a href="#" className="hover:text-blue-400">
          Twitter
        </a>
        <a href="#" className="hover:text-pink-500">
          Instagram
        </a>
      </div>
    </div>
  </div>
  <div className="text-center text-sm text-gray-500 mt-6">
    © {new Date().getFullYear()} Campeonato Nacional de BTT. Todos os direitos reservados.
  </div>
</footer>
    </main>
    );
  //};
}
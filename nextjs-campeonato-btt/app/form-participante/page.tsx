'use client'

import { useState } from "react";

export default function Page() {
{ /* */}
  const backgroundImageStyle = {
    backgroundImage: 'url(https://greentrekker.pt/site/assets/files/100095/31.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'auto',
    color: 'lime',
    margin: 0,
    padding: 0,
    
};

    const[tipoParticipante, setTipoParticipante] = useState<'equipa' | 'individual'>();

    const handleSelecaoTipoParticipante = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setTipoParticipante(event.target.value as 'equipa' | 'individual');
    };
    
    const handleSubmit = (event: React.FormEvent) => {event.preventDefault();

        console.log('Formulário submetido com a opção ', tipoParticipante)

    }
    
    return (
    // Os elementos devem ser inseridos entre a tag main (AS).
    <main>
      <div style={backgroundImageStyle}>
      
        {/* (AS) How to Align Form Elements to Center using Tailwind CSS? 
          https://www.geeksforgeeks.org/how-to-align-form-elements-to-center-using-tailwind-css/ 
        */}

        <form action="" method="" className="flex flex-col items-center">

          <h1 className="text-3xl font-black bg-blue-900 rounded-lg mt-10 mb-5">Ficha de inscrição</h1>
          
          {/* 'the htmlFor attribute ensures that each form field has a descriptive text label'
          (https://nextjs.org/learn/dashboard-app/improving-accessibility) */}
          
          <div className="text-2xl font-bold bg-blue-900 rounded-lg mt-5 mb-5">
            <label htmlFor="tipologia-participante">Tipologia de participante</label>
            <select name="tipologia-participante" id="tipologia-participante" required value="{tipoParticipante}" onChange={handleSelecaoTipoParticipante}>
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
              <input type="text" name="nome-equipa"/>
              <br />

              <label htmlFor="responsavel-equipa">Responsável pela equipa</label>
              <input type="text" name="responsavel-equipa"/>
              <br />

              <label htmlFor="numero-elementos">Número de elementos da equipa</label>
              <input type="text" name="numero-elementos"/>
              <br />

              <label htmlFor="genero-equipa">Género dos membros da equipa</label>
              <select name="genero-equipa" id="genero-equipa">
                <option value=""></option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
              </select>
              <br />

              <label htmlFor="endereco-institucional">Endereço institucional</label>
              <input type="text" name="endereco-institucional"/>
              <br />

              <label htmlFor="contacto">Contacto</label>
              <label htmlFor="telefone">Telefone</label>
              <input type="number" name="telefone"/>
              <br />

              <label htmlFor="e-mail">E-mail</label>
              <input type="text" name="e-mail"/>
              <br />
            </div>
          </div>

          <div className={`tipo-individual ${tipoParticipante !== 'individual' ? 'hidden' : ""}`}>
            
            <h3 className="flex flex-col items-center text-orange-500 text-1xl font-bold bg-blue-900 rounded-lg mt-5 mb-5">Dados do participante individual</h3>
            
            <div className="flex flex-col font-semibold text-orange-500 bg-blue-900 rounded-lg p-5 mb-10">

            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome"/>
            <br />

            <label htmlFor="idade">Idade</label>
            <input type="text" name="idade"/>
            <br />

            <label htmlFor="genero-individual">Género</label>
            <select name="genero-individual" id="genero-individual">
              <option value=""></option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>
            <br />

            <label htmlFor="morada">Morada</label>
            <textarea name="morada" id="morada"></textarea>
            <br />

            <label htmlFor="codigo-postal">Código postal</label>
            <input type="number" name="codigo-postal" />

            <label htmlFor="concelho">Concelho</label>
            <input type="text" name="concelho"/>

            <label htmlFor="data-nascimento">Data de nascimento</label>
            <input type="date" name="data-nascimento"/>
            <br />

            <label htmlFor="identificacao">Documento de identificação</label>
            <input type="number" name="identificacao"/>
            <br />

            <label htmlFor="contacto">Contacto</label>
            <label htmlFor="telefone">Telefone</label>
            <input type="text" name="telefone"/>
            <label htmlFor="e-mail">E-mail</label>
            <input type="text" name="e-mail"/>

            <p>Observações:</p>
            <br />
            <p>Indique se sofre de alguma das seguintes patologias</p>
            <br />
            <div>
              <input type="checkbox" id="hipertensao" name="hipertensao" value="hipertensao" />
              <label htmlFor="hipertensao">Hipertensão</label>
            </div>
            
            <div>
              <input type="checkbox" id="insuficiencia-cardiaca" name="insuficiencia-cardiaca" value="insuficiencia-cardiaca" />
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
              <input type="checkbox" id="insuficiencia-renal" name="insuficiencia-renal" value="insuficiencia-renal" />
              <label htmlFor="hipertensao">Insuficiência renal</label>
            </div>

            <p>Se sofrer de outra patologia, indique qual</p>
            <label htmlFor="outra-patologia"></label>
            <textarea name="outra-patologia" id="outra-patologia"></textarea>
            <br />
            </div>
          </div>

          {/*<input type="submit" value="Submeter"/>*/}

          <button className="bg-indigo-500 hover:text-emerald-100 text-xl text-amber-200 font-bold py-2 px-4 my-10 rounded" onSubmit={handleSubmit}>Submeter</button>
        </form>
      </div>
    </main>
    );
  }
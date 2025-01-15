export default function Page() {
    return (
    // Os elementos devem ser inseridos entre a tag main (AS).
    <main>
      <h1>Ficha de inscrição</h1>
      
      {/* 'the htmlFor attribute ensures that each form field has a descriptive text label'
      (https://nextjs.org/learn/dashboard-app/improving-accessibility) */}
      <label htmlFor="tipologia-participante">Tipologia de participante</label>
      <select name="tipologia-participante" id="tipologia-participante" required>
        <option value=""></option>
        <option value="equipa">Equipa</option>
        <option value="individual">Individual</option>
      </select>
      <br />

      <h3>Dados da equipa</h3>

      <div>
        <label htmlFor="nome-equipa">Nome da equipa</label>
        <input type="text" name="nome-equipa"/>
      </div>
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

      <h3>Dados do participante individual</h3>

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
    </main>
    );
  }
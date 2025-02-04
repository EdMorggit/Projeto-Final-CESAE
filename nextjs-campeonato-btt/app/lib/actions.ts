'use server';

export async function createParticipante(formDataParticipante : FormData) {
    const rawFormDataEquipa = {
        tipologiaParticipante: formDataParticipante.get('tipologiaParticipante'),
        nomeEquipa: formDataParticipante.getAll('nomeEquipa'),
        responsavelEquipa: formDataParticipante.getAll('responsavelEquipa'),
        numeroElementos: formDataParticipante.getAll('numeroElementos'),
        generoEquipa: formDataParticipante.getAll('generoEquipa'),
        enderecoInstitucional: formDataParticipante.getAll('enderecoInstitucional'),
        telefoneEquipa: formDataParticipante.get('telefoneEquipa'),
        emailEquipa: formDataParticipante.get('emailEquipa')
    }

    const rawFormDataIndividual = {
        nomeIndividual: formDataParticipante.getAll('nomeIndividual'),
        idadeIndividual: formDataParticipante.get('idadeIndividual'),
        generoIndividual: formDataParticipante.get('generoIndividual'),
        morada: formDataParticipante.getAll('morada'),
        codigoPostal: formDataParticipante.getAll('codigoPostal'),
        concelho: formDataParticipante.getAll('concelho'),
        dataNascimento: formDataParticipante.get('dataNascimento'),
        identificacao: formDataParticipante.get('identificacao'),
        telefoneIndividual: formDataParticipante.get('telefoneIndividual'),
        emailIndividual: formDataParticipante.get('emailIndividual'),
        hipertensao: formDataParticipante.get('hipertensao'),
        insuficienciaCardiaca: formDataParticipante.get('insuficienciaCardiaca'),
        asma: formDataParticipante.get('asma'),
        epilepsia: formDataParticipante.get('epilepsia'),
        insuficienciaRenal: formDataParticipante.get('insuficienciaRenal'),
        outraPatologia: formDataParticipante.getAll('outraPatologia')
    }
    
    //await sql `
    //INSERT INTO participante_equipa (nome_equipa, responsavel_equipa, numero_elementos_equipa, endereco_institucional, telefone_equipa, email_equipa, id_prova)`
}
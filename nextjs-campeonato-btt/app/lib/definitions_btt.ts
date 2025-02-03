
export type formDataParticipante = {
    idEquipa: string;
    tipologiaParticipante: 'equipa' | 'individual';
    nomeEquipa: string;
    responsavelEquipa: string;
    numeroElementos: string;
    generoEquipa: 'masculino' | 'feminino';
    enderecoInstitucional: string;
    telefoneEquipa: string;
    emailEquipa: string;

    idIndividual: string;
    nomeIndividual: string;
    generoIndividual: 'masculino' | 'feminino';
    morada: string;
    codigoPostal: string;
    concelho: string;
    dataNascimento: Date;
    identificacao: string;
    telefoneIndividual: string;
    emailIndividual: string;
    hipertensao: 1 | 0;
    insuficienciaCardiaca: 1 | 0;
    asma: 1 | 0;
    epilepsia: 1 | 0;
    insuficienciaRenal: 1 | 0;
    outraPatologia: string;
}
function textoTermoAditivo (dadosAluno, dadosEmpresa, dadosEstagio) {
    return( 'TERMO ADITIVO DE CONTRATO DE ESTÁGIO' +
"A  Empresa" + dadosEmpresa.nomeEmpresa + ",  estabelecida  no  endereço" + dadosEmpresa.enderecoEmpresa + ',  cidade  de '+ dadosEmpresa.cidadeEmpresa + ',  Estado '+dadosEmpresa.estadoEmpresa + 
'CEP.'+dadosEmpresa.CEPEmpresa+ ' Fone. '+dadosEmpresa.foneEmpresa+' CNPJ: '+dadosEmpresa.CNPJ+', designada EMPRESA CONCEDENTE e o ESTAGIÁRIO, Sr. '+dadosAluno.nomeAluno+
'estudante,  domiciliado  à ' +dadosAluno.enderecoAluno+', cidade de '+dadosAluno.cidadeAluno+','+dadosAluno.estadoAluno+', CEP: '+dadosAluno.CEPAluno+',  Fone: '+dadosAluno.telAluno+', CPF nº '+dadosAluno.CPF+
', aluno  do curso de'+dadosAluno.curso+', número USP '+dadosAluno.NUSP+
', e como INTERVENIENTE a instituição de ensino ESCOLA POLITÉCNICA DA USP, com endereço à Av. Prof. Luciano Gualberto, travessa 3, nº 380, CEP.: 05508-900, cidade de São Paulo, Estado de São Paulo, CNPJ nº 63.025.530/0024-09. Fica alterada a(s) seguinte(s cláusula(s), do TERMO DE COMPROMISSO (Contrato de Estágio), que teve sua data de início em'+
dadosEstagio.dataInicio+'(informar  a  data  de  início  do  contrato  que  está  sendo  alterado  por  este aditivo), nos termos da Lei nº 11.788/2008, e nos termos da Resolução USP n°  5528/2009 '+
'1.  O estágio fica prorrogado (limitada a duração total do estágio a 2 anos), até a data de '+dadosEstagio.dataFim+
'2.  O estagiário cumprirá'+ dadosEstagio.horas + 'horas semanais. O horário de estágio será combinado de acordo com as conveniências mútuas, ressalvadas as horas de aulas, provas e de  outros trabalhos didáticos  e as limitações dos meios de transportes. '+
'3.  O  Estagiário  receberá  a  Bolsa  de  Complementação  Educacional  de  R$' + dadosEstagio.valor+', com pagamento mensal calculado sobre as horas de presença demonstradas em cartão de ponto ou outra forma de apreciação, a critério da Concedente.'+
'4.  A CONCEDENTE designa o(a) Sr.(a) '+dadosEstagio.nomeSupervisor+'(deve ser a mesma pessoa que assina o plano de estágio) que ocupa o cargo de' + dadosEstagio.cargoSupervisor+'para ser o SUPERVISOR INTERNO do Estágio que será por ele(a) programado.'+
'5.  O  Estagiário  receberá  o  valor  de  R$ '+dadosEstagio.valorVT+',  referente  o  Vale Transporte.'+
'6.  O Estagiário receberá os seguintes benefícios adicionais:'+dadosEstagio.beneficiosAdicionais+
'As demais Cláusulas permanecem inalteradas. E por estarem de acordo com os termos do presente instrumento, as partes rubricam a folha de Instruções de Preenchimento e  assinam este Termo Aditivo em 03 (três) vias, para todos os fins e efeitos de direito.'+
'São Paulo, {dia} de {mês} de {ano}\n________________________________________ \nCONCEDENTE \n__________________________________________ \nESTAGIÁRIO \n _________________________________________ \n EPUSP - INTERVENIENTE');
}

export default textoTermoAditivo;
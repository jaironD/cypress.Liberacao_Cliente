/// <reference types="cypress" />

context('Gerar chave manual', () =>{
  it('Possibilidade de gerar a chave manual', () =>{
    cy.visit('192.168.15.224:3001/login')

    var login ={
      nome:'JAIRON',
      senha:'2019',
    }

    var registro = {
      reg:'05828526000188',
      dias:'20',
    }

    cy.get('[name="nome"]')
      .type(login.nome)

    cy.get('[name="senha"]')    
      .type(login.senha)

    cy.get('#btnLogar')
      .click()

    cy.get('#registro')
      .type(registro.reg)

    cy.get('#dias')
      .type(registro.dias)

    cy.get('#enviar')
      .click()
    
    cy.get('#codigo').should(`not.be.empty`)
      
  })

  it('Possibilidade de bloquear manualmente', () =>{
    cy.visit('192.168.15.224:3001/login')

    var login ={
    nome:'JAIRON',
    senha:'2019',
    }

    var registro = {
    reg:'05828526000188',
    dias:'20',
    }

    cy.get('[name="nome"]')
      .type(login.nome)

    cy.get('[name="senha"]')    
      .type(login.senha)

    cy.get('#btnLogar')
      .click()

    cy.get('.navbtn')
      .contains('GERENCIAR CLIENTES')
      .click()

    cy.get('#select_campo')
      .select('CPF / CNPJ')
      .should('have.value', '3')

    cy.get('#input_stringBusca')
      .type(registro.reg)
    
    cy.get("#faBtn")
      .click()
      
      //cy.get('select.select_table').select('3: BLOQUEADO')
      //    .should('have.value', '{"idCliente":"303","statusAntigo":"4", "statusNovo":"3"}')

      //cy.get('#btnAtualizar')
      //    .click()
  })

  it('Gerar mensagem especifica', () =>{
    cy.visit('192.168.15.224:3001/login')

    var login ={
    nome:'JAIRON',
    senha:'2019',
    }

    var registro = {
    reg:'05828526000188',
    dias:'20',
    }

    var msg = {
      msgAuto: 'Testando o cadastro automatico da mensagem'
    }

    var link = {
      lk:'https://www.google.com.br'
    }

    cy.get('[name="nome"]')
      .type(login.nome)

    cy.get('[name="senha"]')    
      .type(login.senha)

    cy.get('#btnLogar')
      .click()

    cy.get('.navbtn')
      .contains('MENSAGENS')
      .click()

    cy.get('a.btn.btn-primary')
      .contains('CADASTRAR')
      .click()

    cy.get('#text_area_msg')
      .type(msg.msgAuto)

    cy.get('#select_ativarPopUp')
      .select('SIM')
      .should('have.value', 'true')

    cy.get('#select_msgAtiva')
      .select('NAO')
      .should('have.value', 'false')

    cy.get('#select_clienteStatus')
      .select('3: BLOQUEADO')
      .should('have.value', '3')

    cy.get('#select_estado')
      .select('GO')
      .should('have.value', '9')

    cy.get('#select_cidade')
      .select('ACREUNA')
      .should('have.value', '3')

    cy.get('#input_link')
      .type(link.lk)

    cy.get('#btn_salvarMensagem')
      .click()
    })

  it('Enviar Arquivo', () =>{
    cy.visit('192.168.15.224:3001/login')

      var login ={
      nome:'JAIRON',
      senha:'2019',
      }

    cy.get('[name="nome"]')
      .type(login.nome)

    cy.get('[name="senha"]')    
      .type(login.senha)

    cy.get('.navbtn')
      .contains('ARQUIVOS')
    })
})

Feature: Login na Aplicação


    Efetuar Login na aplicação com credenciais válidas e inválidas

    Background:
        Given que esteja na Plataforma pro

    Scenario: Realizar Login com sucesso
        When entro com o email e senha
        When clico no botao de Entrar
        Then verifico que o Login deve ser realizado com sucesso

    

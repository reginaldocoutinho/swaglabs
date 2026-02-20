# Sauce Demo – Plano de Teste

---

## 1. Introdução

- **Projeto:** Ecommerce “Swag Labs” (versão 1.0.0)  
- **Endereço:** https://www.saucedemo.com/  
- **Código do Projeto:** PJR-2026-ESL  
- **Responsável:** Reginaldo Coutinho  

---

## 2. Objetivo

Este Plano de Teste descreve a estratégia, recursos e cronograma necessários para validar as funcionalidades principais do Ecommerce Swag Labs, garantindo que o usuário consiga:

- Realizar login  
- Visualizar o catálogo de produtos  
- Adicionar e remover itens do carrinho  
- Finalizar a compra com sucesso  

---

## 3. Público-alvo

- Desenvolvedores  
- Gerentes de Projeto  
- Equipe de QA  
- Product Owner  

---

## 4. Escopo

### In-scope

- Testes funcionais de UI  
- Testes de Smoke  
- Testes Cross-Browser  
- Fluxo completo de compra (Login → Checkout)  

### Out-of-scope

- Testes de Performance  
- Testes de Integração de APIs  

---

## 5. Funcionalidades a serem testadas

### Login

- Login válido  
- Login inválido  
- Usuário bloqueado  
- Validação de mensagens de erro  

### Catálogo de Produtos

- Exibição correta dos produtos  
- Funcionamento do botão “Add to Cart”  
- Funcionamento dos filtros de ordenação  

### Carrinho

- Exibição correta dos itens adicionados  
- Atualização de quantidade  
- Remoção de itens  
- Redirecionamentos corretos  

### Checkout

- Validação dos campos obrigatórios  
- Exibição correta das informações do pedido  
- Finalização da compra com mensagem de confirmação  

---

## 6. Análise de Riscos

| Área     | Risco                                         | Impacto  |
|----------|----------------------------------------------|----------|
| Login    | Usuário válido não conseguir logar           | Alto     |
| Catálogo | Produtos não exibidos                        | Alto     |
| Carrinho | Itens não adicionados corretamente           | Alto     |
| Checkout | Pedido finalizado com valores incorretos     | Crítico  |

---

## 7. Estratégia de Testes

### Tipos de Teste

- Testes Manuais Funcionais  
- Testes Exploratórios  
- Testes de Regressão  
- Testes de Smoke  
- Testes de Aceite  
- Automação de testes E2E  

### Critérios de Entrada

- Ambiente disponível  
- Requisitos definidos  

### Critérios de Saída

- 100% dos testes críticos executados  
- Nenhum bug crítico aberto  
- Cobertura mínima de 80% dos cenários planejados  

---

## 8. Ferramentas

- Cypress / Selenium  
- Cucumber (BDD)  
- Jira  
- Git / GitHub  
- Jenkins  
- VSCode  

---

## 9. Cronograma

| Etapa     | Atividade                                           |
|------------|----------------------------------------------------|
| Login      | Casos de teste, execução manual e automação        |
| Catálogo   | Casos de teste, execução manual e automação        |
| Carrinho   | Casos de teste, execução manual e automação        |
| Checkout   | Casos de teste, execução manual e automação        |

---

## 10. Observações

Este documento é um artefato vivo e poderá ser atualizado conforme mudanças de requisitos ou cronograma do projeto.

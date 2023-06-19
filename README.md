# Codeceptjs-mobile - qazando-automation

Projeto de automação de testes Mobile utilizando o CodeceptJS

## Boas vindas ao repositório do projeto de Automação de testes Mobile!

Olá, eu sou a Fernanda, esse projeto foi produzido por mim para apresentação de uma Talk do capítulo de QA da empresa em que trabalho.

# Instruções para utilizar o projeto:

## 🗒 Antes de começar

1. Clone o repositório

   - `git clone https://github.com/NandaTMarques/qazando-automation.git`.
   - Entre na pasta do repositório que você acabou de clonar:
     - `cd qazando-automation`;

2. Digite o seguinte comando no terminal para instalar as dependências:
     - `npm install`

## Aplicativos de Suporte

NodeJs (last version) [download](https://nodejs.org/pt-br/download)

Visual Studio Code (Last version) [download](https://code.visualstudio.com/download)

Android Studio (testes no Android) [download](https://developer.android.com/studio)

XCode (testes no iOS) [download](https://xcodereleases.com/)

Appium Inspector (last version) [download](https://github.com/appium/appium-inspector/releases)

---

## Testes

### Pré requisitos

1. Appium estar executando
2. Ter um emulador de pé ou um celular para desenvolvimento conectado via USB

### Executando testes no Android

Para executar os testes rode o comando `npm run android --verbose`.

Caso prefira testar somente uma tag você pode executar o teste da seguinte forma: `npm run android -- --grep "@ErroNoLogin" ` (nesse caso testa apenas os testes com a tag @ErrorNoLogin serão executados).

Para rodar os testes no device físico execute o comando `npm run androidDeviceReal` ou `npm run androidDeviceReal -- --grep "@TalkTest"` para rodar o teste com as tags.

Para executar os testes e gerar um relatório rode o comando `npm run report`.

### Executando testes no iOS

Para executar os testes rode o comando `npm run ios --verbose`.

Caso prefira testar somente uma tag você pode executar o teste da seguinte forma: `npm run ios -- --grep "@ErroNoLogin" ` (nesse caso testa apenas os testes com a tag @ErrorNoLogin serão executados).

---

### Para mais informações sobre o Framework Codeceptjs, acesse a sua documentação [Link da Documentação AQUI](https://codecept.io/).

Feito com ❤️ por Fernanda Teixeira Marques 👋🏽 [Entre em contato!](https://www.linkedin.com/in/fernandadesenvolvedoraweb/)

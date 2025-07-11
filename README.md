# NLW Agents 🤖

> Uma aplicação completa de gerenciamento de salas e perguntas, desenvolvida durante o NLW (Next Level Week) da Rocketseat.

## 🎯 Sobre o Projeto

O **NLW Agents** é uma aplicação web full-stack que permite criar salas virtuais onde usuários podem fazer perguntas e receber respostas. O projeto demonstra conceitos modernos de desenvolvimento web utilizando tecnologias de ponta tanto no frontend quanto no backend.

### ✨ Principais Características
- 🏠 Criação e gerenciamento de salas virtuais
- ❓ Sistema de perguntas e respostas
- 📱 Interface responsiva e moderna
- 🔒 Validação robusta de dados
- 🚀 Performance otimizada
- ♿ Componentes acessíveis

## 🛠️ Stack Tecnológica

<table>
<tr>
<td>

### Backend
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) **Node.js** - Runtime JavaScript
- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) **TypeScript** - Superset tipado do JavaScript
- ![Fastify](https://img.shields.io/badge/Fastify-000000?style=flat&logo=fastify&logoColor=white) **Fastify** - Framework web rápido e eficiente
- ![Drizzle](https://img.shields.io/badge/Drizzle-C5F74F?style=flat&logo=drizzle&logoColor=black) **Drizzle ORM** - ORM moderno para TypeScript
- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white) **PostgreSQL** - Banco de dados relacional
- ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white) **Docker** - Containerização
- **pgvector** - Extensão para vetores no PostgreSQL
- **Zod** - Validação de esquemas TypeScript
- **Biome** - Linter e formatador de código

</td>
<td>

### Frontend
- ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) **React** - Biblioteca para interfaces de usuário
- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) **TypeScript** - Superset tipado do JavaScript
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) **Vite** - Build tool moderna
- ![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=flat&logo=reactrouter&logoColor=white) **React Router** - Roteamento do lado do cliente
- ![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?style=flat&logo=reactquery&logoColor=white) **TanStack Query** - Gerenciamento de estado servidor
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white) **Tailwind CSS** - Framework CSS utilitário
- **React Hook Form** - Gerenciamento de formulários
- **Radix UI** - Componentes UI acessíveis
- **Lucide React** - Ícones SVG
- **Day.js** - Manipulação de datas

</td>
</tr>
</table>

## 🏗️ Arquitetura do Projeto

```
nlw-agents/
├── 🗄️ server/          # Backend API
│   ├── 📁 src/
│   │   ├── 🗃️ db/      # Configuração do banco de dados
│   │   │   ├── connection.ts
│   │   │   ├── seed.ts
│   │   │   ├── migrations/
│   │   │   └── schema/
│   │   ├── 🌐 http/    # Rotas da API
│   │   │   └── routes/
│   │   └── 🔧 services/ # Serviços externos
│   ├── 🐳 docker/      # Configuração do PostgreSQL
│   └── 📦 package.json
└── 🎨 web/             # Frontend React
    ├── 📁 src/
    │   ├── 🧩 components/  # Componentes React
    │   ├── 📄 pages/       # Páginas da aplicação
    │   ├── 🔗 http/        # Hooks para API
    │   └── 🛠️ lib/         # Utilitários
    └── 📦 package.json
```

## 📦 Funcionalidades

| Funcionalidade | Status | Descrição |
|---|:---:|---|
| 🏠 Criação de salas virtuais | ✅ | Usuários podem criar salas personalizadas |
| 📋 Listagem de salas | ✅ | Visualização de todas as salas disponíveis |
| ❓ Criação de perguntas | ✅ | Envio de perguntas dentro das salas |
| 👁️ Visualização de perguntas | ✅ | Exibição de perguntas e respostas |
| 📱 Interface responsiva | ✅ | Adaptação para diferentes dispositivos |
| 🔒 Validação de dados | ✅ | Validação robusta com Zod |

## 🚀 Guia de Instalação

### 📋 Pré-requisitos
- ![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=nodedotjs&logoColor=white) **Node.js** (versão 18 ou superior)
- ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white) **Docker** e **Docker Compose**
- ![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white) **npm** ou **yarn**

### 📥 Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd nlw-agents
   ```

2. **Configure o banco de dados**
   ```bash
   cd server
   docker-compose up -d
   ```

3. **Execute o backend**
   ```bash
   cd server
   npm install
   npm run db:generate
   npm run db:migrate
   npm run db:seed
   npm run dev
   ```

4. **Execute o frontend** (em outro terminal)
   ```bash
   cd web
   npm install
   npm run dev
   ```

5. **Acesse a aplicação**
   - 🌐 **Frontend**: http://localhost:5173
   - 🔧 **Backend**: http://localhost:3333

## 🗄️ Estrutura do Banco de Dados

O projeto utiliza **PostgreSQL** com as seguintes tabelas:

```sql
-- Tabela de salas
CREATE TABLE rooms (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Tabela de perguntas
CREATE TABLE questions (
    id UUID PRIMARY KEY,
    room_id UUID REFERENCES rooms(id),
    question TEXT NOT NULL,
    answer TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);
```

| Tabela | Descrição |
|---|---|
| `rooms` | Armazena informações das salas virtuais |
| `questions` | Armazena perguntas e respostas das salas |

## 🔧 Scripts Disponíveis

<table>
<tr>
<td>

### Backend
```bash
# Desenvolvimento
npm run dev

# Produção
npm run start

# Banco de dados
npm run db:generate  # Gera migrações
npm run db:migrate   # Executa migrações
npm run db:seed      # Popula dados iniciais
```

</td>
<td>

### Frontend
```bash
# Desenvolvimento
npm run dev

# Build
npm run build       # Gera build de produção
npm run preview     # Visualiza o build
```

</td>
</tr>
</table>

## 📊 Análise Técnica e Estratégias

### 🔧 Backend (Server)

**Stack Principal:**
- Node.js + TypeScript, Fastify, Drizzle ORM, PostgreSQL (com pgvector), Zod, Docker, Biome

**Arquitetura:**
- 📁 **Modularização**: Separação clara entre configuração do banco (`db/`), rotas HTTP (`http/`), serviços externos (`services/`)
- 🗄️ **Banco de Dados**: Migrações versionadas e seed para dados iniciais
- 🐳 **Containerização**: Docker e Docker Compose para setup rápido e padronizado
- ✅ **Qualidade**: Linter/formatador, scripts npm para automação

**Principais Estratégias:**
- 🔒 **Validação Robusta**: Uso do Zod para garantir integridade dos dados
- 🏗️ **Separação de Responsabilidades**: Cada módulo tem função específica
- 🚀 **Automação**: Setup simplificado com scripts e Docker
- 📈 **Versionamento**: Controle de mudanças no banco com migrações

### 🎨 Frontend (Web)

**Stack Principal:**
- React + TypeScript, Vite, Tailwind CSS, Radix UI, React Router, TanStack Query, React Hook Form

**Arquitetura:**
- 🧩 **Componentização**: Componentes reutilizáveis e desacoplados
- 📄 **Páginas**: Organização por rotas e responsabilidades
- 🔗 **Hooks**: Lógica de API separada da apresentação
- 🛠️ **Utilitários**: Funções auxiliares centralizadas

**Principais Estratégias:**
- 📱 **Responsividade**: Interface adaptável a diferentes dispositivos
- ⚡ **Performance**: TanStack Query para cache e sincronização eficiente
- 🎯 **UX/UI**: Componentes acessíveis e design moderno
- 🔧 **Manutenibilidade**: Separação clara entre lógica e apresentação

## 🤝 Contribuindo

Este projeto foi desenvolvido durante o **NLW (Next Level Week)** da Rocketseat. 

### Como Contribuir
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### 🐛 Reportando Bugs
Se você encontrar um bug, por favor abra uma issue com:
- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado vs atual
- Screenshots (se aplicável)

## � Licença

Este projeto está sob a licença **ISC**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

**Desenvolvido com ❤️ durante o NLW da Rocketseat**

[![Rocketseat](https://img.shields.io/badge/Rocketseat-7C3AED?style=for-the-badge&logo=rocket&logoColor=white)](https://rocketseat.com.br/)

</div>

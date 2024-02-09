module.exports = {
    // Diretórios onde o Jest deve procurar por arquivos de teste
    roots: ['<rootDir>/src', '<rootDir>/src/tests'],
  
    // Lista de padrões de arquivo que Jest deve incluir ao executar os testes
    testMatch: ['<rootDir>/src/tests/**/*.test.(ts|tsx)'],
  
    // Transforma arquivos TypeScript usando ts-jest
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
  
    // Opções do ts-jest para suporte ao TypeScript
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',
      },
    },
  
    // Configuração do relatório HTML
    reporters: [
      'default',
      [
        'jest-html-reporters',
        {
          publicPath: './html-report',
          filename: 'report.html',
          expand: true,
        },
      ],
    ],
  };
  
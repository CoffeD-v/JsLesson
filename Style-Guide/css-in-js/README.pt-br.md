# Guia de estilo CSS em JavaScript


[:brazil: Clique aqui para acessar a versão em português.](./README.pt-br.md)

*Uma abordagem bastante razoável para CSS-in-JavaScript*

## Índice

1. [Nomeação](#nomeação)
1. [Pedido](#pedido)
1. [Aninhamento](#aninhamento)
1. [Inline](#inline)
1. [Temas](#temas)

## Nomenclatura

- Use camelCase para chaves de objeto (ou seja, "seletores").

    > Por quê? Nós acessamos essas chaves como propriedades no objeto `styles` no componente, então é mais conveniente usar camelCase.

    ``` js
    // mau
    {
      'triângulo das Bermudas': {
        Mostrar nenhum',
      },
    }

    // Boa
    {
      triângulo das Bermudas: {
        Mostrar nenhum',
      },
    }
    ```

- Use um sublinhado para modificadores de outros estilos.

   > Por quê? Semelhante ao BEM, essa convenção de nomenclatura deixa claro que os estilos destinam-se a modificar o elemento precedido pelo sublinhado. Os sublinhados não precisam ser citados, por isso são preferidos a outros caracteres, como traços.

    ``` js
    // mau
    {
      bruce Banner: {
        cor: 'rosa',
        transição: 'cor 10',
      },

      bruceBannerTheHulk: {
        cor verde',
      },
    }

    // Boa
    {
      bruce Banner: {
        cor: 'rosa',
        transição: 'cor 10',
      },

      bruceBanner_theHulk: {
        cor verde',
      },
    }
    ```

- Use `selectorName_fallback` para conjuntos de estilos de fallback.

    > Por quê? Semelhante aos modificadores, manter a nomenclatura consistente ajuda a revelar a relação desses estilos com os estilos que os substituem em navegadores mais adequados.

    ``` js
    // mau
    {
      músculos: {
        exibição: 'flex',
      },

      muscle_sadBears: {
        largura: '100%',
      },
    }

    // Boa
    {
      músculos: {
        exibição: 'flex',
      },

      muscle_fallback: {
        largura: '100%',
      },
    }
    ```

- Use um seletor separado para conjuntos de estilos de fallback.

    > Por quê? Manter estilos de fallback contidos em um objeto separado esclarece sua finalidade, o que melhora a legibilidade.

    ``` js
    // mau
    {
      músculos: {
        exibição: 'flex',
      },

      deixei: {
        flexGrow: 1,
        display: 'bloco em linha',
      },

      certo: {
        display: 'bloco em linha',
      },
    }

 // Boa
    {
      músculos: {
        exibição: 'flex',
      },

      deixei: {
        flexGrow: 1,
      },

      left_fallback: {
        display: 'bloco em linha',
      },

      right_fallback: {
        display: 'bloco em linha',
      },
    }
    ```

- Use nomes independentes de dispositivo (por exemplo, "pequeno", "médio" e "grande") para nomear pontos de interrupção de consulta de mídia.

    > Por quê? Nomes comumente usados ​​como "telefone", "tablet" e "desktop" não correspondem às características dos dispositivos no mundo real. Usar esses nomes define as expectativas erradas.

    ``` js
    // mau
    pontos de interrupção const = {
      mobile: '@media (max-width: 639px)',
      tablet: '@media (max-width: 1047px)',
      desktop: '@media (min-width: 1048px)',
    };

    // Boa
    pontos de interrupção const = {
      small: '@media (max-width: 639px)',
      medium: '@media (max-width: 1047px)',
      grande: '@media (largura mínima: 1048px)',
    };
    ```

## Encomenda

- Definir estilos após o componente.

    > Por quê? Usamos um componente de ordem superior para tematizar nossos estilos, que é naturalmente usado após a definição do componente. Passar o objeto de estilos diretamente para esta função reduz a indireção.

    ``` jsx
    // mau
    estilos const = {
      recipiente: {
        display: 'bloco em linha',
      },
    };

    function MeuComponente({ estilos }) {
      Retorna (
        <div {...css(styles.container)}>
          Nunca duvide que um pequeno grupo de cidadãos atenciosos e comprometidos possa
          mudar o mundo. Na verdade, é a única coisa que já teve.
        </div>
      );
    }

    export default withStyles(() => styles)(MyComponent);

    // Boa
    function MeuComponente({ estilos }) {
      Retorna (
        <div {...css(styles.container)}>
          Nunca duvide que um pequeno grupo de cidadãos atenciosos e comprometidos possa
          mudar o mundo. Na verdade, é a única coisa que já teve.
        </div>
      );
    }

    export default withStyles(() => ({
      recipiente: {
        display: 'bloco em linha',
      },
    }))(MeuComponente);
    ```

## Aninhamento

- Deixe uma linha em branco entre blocos adjacentes no mesmo nível de recuo.

    > Por quê? O espaço em branco melhora a legibilidade e reduz a probabilidade de conflitos de mesclagem.

    ``` js
    // mau
    {
      Big Bang: {
        display: 'bloco em linha',
        '::antes da': {
          contente: "''",
        },
      },
      universo: {
        fronteira: 'nenhum',
      },
    }

    // Boa
    {
      Big Bang: {
        display: 'bloco em linha',

        '::antes da': {
          contente: "''",
        },
      },

      universo: {
        fronteira: 'nenhum',
      },
    }
    ```

## Em linha

- Use estilos inline para estilos com alta cardinalidade (por exemplo, usa o valor de um prop) e não para estilos com baixa cardinalidade.

    > Por quê? Gerar folhas de estilo temáticas pode ser caro, então elas são melhores para conjuntos discretos de estilos.

    ``` jsx
    // mau
    exportar função padrão MeuComponente({ espaçamento }) {
      Retorna (
        <div style={{ display: 'table', margin: espaçamento }} />
      );
    }

// Boa
    function MeuComponente({ estilos, espaçamento }) {
      Retorna (
        <div {...css(styles.periodic, {margem: espaçamento })} />
      );
    }
    export default withStyles(() => ({
      periódico: {
        exibição: 'mesa',
      },
    }))(MeuComponente);
    ```

## Temas

- Use uma camada de abstração como [react-with-styles](https://github.com/airbnb/react-with-styles) que permite a criação de temas. *react-with-styles nos dá coisas como `withStyles()`, `ThemedStyleSheet` e `css()` que são usados ​​em alguns dos exemplos deste documento.*

  > Por quê? É útil ter um conjunto de variáveis ​​compartilhadas para estilizar seus componentes. Usar uma camada de abstração torna isso mais conveniente. Além disso, isso pode ajudar a evitar que seus componentes sejam fortemente acoplados a qualquer implementação subjacente específica, o que lhe dá mais liberdade.

- Defina cores apenas em temas.

    ``` js
    // mau
    export default withStyles(() => ({
      Chuck Norris: {
        color: '#bada55',
      },
    }))(MeuComponente);

    // Boa
    export default withStyles(({ color }) => ({
      Chuck Norris: {
        color: color.badass,
      },
    }))(MeuComponente);
    ```

- Defina fontes apenas em temas.

    ``` js
    // mau
    export default withStyles(() => ({
      towerOfPisa: {
        fontStyle: 'itálico',
      },
    }))(MeuComponente);

    // good
    export default withStyles(({ font }) => ({
      towerOfPisa: {
        fontStyle: font.italic,
      },
    }))(MyComponent);
    ```

- Defina fontes como conjuntos de estilos relacionados.

    ```js
    // ruim
    export default  withStyles(() => ({
      towerOfPisa: {
        fontFamily: 'Italiana, "Times New Roman", serifa',
        tamanho da fonte: '2em',
        fontStyle: 'itálico',
        altura da linha: 1,5,
      },
    }))(MeuComponente);

    // bom
    export default  withStyles(({ font }) => ({
      towerOfPisa: {
        ... fonte.italic,
      },
    }))(MeuComponente);
    ```

- Definir unidades de grade base no tema (como um valor ou uma função que leva um multiplicador).

    ```js
    // ruim
    export default withStyles(() => ({
      rasgar: {
        inferior: '-6912px', // 6 pés
      },
    }))(MeuComponente);

    // bom
    export default  withStyles(({ unidades }) => ({
      rasgar: {
        bottom: unidades(864), // 6 pés, assumindo que nossa unidade é 8px
      },
    }))(MeuComponente);

    // bom
     export default withStyles(({ unidade }) => ({
      rasgar: {
        bottom: 864 * unit, // 6 pés, assumindo que nossa unidade é 8px
      },
    }))(MeuComponente);
    ```

- Defina consultas de mídia apenas em temas.

    ```js
    // ruim
    export default withStyles(() => ({
      contêiner: {
        largura: '100%',

        '@media (largura máxima: 1047px)': {
          largura: '50%',
        },
      },
    }))(MeuComponente);

    // bom
    export default  withStyles(({ ponto de interrupção }) => ({
      contêiner: {
        largura: '100%',

        [ponto de interrupção.medium]: {
          largura: '50%',
        },
      },
    }))(MeuComponente);
    ```

- Defina propriedades alternativas complicadas em temas.

    > Por quê? Muitas implementações de CSS em JavaScript mesclam objetos de estilo, o que torna a especificação de substitutos para a mesma propriedade (por exemplo, `display`) um pouco complicada. Para manter a abordagem unificada, coloque essas alternativas no tema.

    ```js
    // ruim
    export default  withStyles(() => ({
      .músculos {
        exibição: 'flexível',
      },

      .muscles_fallback {
        'exibição': 'tabela',
      },
    }))(MeuComponente);

    // bom
    export default withStyles(({ fallbacks }) => ({
      .músculos {
        exibição: 'flexível',
      },

      .muscles_fallback {
        [fallbacks.display]: 'tabela',
      },
    }))(MeuComponente);

    // bom
    export default withStyles(({ fallback }) => ({
      .músculos {
        exibição: 'flexível',
      },

      .muscles_fallback {
        [fallback('display')]: 'tabela',
      },
    }))(MeuComponente);
    ```

- Crie o mínimo possível de temas personalizados. Muitos aplicativos podem ter apenas um tema.

- Configurações de tema personalizado de namespace em um objeto aninhado com uma chave exclusiva e descritiva.

    ```js
    // ruim
    ThemedStyleSheet.registerTheme('minhaSeção', {
      mySectionPrimaryColor: 'verde',
    });

    // bom
    ThemedStyleSheet.registerTheme('minhaSeção', {
      minhaSeção: {
        primaryColor: 'verde',
      },
    });
    ```

---

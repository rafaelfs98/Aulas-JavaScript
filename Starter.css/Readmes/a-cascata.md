# A Cascata (cascading)

A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemennto.
* Seu estilo e lido de cima para baixo
E levado em cosideracao 3 fatores
1. Origem do estilo
2. especificidade
3. importancia

### Origem do estilo

inline > tag style > tag link

### Especificidade 

e um calculo matematico, onde , cada tipo de seletor e origem do estilo, possuem valores a serem considerados 

0. Universal selector, combinators e negation pseudo-class(:not())
1. element type selector e pseudo-elements (::before, ::after)
10. Classes e attribute selectors ([type="radio"])
100. ID selector
1000. Inline

### A regra do !important

* cuidade, evite o uso
* nao e considerado uma boa pratica
* quebra o fluxo natural da cascata
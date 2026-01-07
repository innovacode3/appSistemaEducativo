// data/contenido-educativo.js
const contenidoEducativo = {
  matematicas: {
    nombre: "Matemáticas",
    color: "#4A90E2",
    icono: "📐",
    grados: {
      quinto: {
        nombre: "5to Grado",
        temas: [
          {
            id: "mat-5-1",
            titulo: "Números Decimales",
            descripcion: "Aprende sobre números decimales y sus operaciones",
            contenido: `
              <h3>¿Qué son los números decimales?</h3>
              <p>Los números decimales son aquellos que tienen una parte entera y una parte decimal, separadas por un punto (.).</p>
              
              <h4>Ejemplos:</h4>
              <ul>
                <li>3.5 (tres punto cinco)</li>
                <li>12.75 (doce punto setenta y cinco)</li>
                <li>0.25 (cero punto veinticinco)</li>
              </ul>
              
              <h4>Partes de un número decimal:</h4>
              <p>En el número 45.67:</p>
              <ul>
                <li><strong>Parte entera:</strong> 45</li>
                <li><strong>Punto decimal:</strong> .</li>
                <li><strong>Parte decimal:</strong> 67</li>
              </ul>
              
              <h4>Suma de decimales:</h4>
              <p>Para sumar decimales, alinea los puntos decimales:</p>
              <pre>
    23.5
  + 12.3
  ------
    35.8
              </pre>
              
              <h4>Resta de decimales:</h4>
              <pre>
    45.8
  - 12.4
  ------
    33.4
              </pre>
            `,
            ejercicios: [
              {
                pregunta: "¿Cuánto es 5.5 + 3.2?",
                opciones: ["8.7", "8.3", "9.7", "7.7"],
                respuestaCorrecta: 0
              },
              {
                pregunta: "¿Cuál es la parte decimal del número 23.45?",
                opciones: ["23", "45", "2345", "0.45"],
                respuestaCorrecta: 1
              },
              {
                pregunta: "¿Cuánto es 10.5 - 3.2?",
                opciones: ["7.3", "6.3", "8.3", "7.7"],
                respuestaCorrecta: 0
              }
            ]
          },
          {
            id: "mat-5-2",
            titulo: "Fracciones",
            descripcion: "Comprende las fracciones y sus operaciones básicas",
            contenido: `
              <h3>¿Qué son las fracciones?</h3>
              <p>Una fracción representa una parte de un todo. Se escribe con dos números separados por una línea.</p>
              
              <h4>Partes de una fracción:</h4>
              <p>En la fracción 3/4:</p>
              <ul>
                <li><strong>Numerador (3):</strong> Indica cuántas partes tomamos</li>
                <li><strong>Denominador (4):</strong> Indica en cuántas partes se divide el todo</li>
              </ul>
              
              <h4>Tipos de fracciones:</h4>
              <ul>
                <li><strong>Propias:</strong> El numerador es menor que el denominador (1/2, 3/4)</li>
                <li><strong>Impropias:</strong> El numerador es mayor que el denominador (5/3, 7/4)</li>
                <li><strong>Mixtas:</strong> Tienen parte entera y fraccionaria (1 1/2, 2 3/4)</li>
              </ul>
              
              <h4>Suma de fracciones con igual denominador:</h4>
              <p>1/4 + 2/4 = 3/4 (sumamos los numeradores)</p>
              
              <h4>Fracciones equivalentes:</h4>
              <p>Son fracciones que representan la misma cantidad:</p>
              <ul>
                <li>1/2 = 2/4 = 4/8</li>
                <li>2/3 = 4/6 = 6/9</li>
              </ul>
            `,
            ejercicios: [
              {
                pregunta: "¿Cuánto es 1/4 + 2/4?",
                opciones: ["3/4", "3/8", "2/4", "4/4"],
                respuestaCorrecta: 0
              },
              {
                pregunta: "¿Qué fracción es equivalente a 1/2?",
                opciones: ["1/4", "2/4", "3/5", "1/3"],
                respuestaCorrecta: 1
              },
              {
                pregunta: "En la fracción 5/8, ¿cuál es el numerador?",
                opciones: ["8", "5", "13", "3"],
                respuestaCorrecta: 1
              }
            ]
          },
          {
            id: "mat-5-3",
            titulo: "Geometría - Figuras Planas",
            descripcion: "Conoce las figuras geométricas y sus propiedades",
            contenido: `
              <h3>Figuras Geométricas Planas</h3>
              <p>Las figuras planas son formas de dos dimensiones (largo y ancho).</p>
              
              <h4>Triángulos:</h4>
              <p>Figura de 3 lados y 3 ángulos.</p>
              <ul>
                <li><strong>Equilátero:</strong> Los 3 lados son iguales</li>
                <li><strong>Isósceles:</strong> 2 lados iguales</li>
                <li><strong>Escaleno:</strong> Todos los lados diferentes</li>
              </ul>
              <p><strong>Perímetro:</strong> Suma de todos los lados</p>
              <p><strong>Área:</strong> (base × altura) ÷ 2</p>
              
              <h4>Cuadriláteros:</h4>
              <p>Figuras de 4 lados:</p>
              <ul>
                <li><strong>Cuadrado:</strong> 4 lados iguales, 4 ángulos rectos</li>
                <li><strong>Rectángulo:</strong> Lados opuestos iguales, 4 ángulos rectos</li>
                <li><strong>Rombo:</strong> 4 lados iguales</li>
                <li><strong>Trapecio:</strong> Un par de lados paralelos</li>
              </ul>
              
              <h4>Círculo:</h4>
              <ul>
                <li><strong>Radio:</strong> Distancia del centro a cualquier punto del círculo</li>
                <li><strong>Diámetro:</strong> Línea que pasa por el centro (2 × radio)</li>
                <li><strong>Circunferencia:</strong> Perímetro del círculo</li>
              </ul>
            `,
            ejercicios: [
              {
                pregunta: "¿Cuántos lados tiene un cuadrado?",
                opciones: ["3", "4", "5", "6"],
                respuestaCorrecta: 1
              },
              {
                pregunta: "¿Qué triángulo tiene todos sus lados iguales?",
                opciones: ["Escaleno", "Isósceles", "Equilátero", "Rectángulo"],
                respuestaCorrecta: 2
              },
              {
                pregunta: "Si un cuadrado tiene un lado de 5 cm, ¿cuál es su perímetro?",
                opciones: ["10 cm", "15 cm", "20 cm", "25 cm"],
                respuestaCorrecta: 2
              }
            ]
          }
        ]
      },
      sexto: {
        nombre: "6to Grado",
        temas: [
          {
            id: "mat-6-1",
            titulo: "Proporciones y Razones",
            descripcion: "Aprende sobre razones y proporciones",
            contenido: `
              <h3>Razones y Proporciones</h3>
              
              <h4>¿Qué es una razón?</h4>
              <p>Una razón es una comparación entre dos cantidades. Se puede expresar como:</p>
              <ul>
                <li>3 a 5</li>
                <li>3:5</li>
                <li>3/5</li>
              </ul>
              
              <h4>¿Qué es una proporción?</h4>
              <p>Una proporción es una igualdad entre dos razones:</p>
              <p>2/3 = 4/6</p>
              
              <h4>Propiedad fundamental:</h4>
              <p>En una proporción a/b = c/d:</p>
              <p>a × d = b × c</p>
              
              <h4>Ejemplo práctico:</h4>
              <p>Si 3 manzanas cuestan $2, ¿cuánto costarán 6 manzanas?</p>
              <p>3/2 = 6/x</p>
              <p>3x = 12</p>
              <p>x = 4 dólares</p>
              
              <h4>Regla de tres simple:</h4>
              <p>Es un método para resolver problemas de proporcionalidad:</p>
              <ol>
                <li>Identificar las magnitudes relacionadas</li>
                <li>Plantear la proporción</li>
                <li>Resolver usando productos cruzados</li>
              </ol>
            `,
            ejercicios: [
              {
                pregunta: "Si 4 libros cuestan $12, ¿cuánto costarán 6 libros?",
                opciones: ["$15", "$18", "$20", "$24"],
                respuestaCorrecta: 1
              },
              {
                pregunta: "¿Qué par de razones forman una proporción?",
                opciones: ["2/3 y 4/5", "2/3 y 4/6", "2/3 y 3/4", "2/3 y 5/7"],
                respuestaCorrecta: 1
              },
              {
                pregunta: "En la razón 5:8, ¿cuál es el consecuente?",
                opciones: ["5", "8", "13", "40"],
                respuestaCorrecta: 1
              }
            ]
          },
          {
            id: "mat-6-2",
            titulo: "Porcentajes",
            descripcion: "Comprende y calcula porcentajes",
            contenido: `
              <h3>Los Porcentajes</h3>
              
              <h4>¿Qué es un porcentaje?</h4>
              <p>Un porcentaje es una forma de expresar una cantidad como fracción de 100.</p>
              <p>El símbolo % significa "por ciento".</p>
              
              <h4>Conversiones:</h4>
              <ul>
                <li>25% = 25/100 = 0.25</li>
                <li>50% = 50/100 = 0.50 = 1/2</li>
                <li>75% = 75/100 = 0.75</li>
                <li>100% = 100/100 = 1 (el total)</li>
              </ul>
              
              <h4>Cálculo de porcentajes:</h4>
              <p>Para calcular el 20% de 50:</p>
              <ol>
                <li>Convertir 20% a decimal: 20/100 = 0.20</li>
                <li>Multiplicar: 50 × 0.20 = 10</li>
              </ol>
              
              <h4>Problemas comunes:</h4>
              <p><strong>Descuentos:</strong> Si una camisa cuesta $40 y tiene 25% de descuento:</p>
              <ul>
                <li>Descuento: 40 × 0.25 = $10</li>
                <li>Precio final: $40 - $10 = $30</li>
              </ul>
              
              <p><strong>Aumentos:</strong> Si un precio aumenta 10%:</p>
              <ul>
                <li>Aumento: precio × 0.10</li>
                <li>Nuevo precio: precio + aumento</li>
              </ul>
            `,
            ejercicios: [
              {
                pregunta: "¿Cuánto es el 50% de 80?",
                opciones: ["20", "30", "40", "50"],
                respuestaCorrecta: 2
              },
              {
                pregunta: "Un producto cuesta $100 con 20% de descuento. ¿Cuál es su precio final?",
                opciones: ["$70", "$75", "$80", "$85"],
                respuestaCorrecta: 2
              },
              {
                pregunta: "¿A qué fracción equivale 25%?",
                opciones: ["1/2", "1/3", "1/4", "1/5"],
                respuestaCorrecta: 2
              }
            ]
          }
        ]
      },
      septimo: {
        nombre: "7mo Grado",
        temas: [
          {
            id: "mat-7-1",
            titulo: "Números Enteros",
            descripcion: "Aprende sobre números positivos y negativos",
            contenido: `
              <h3>Números Enteros</h3>
              
              <h4>¿Qué son?</h4>
              <p>Los números enteros incluyen:</p>
              <ul>
                <li><strong>Positivos:</strong> +1, +2, +3, ... (a la derecha del cero)</li>
                <li><strong>Cero:</strong> 0 (neutral)</li>
                <li><strong>Negativos:</strong> -1, -2, -3, ... (a la izquierda del cero)</li>
              </ul>
              
              <h4>La recta numérica:</h4>
              <p>Los números enteros se representan en una línea:</p>
              <pre>... -3  -2  -1  0  +1  +2  +3 ...</pre>
              
              <h4>Operaciones con enteros:</h4>
              
              <p><strong>Suma:</strong></p>
              <ul>
                <li>Mismo signo: sumar y mantener el signo (+3) + (+2) = +5</li>
                <li>Diferente signo: restar y usar el signo del mayor (+5) + (-2) = +3</li>
              </ul>
              
              <p><strong>Resta:</strong></p>
              <ul>
                <li>Cambiar el signo del segundo número y sumar</li>
                <li>(+5) - (+3) = (+5) + (-3) = +2</li>
                <li>(+2) - (+5) = (+2) + (-5) = -3</li>
              </ul>
              
              <p><strong>Multiplicación:</strong></p>
              <ul>
                <li>Igual signo = resultado positivo: (+3) × (+2) = +6</li>
                <li>Diferente signo = resultado negativo: (+3) × (-2) = -6</li>
              </ul>
              
              <h4>Aplicaciones prácticas:</h4>
              <ul>
                <li>Temperatura: -5°C (bajo cero)</li>
                <li>Altitud: -50m (bajo el nivel del mar)</li>
                <li>Deudas: -$100 (deber dinero)</li>
              </ul>
            `,
            ejercicios: [
              {
                pregunta: "¿Cuánto es (+5) + (-3)?",
                opciones: ["-2", "+2", "+8", "-8"],
                respuestaCorrecta: 1
              },
              {
                pregunta: "¿Cuánto es (-4) × (+2)?",
                opciones: ["+8", "-8", "+2", "-2"],
                respuestaCorrecta: 1
              },
              {
                pregunta: "¿Qué número es mayor: -3 o -7?",
                opciones: ["-7", "-3", "Son iguales", "No se puede comparar"],
                respuestaCorrecta: 1
              }
            ]
          },
          {
            id: "mat-7-2",
            titulo: "Álgebra Básica",
            descripcion: "Introducción a las expresiones algebraicas",
            contenido: `
              <h3>Introducción al Álgebra</h3>
              
              <h4>¿Qué es el álgebra?</h4>
              <p>El álgebra usa letras (variables) para representar números desconocidos.</p>
              
              <h4>Términos importantes:</h4>
              <ul>
                <li><strong>Variable:</strong> letra que representa un valor (x, y, a, b)</li>
                <li><strong>Coeficiente:</strong> número que multiplica a la variable (en 3x, el 3 es el coeficiente)</li>
                <li><strong>Constante:</strong> número sin variable (5, -2, 10)</li>
                <li><strong>Término:</strong> producto de números y variables (3x, -2y, 5)</li>
              </ul>
              
              <h4>Expresiones algebraicas:</h4>
              <p>Son combinaciones de variables, números y operaciones:</p>
              <ul>
                <li>3x + 5</li>
                <li>2a - 4b + 7</li>
                <li>x² + 2x - 3</li>
              </ul>
              
              <h4>Términos semejantes:</h4>
              <p>Son términos que tienen las mismas variables:</p>
              <ul>
                <li>3x y 5x son semejantes</li>
                <li>2a y 3b NO son semejantes</li>
              </ul>
              
              <p><strong>Simplificación:</strong></p>
              <p>3x + 5x = 8x (sumamos los coeficientes)</p>
              <p>7y - 2y = 5y</p>
              
              <h4>Ecuaciones simples:</h4>
              <p>Una ecuación es una igualdad con una incógnita:</p>
              <p>x + 5 = 12</p>
              <p>x = 12 - 5</p>
              <p>x = 7</p>
              
              <p><strong>Pasos para resolver:</strong></p>
              <ol>
                <li>Identificar la incógnita</li>
                <li>Dejar la incógnita sola en un lado</li>
                <li>Realizar las operaciones</li>
                <li>Verificar el resultado</li>
              </ol>
            `,
            ejercicios: [
              {
                pregunta: "¿Cuánto es 3x + 2x?",
                opciones: ["5x", "6x", "5x²", "6"],
                respuestaCorrecta: 0
              },
              {
                pregunta: "Si x + 7 = 15, ¿cuánto vale x?",
                opciones: ["7", "8", "15", "22"],
                respuestaCorrecta: 1
              },
              {
                pregunta: "¿Qué términos son semejantes?",
                opciones: ["2x y 3y", "5a y 3a", "4x y 4", "2x² y 2x"],
                respuestaCorrecta: 1
              }
            ]
          }
        ]
      }
    }
  },
  
  cienciasnaturales: {
    nombre: "Ciencias Naturales",
    color: "#50C878",
    icono: "🔬",
    grados: {
      quinto: {
        nombre: "5to Grado",
        temas: [
          {
            id: "cn-5-1",
            titulo: "El Sistema Solar",
            descripcion: "Descubre nuestro sistema planetario",
            contenido: `
              <h3>El Sistema Solar</h3>
              
              <h4>¿Qué es el Sistema Solar?</h4>
              <p>Es el conjunto formado por el Sol y todos los cuerpos celestes que giran a su alrededor.</p>
              
              <h4>El Sol:</h4>
              <ul>
                <li>Es una estrella (una enorme bola de gas caliente)</li>
                <li>Proporciona luz y calor a los planetas</li>
                <li>Es el objeto más grande del Sistema Solar</li>
                <li>Está formado principalmente de hidrógeno y helio</li>
              </ul>
              
              <h4>Los Planetas (en orden desde el Sol):</h4>
              
              <p><strong>1. Mercurio:</strong></p>
              <ul>
                <li>El más pequeño y cercano al Sol</li>
                <li>No tiene atmósfera</li>
                <li>Temperaturas extremas</li>
              </ul>
              
              <p><strong>2. Venus:</strong></p>
              <ul>
                <li>Similar en tamaño a la Tierra</li>
                <li>El planeta más caliente</li>
                <li>Atmósfera muy densa</li>
              </ul>
              
              <p><strong>3. Tierra:</strong></p>
              <ul>
                <li>Nuestro hogar</li>
                <li>Único planeta con vida conocida</li>
                <li>Tiene agua en estado líquido</li>
                <li>Un satélite: la Luna</li>
              </ul>
              
              <p><strong>4. Marte:</strong></p>
              <ul>
                <li>El "planeta rojo"</li>
                <li>Tiene casquetes polares</li>
                <li>Dos satélites: Fobos y Deimos</li>
              </ul>
              
              <p><strong>5. Júpiter:</strong></p>
              <ul>
                <li>El planeta más grande</li>
                <li>Gigante gaseoso</li>
                <li>Tiene una gran mancha roja (tormenta)</li>
                <li>Más de 70 lunas</li>
              </ul>
              
              <p><strong>6. Saturno:</strong></p>
              <ul>
                <li>Famoso por sus anillos</li>
                <li>Gigante gaseoso</li>
                <li>Más de 80 lunas</li>
              </ul>
              
              <p><strong>7. Urano:</strong></p>
              <ul>
                <li>Gira de lado</li>
                <li>Color azul verdoso</li>
                <li>Muy frío</li>
              </ul>
              
              <p><strong>8. Neptuno:</strong></p>
              <ul>
                <li>El más lejano del Sol</li>
                <li>Color azul intenso</li>
                <li>Vientos muy fuertes</li>
              </ul>
              
              <h4>Otros cuerpos celestes:</h4>
              <ul>
                <li><strong>Asteroides:</strong> Rocas espaciales</li>
                <li><strong>Cometas:</strong> Bolas de hielo y polvo</li>
                <li><strong>Planetas enanos:</strong> Como Plutón</li>
              </ul>
            `,
            ejercicios: [
              {
                pregunta: "¿Cuál es el planeta más grande del Sistema Solar?",
                opciones: ["Saturno", "Júpiter", "Tierra", "Marte"],
                respuestaCorrecta: 1
              },
              {
                pregunta: "¿Cuántos planetas hay en el Sistema Solar?",
                opciones: ["7", "8", "9", "10"],
                respuestaCorrecta: 1
              },
              {
                pregunta: "¿Qué planeta es conocido como el 'planeta rojo'?",
                opciones: ["Venus", "Júpiter", "Marte", "Mercurio"],
                respuestaCorrecta: 2
              }
            ]
          },
          {
            id: "cn-5-2",
            titulo: "Los Seres Vivos",
            descripcion: "Características y clasificación de los seres vivos",
            contenido: `
              <h3>Los Seres Vivos</h3>
              
              <h4>Características de los seres vivos:</h4>
              <p>Todos los seres vivos comparten estas características:</p>
              
              <ol>
                <li><strong>Nacen:</strong> Comienzan su vida</li>
                <li><strong>Crecen:</strong> Aumentan de tamaño</li>
                <li><strong>Se reproducen:</strong> Tienen descendencia</li>
                <li><strong>Se alimentan:</strong> Obtienen nutrientes</li>
                <li><strong>Respiran:</strong> Intercambian gases</li>
                <li><strong>Responden a estímulos:</strong> Reaccionan al ambiente</li>
                <li><strong>Mueren:</strong> Terminan su ciclo de vida</li>
              </ol>
              
              <h4>Clasificación de los seres vivos:</h4>
              
              <p><strong>Reino Animal:</strong></p>
              <ul>
                <li>Se alimentan de otros organismos</li>
                <li>Pueden moverse</li>
                <li>Ejemplos: perros, peces, aves, insectos</li>
              </ul>
              
              <p><strong>Reino Vegetal (Plantas):</strong></p>
              <ul>
                <li>Producen su propio alimento (fotosíntesis)</li>
                <li>No se desplazan</li>
                <li>Tienen raíz, tallo y hojas</li>
                <li>Ejemplos: árboles, flores, hierbas</li>
              </ul>
              
              <p><strong>Reino Fungi (Hongos):</strong></p>
              <ul>
                <li>No producen su alimento</li>
                <li>Se alimentan de materia en descomposición</li>
                <li>Ejemplos: champiñones, moho</li>
              </ul>
              
              <h4>Clasificación de animales:</h4>
              
              <p><strong>Vertebrados:</strong> Tienen columna vertebral</p>
              <ul>
                <li>Mamíferos (perro, gato, humano)</li>
                <li>Aves (águila, loro, gallina)</li>
                <li>Reptiles (serpiente, cocodrilo)</li>
                <li>Anfibios (rana, salamandra)</li>
                <li>Peces (tiburón, sardina)</li>
              </ul>
              
              <p><strong>Invertebrados:</strong> No tienen columna vertebral</p>
              <ul>
                <li>Insectos (mariposa, hormiga)</li>
                <li>Arácnidos (araña, escorpión)</li>
                <li>Moluscos (caracol, pulpo)</li>
                <li>Crustáceos (cangrejo, camarón)</li>
              </ul>
              
              <h4>Ecosistemas:</h4>
              <p>Los seres vivos interactúan en su ambiente formando ecosistemas:</p>
              <ul>
                <li><strong>Productores:</strong> Plantas (fabrican alimento)</li>
                <li><strong>Consumidores:</strong> Animales (se alimentan de otros)</li>
                <li><strong>Descomponedores:</strong> Hongos y bacterias (reciclan nutrientes)</li>
              </ul>
            `,
            ejercicios: [
              {
                pregunta: "¿Cuál NO es una característica de los seres vivos?",
                opciones: ["Nacer", "Crecer", "Brillar", "Reproducirse"],
                respuestaCorrecta: 2
              },
              {
                pregunta: "¿A qué grupo pertenece la mariposa?",
                opciones: ["Vertebrados", "Mamíferos", "Invertebrados", "Reptiles"],
                respuestaCorrecta: 2
              },
              {
                pregunta: "¿Qué seres vivos producen su propio alimento?",
                opciones: ["Animales", "Plantas", "Hongos", "Bacterias"],
                respuestaCorrecta: 1
              }
            ]
          }
        ]
      },
      sexto: {
        nombre: "6to Grado",
        temas: [
          {
            id: "cn-6-1",
            titulo: "El Cuerpo Humano",
            descripcion: "Sistemas del cuerpo humano",
            contenido: `
              <h3>El Cuerpo Humano</h3>
              
              <h4>Sistema Digestivo:</h4>
              <p><strong>Función:</strong> Transformar los alimentos en nutrientes que el cuerpo puede usar.</p>
              
              <p><strong>Órganos principales:</strong></p>
              <ul>
                <li><strong>Boca:</strong> Inicia la digestión, masticación</li>
                <li><strong>Esófago:</strong> Tubo que lleva el alimento al estómago</li>
                <li><strong>Estómago:</strong> Descompone los alimentos con jugos gástricos</li>
                <li><strong>Intestino delgado:</strong> Absorbe los nutrientes</li>
                <li><strong>Intestino grueso:</strong> Absorbe agua, elimina desechos</li>
              </ul>
              
              <h4>Sistema Circulatorio:</h4>
              <p><strong>Función:</strong> Transportar sangre, nutrientes y oxígeno por todo el cuerpo.</p>
              
              <p><strong>Componentes:</strong></p>
              <ul>
                <li><strong>Corazón:</strong> Bombea la sangre (4 cavidades: 2 aurículas, 2 ventrículos)</li>
                <li><strong>Arterias:</strong> Llevan sangre desde el corazón</li>
                <li><strong>Venas:</strong> Llevan sangre hacia el corazón</li>
                <li><strong>Capilares:</strong> Vasos muy pequeños donde ocurre el intercambio</li>
              </ul>
              
              <h4>Sistema Respiratorio:</h4>
              <p><strong>Función:</strong> Captar oxígeno y eliminar dióxido de carbono.</p>
              
              <p><strong>Órganos:</strong></p>
              <ul>
                <li><strong>Nariz:</strong> Filtra y calienta el aire</li>
                <li><strong>Tráquea:</strong> Tubo que lleva el aire a los pulmones</li>
                <li><strong>Bronquios:</strong> Ramificaciones en los pulmones</li>
                <li><strong>Pulmones:</strong> Órganos donde ocurre el intercambio gaseoso</li>
                <li><strong>Alvéolos:</strong> Pequeños sacos donde el oxígeno pasa a la sangre</li>
              </ul>
              
              <h4>Sistema Nervioso:</h4>
              <p><strong>Función:</strong> Controlar y coordinar todas las funciones del cuerpo.</p>
              
              <p><strong>Partes:</strong></p>
              <ul>
                <li><strong>Cerebro:</strong> Centro de control, pensamiento y memoria</li>
                <li><strong>Cerebelo:</strong> Coordina movimientos y equilibrio</li>
                <li><strong>Médula espinal:</strong> Conecta el cerebro con el resto del cuerpo</li>
                <li><strong>Nervios:</strong> Transmiten información</li>
              </ul>
              
              <h4>Sistema Muscular:</h4>
              <ul>
                <li>Más de 600 músculos en el cuerpo</li>
                <li>Permiten el movimiento</li>
                <li>Protegen órganos internos</li>
                <li>Producen calor</li>
              </ul>
              
              <h4>Sistema Óseo:</h4>
              <ul>
                <li>206 huesos en el adulto</li>
                <li>Da forma y soporte al cuerpo</li>
                <li>Protege órganos vitales</li>
                <li>Produce células sanguíneas</li>
              </ul>
            `,
            ejercicios: [
              {
                pregunta: "¿Qué órgano bombea la sangre?",
                opciones: ["Pulmones", "Estómago", "Corazón", "Cerebro"],
                respuestaCorrecta: 2
              },
              {
                pregunta: "¿Cuántos huesos tiene aproximadamente el cuerpo humano adulto?",
                opciones: ["106", "206", "306", "406"],
                respuestaCorrecta: 1
              },
              {
                pregunta: "¿Dónde ocurre el intercambio de oxígeno y dióxido de carbono?",
                opciones: ["Corazón", "Estómago", "Alvéolos pulmonares", "Cerebro"],
                respuestaCorrecta: 2
              }
            ]
          },
          {
            id: "cn-6-2",
            titulo: "Materia y Energía",
            descripcion: "Estados de la materia y formas de energía",
            contenido: `
              <h3>Materia y Energía</h3>
              
              <h4>¿Qué es la materia?</h4>
              <p>La materia es todo lo que ocupa un espacio y tiene masa. Todo lo que nos rodea es materia.</p>
              
              <h4>Estados de la Materia:</h4>
              
              <p><strong>1. Sólido:</strong></p>
              <ul>
                <li>Forma y volumen definidos</li>
                <li>Partículas muy juntas y ordenadas</li>
                <li>Ejemplos: piedra, madera, hielo</li>
              </ul>
              
              <p><strong>2. Líquido:</strong></p>
              <ul>
                <li>Volumen definido, forma variable</li>
                <li>Partículas juntas pero desordenadas</li>
                <li>Se adapta al recipiente</li>
                <li>Ejemplos: agua, aceite, leche</li>
              </ul>
              
              <p><strong>3. Gaseoso:</strong></p>
              <ul>
                <li>Forma y volumen variables</li>
                <li>Partículas muy separadas</li>
                <li>Llena todo el espacio disponible</li>
                <li>Ejemplos: aire, vapor, oxígeno</li>
              </ul>
              
              <h4>Cambios de Estado:</h4>
              <ul>
                <li><strong>Fusión:</strong> Sólido → Líquido (hielo a agua)</li>
                <li><strong>Solidificación:</strong> Líquido → Sólido (agua a hielo)</li>
                <li><strong>Evaporación:</strong> Líquido → Gas (agua a vapor)</li>
                <li><strong>Condensación:</strong> Gas → Líquido (vapor a agua)</li>
                <li><strong>Sublimación:</strong> Sólido → Gas directo</li>
              </ul>
              
              <h4>La Energía:</h4>
              <p>La energía es la capacidad de realizar trabajo o producir cambios.</p>
              
              <h4>Tipos de Energía:</h4>
              
              <p><strong>Energía Cinética:</strong> Energía del movimiento</p>
              <ul>
                <li>Un auto en movimiento</li>
                <li>Una pelota rodando</li>
              </ul>
              
              <p><strong>Energía Potencial:</strong> Energía almacenada</p>
              <ul>
                <li>Un objeto en altura</li>
                <li>Un resorte comprimido</li>
              </ul>
              
              <p><strong>Energía Térmica (Calórica):</strong></p>
              <ul>
                <li>Relacionada con la temperatura</li>
                <li>Pasa del objeto más caliente al más frío</li>
              </ul>
              
              <p><strong>Energía Lumínica:</strong></p>
              <ul>
                <li>Energía de la luz</li>
                <li>El Sol es nuestra principal fuente</li>
              </ul>
              
              <p><strong>Energía Eléctrica:</strong></p>
              <ul>
                <li>Movimiento de electrones</li>
                <li>Hace funcionar aparatos</li>
              </ul>
              
              <p><strong>Energía Sonora:</strong></p>
              <ul>
                <li>Producida por vibraciones</li>
                <li>Se propaga por ondas</li>
              </ul>
              
              <h4>Transformación de Energía:</h4>
              <p>La energía se transforma de una forma a otra:</p>
              <ul>
                <li>Bombilla: eléctrica → lumínica</li>
                <li>Ventilador: eléctrica → cinética</li>
                <li>Planta: lumínica → química</li>
              </ul>
            `,
            ejercicios: [
              {
                pregunta: "¿Qué estado de la materia tiene forma y volumen definidos?",
                opciones: ["Gas", "Líquido", "Sólido", "Plasma"],
                respuestaCorrecta: 2
              },
              {
                pregunta: "¿Cómo se llama el cambio de líquido a gas?",
                opciones: ["Fusión", "Solidificación", "Evaporación", "Condensación"],
                respuestaCorrecta: 2
              },
              {
                pregunta: "¿Qué tipo de energía tiene un objeto en movimiento?",
                opciones: ["Potencial", "Cinética", "Térmica", "Química"],
                respuestaCorrecta: 1
              }
            ]
          }
        ]
      },
      septimo: {
        nombre: "7mo Grado",
        temas: [
          {
            id: "cn-7-1",
            titulo: "La Célula",
            descripcion: "Unidad básica de la vida",
            contenido: `
              <h3>La Célula</h3>
              
              <h4>¿Qué es una célula?</h4>
              <p>La célula es la unidad básica de todos los seres vivos. Es la estructura más pequeña capaz de realizar todas las funciones vitales.</p>
              
              <h4>Descubrimiento:</h4>
              <ul>
                <li>Robert Hooke (1665) observó células en el corcho</li>
                <li>Anton van Leeuwenhoek observó células vivas</li>
              </ul>
              
              <h4>Teoría Celular:</h4>
              <ol>
                <li>Todos los seres vivos están formados por células</li>
                <li>La célula es la unidad básica de la vida</li>
                <li>Toda célula proviene de otra célula</li>
              </ol>
              
              <h4>Tipos de Células:</h4>
              
              <p><strong>Células Procariotas:</strong></p>
              <ul>
                <li>NO tienen núcleo definido</li>
                <li>Material genético disperso</li>
                <li>Más simples y pequeñas</li>
                <li>Ejemplo: bacterias</li>
              </ul>
              
              <p><strong>Células Eucariotas:</strong></p>
              <ul>
                <li>TIENEN núcleo definido</li>
                <li>Material genético protegido</li>
                <li>Más complejas y grandes</li>
                <li>Ejemplos: células animales y vegetales</li>
              </ul>
              
              <h4>Partes de la Célula Eucariota:</h4>
              
              <p><strong>Membrana Celular:</strong></p>
              <ul>
                <li>Capa externa que rodea la célula</li>
                <li>Controla lo que entra y sale</li>
                <li>Protege el contenido celular</li>
              </ul>
              
              <p><strong>Citoplasma:</strong></p>
              <ul>
                <li>Líquido gelatinoso dentro de la célula</li>
                <li>Contiene los organelos</li>
                <li>Medio donde ocurren reacciones químicas</li>
              </ul>
              
              <p><strong>Núcleo:</strong></p>
              <ul>
                <li>Centro de control de la célula</li>
                <li>Contiene el ADN (información genética)</li>
                <li>Rodeado por membrana nuclear</li>
              </ul>
              
              <p><strong>Mitocondrias:</strong></p>
              <ul>
                <li>"Centrales energéticas"</li>
                <li>Producen energía (ATP)</li>
                <li>Realizan respiración celular</li>
              </ul>
              
              <p><strong>Ribosomas:</strong></p>
              <ul>
                <li>Producen proteínas</li>
                <li>Pueden estar libres o en el retículo</li>
              </ul>
              
              <h4>Diferencias Célula Animal vs Vegetal:</h4>
              
              <p><strong>Solo en célula vegetal:</strong></p>
              <ul>
                <li><strong>Pared celular:</strong> Estructura rígida externa</li>
                <li><strong>Cloroplastos:</strong> Realizan fotosíntesis</li>
                <li><strong>Vacuola grande:</strong> Almacena agua y nutrientes</li>
              </ul>
              
              <p><strong>Solo en célula animal:</strong></p>
              <ul>
                <li><strong>Centriolos:</strong> Ayudan en división celular</li>
                <li><strong>Lisosomas:</strong> Digieren materiales</li>
              </ul>
              
              <h4>Niveles de Organización:</h4>
              <ol>
                <li><strong>Célula:</strong> Unidad básica</li>
                <li><strong>Tejido:</strong> Grupo de células similares</li>
                <li><strong>Órgano:</strong> Grupo de tejidos</li>
                <li><strong>Sistema:</strong> Grupo de órganos</li>
                <li><strong>Organismo:</strong> Ser vivo completo</li>
              </ol>
            `,
            ejercicios: [
              {
                pregunta: "¿Qué organelo es el centro de control de la célula?",
                opciones: ["Mitocondria", "Núcleo", "Ribosoma", "Membrana"],
                respuestaCorrecta: 1
              },
              {
                pregunta: "¿Qué estructura tienen SOLO las células vegetales?",
                opciones: ["Núcleo", "Mitocondrias", "Cloroplastos", "Ribosomas"],
                respuestaCorrecta: 2
              },
              {
                pregunta: "¿Qué tipo de células NO tienen núcleo definido?",
                opciones: ["Eucariotas", "Procariotas", "Vegetales", "Animales"],
                respuestaCorrecta: 1
              }
            ]
          }
        ]
      }
    }
  },
  
  lenguaje: {
    nombre: "Lengua y Literatura",
    color: "#E74C3C",
    icono: "📚",
    grados: {
      quinto: {
        nombre: "5to Grado",
        temas: [
          {
            id: "len-5-1",
            titulo: "El Sustantivo",
            descripcion: "Aprende sobre los sustantivos y su clasificación",
            contenido: `
              <h3>El Sustantivo</h3>
              
              <h4>¿Qué es un sustantivo?</h4>
              <p>El sustantivo es la palabra que nombra personas, animales, cosas, lugares o ideas.</p>
              
              <h4>Ejemplos:</h4>
              <ul>
                <li>Personas: María, doctor, niño</li>
                <li>Animales: perro, águila, mariposa</li>
                <li>Cosas: mesa, libro, computadora</li>
                <li>Lugares: Ecuador, escuela, parque</li>
                <li>Ideas: libertad, amor, felicidad</li>
              </ul>
              
              <h4>Clasificación de Sustantivos:</h4>
              
              <p><strong>Por su naturaleza:</strong></p>
              
              <p><strong>1. Comunes:</strong> Nombran de forma general</p>
              <ul>
                <li>ciudad, río, montaña, niño</li>
              </ul>
              
              <p><strong>2. Propios:</strong> Nombran de forma específica (se escriben con mayúscula)</p>
              <ul>
                <li>Guayaquil, Guayas, Chimborazo, Pedro</li>
              </ul>
              
              <p><strong>Por su número:</strong></p>
              <ul>
                <li><strong>Singular:</strong> uno solo (gato, casa)</li>
                <li><strong>Plural:</strong> más de uno (gatos, casas)</li>
              </ul>
              
              <p><strong>Por su género:</strong></p>
              <ul>
                <li><strong>Masculino:</strong> niño, gato, libro</li>
                <li><strong>Femenino:</strong> niña, gata, mesa</li>
              </ul>
              
              <p><strong>Otros tipos:</strong></p>
              
              <p><strong>Concretos:</strong> Se pueden percibir con los sentidos</p>
              <ul>
                <li>árbol, música, perfume</li>
              </ul>
              
              <p><strong>Abstractos:</strong> No se pueden percibir con los sentidos</p>
              <ul>
                <li>amor, paz, inteligencia</li>
              </ul>
              
              <p><strong>Individuales:</strong> Nombran un solo elemento</p>
              <ul>
                <li>soldado, oveja, árbol</li>
              </ul>
              
              <p><strong>Colectivos:</strong> Nombran un conjunto</p>
              <ul>
                <li>ejército (de soldados)</li>
                <li>rebaño (de ovejas)</li>
                <li>bosque (de árboles)</li>
              </ul>
              
              <h4>Formación del Plural:</h4>
              <ul>
                <li>Si termina en vocal: + s (casa → casas)</li>
                <li>Si termina en consonante: + es (árbol → árboles)</li>
                <li>Si termina en z: cambiar z por ces (pez → peces)</li>
              </ul>
            `,
            ejercicios: [
              {
                pregunta: "¿Cuál es un sustantivo propio?",
                opciones: ["ciudad", "Ecuador", "país", "lugar"],
                respuestaCorrecta: 1
              },
              {
                pregunta: "¿Qué tipo de sustantivo es 'rebaño'?",
                opciones: ["Individual", "Colectivo", "Propio", "Abstracto"],
                respuestaCorrecta: 1
              },
              {
                pregunta: "¿Cuál es el plural de 'lápiz'?",
                opciones: ["lápices", "lápizs", "lápizes", "lápicess"],
                respuestaCorrecta: 0
              }
            ]
          },
          {
            id: "len-5-2",
            titulo: "El Verbo",
            descripcion: "Conoce los verbos y sus tiempos",
            contenido: `
              <h3>El Verbo</h3>
              
              <h4>¿Qué es un verbo?</h4>
              <p>El verbo es la palabra que expresa acción, estado o proceso.</p>
              
              <h4>Ejemplos:</h4>
              <ul>
                <li><strong>Acción:</strong> correr, saltar, escribir</li>
                <li><strong>Estado:</strong> ser, estar, parecer</li>
                <li><strong>Proceso:</strong> crecer, madurar, envejecer</li>
              </ul>
              
              <h4>El Infinitivo:</h4>
              <p>Es la forma básica del verbo, sin conjugar. Terminaciones:</p>
              <ul>
                <li><strong>-ar:</strong> cantar, bailar, estudiar</li>
                <li><strong>-er:</strong> comer, beber, leer</li>
                <li><strong>-ir:</strong> vivir, escribir, salir</li>
              </ul>
              
              <h4>Tiempos Verbales:</h4>
              
              <p><strong>Presente:</strong> Acciones que ocurren ahora</p>
              <ul>
                <li>Yo canto</li>
                <li>Tú comes</li>
                <li>Él vive</li>
              </ul>
              
              <p><strong>Pretérito (Pasado):</strong> Acciones que ya ocurrieron</p>
              <ul>
                <li>Yo canté</li>
                <li>Tú comiste</li>
                <li>Él vivió</li>
              </ul>
              
              <p><strong>Futuro:</strong> Acciones que ocurrirán</p>
              <ul>
                <li>Yo cantaré</li>
                <li>Tú comerás</li>
                <li>Él vivirá</li>
              </ul>
              
              <h4>Personas Gramaticales:</h4>
              
              <p><strong>Singular:</strong></p>
              <ul>
                <li>Primera persona: yo</li>
                <li>Segunda persona: tú</li>
                <li>Tercera persona: él/ella</li>
              </ul>
              
              <p><strong>Plural:</strong></p>
              <ul>
                <li>Primera persona: nosotros/nosotras</li>
                <li>Segunda persona: ustedes</li>
                <li>Tercera persona: ellos/ellas</li>
              </ul>
              
              <h4>Conjugación del verbo AMAR (presente):</h4>
              <ul>
                <li>Yo amo</li>
                <li>Tú amas</li>
                <li>Él/Ella ama</li>
                <li>Nosotros/as amamos</li>
                <li>Ustedes aman</li>
                <li>Ellos/Ellas aman</li>
              </ul>
              
              <h4>Modos Verbales:</h4>
              <ul>
                <li><strong>Indicativo:</strong> Expresa realidad (Yo estudio)</li>
                <li><strong>Subjuntivo:</strong> Expresa deseo o duda (Ojalá estudie)</li>
                <li><strong>Imperativo:</strong> Expresa orden (¡Estudia!)</li>
              </ul>
            `,
            ejercicios: [
              {
                pregunta: "¿En qué tiempo está el verbo 'cantaré'?",
                opciones: ["Presente", "Pasado", "Futuro", "Condicional"],
                respuestaCorrecta: 2
              },
              {
                pregunta: "¿Qué terminación tiene el infinitivo del verbo 'comer'?",
                opciones: ["-ar", "-er", "-ir", "-or"],
                respuestaCorrecta: 1
              },
              {
                pregunta: "¿Cuál es la primera persona del singular?",
                opciones: ["Tú", "Él", "Yo", "Nosotros"],
                respuestaCorrecta: 2
              }
            ]
          }
        ]
      },
      sexto: {
        nombre: "6to Grado",
        temas: [
          {
            id: "len-6-1",
            titulo: "La Oración",
            descripcion: "Estructura y tipos de oraciones",
            contenido: `
              <h3>La Oración</h3>
              
              <h4>¿Qué es una oración?</h4>
              <p>La oración es un conjunto de palabras que tiene sentido completo. Comienza con mayúscula y termina con punto.</p>
              
              <h4>Partes de la Oración:</h4>
              
              <p><strong>1. Sujeto:</strong> De quién se habla</p>
              <ul>
                <li>¿Quién realiza la acción?</li>
                <li>Ejemplo: "El niño juega" (Sujeto: El niño)</li>
              </ul>
              
              <p><strong>2. Predicado:</strong> Qué se dice del sujeto</p>
              <ul>
                <li>Contiene el verbo</li>
                <li>Ejemplo: "El niño juega" (Predicado: juega)</li>
              </ul>
              
              <h4>Núcleos:</h4>
              <ul>
                <li><strong>Núcleo del Sujeto:</strong> Sustantivo principal</li>
                <li><strong>Núcleo del Predicado:</strong> Verbo</li>
              </ul>
              
              <h4>Tipos de Oraciones según la intención:</h4>
              
              <p><strong>1. Enunciativas:</strong> Informan algo</p>
              <ul>
                <li>Afirmativas: "Hoy es lunes."</li>
                <li>Negativas: "No llueve hoy."</li>
              </ul>
              
              <p><strong>2. Interrogativas:</strong> Preguntan</p>
              <ul>
                <li>"¿Cómo estás?"</li>
                <li>"¿Qué hora es?"</li>
              </ul>
              
              <p><strong>3. Exclamativas:</strong> Expresan emoción</p>
              <ul>
                <li>"¡Qué bonito día!"</li>
                <li>"¡Ay, qué susto!"</li>
              </ul>
              
              <p><strong>4. Imperativas:</strong> Dan órdenes o piden</p>
              <ul>
                <li>"Cierra la puerta."</li>
                <li>"Por favor, ayúdame."</li>
              </ul>
              
              <p><strong>5. Desiderativas:</strong> Expresan deseo</p>
              <ul>
                <li>"Ojalá llueva mañana."</li>
                <li>"Que tengas suerte."</li>
              </ul>
              
              <p><strong>6. Dubitativas:</strong> Expresan duda</p>
              <ul>
                <li>"Quizás vaya al cine."</li>
                <li>"Tal vez llegue tarde."</li>
              </ul>
              
              <h4>Oraciones Simples y Compuestas:</h4>
              
              <p><strong>Simple:</strong> Un solo verbo (un predicado)</p>
              <ul>
                <li>"María estudia matemáticas."</li>
              </ul>
              
              <p><strong>Compuesta:</strong> Dos o más verbos</p>
              <ul>
                <li>"María estudia y Pedro juega."</li>
              </ul>
              
              <h4>Modificadores del Sujeto:</h4>
              <ul>
                <li><strong>Modificador directo:</strong> Artículos y adjetivos</li>
                <li>Ejemplo: "<u>El</u> <u>pequeño</u> gato"</li>
              </ul>
              
              <h4>Complementos del Predicado:</h4>
              <ul>
                <li><strong>Objeto Directo:</strong> Recibe la acción</li>
                <li>"Leo <u>un libro</u>"</li>
                <li><strong>Objeto Indirecto:</strong> Para quién se realiza</li>
                <li>"Escribo una carta <u>a mi amigo</u>"</li>
              </ul>
            `,
            ejercicios: [
              {
                pregunta: "En la oración 'El gato duerme', ¿cuál es el sujeto?",
                opciones: ["duerme", "El gato", "El", "gato"],
                respuestaCorrecta: 1
              },
              {
                pregunta: "¿Qué tipo de oración es '¡Qué linda tarde!'?",
                opciones: ["Interrogativa", "Enunciativa", "Exclamativa", "Imperativa"],
                respuestaCorrecta: 2
              },
              {
                pregunta: "¿Cuántos verbos tiene una oración simple?",
                opciones: ["Ninguno", "Uno", "Dos", "Tres o más"],
                respuestaCorrecta: 1
              }
            ]
          }
        ]
      },
      septimo: {
        nombre: "7mo Grado",
        temas: [
          {
            id: "len-7-1",
            titulo: "Géneros Literarios",
            descripcion: "Conoce los principales géneros de la literatura",
            contenido: `
              <h3>Géneros Literarios</h3>
              
              <h4>¿Qué son los géneros literarios?</h4>
              <p>Son las diferentes categorías en las que se clasifican las obras literarias según sus características.</p>
              
              <h4>1. Género Narrativo</h4>
              
              <p><strong>Características:</strong></p>
              <ul>
                <li>Cuenta una historia</li>
                <li>Tiene personajes, tiempo y lugar</li>
                <li>Hay un narrador que cuenta los hechos</li>
              </ul>
              
              <p><strong>Elementos del relato:</strong></p>
              <ul>
                <li><strong>Narrador:</strong> Quien cuenta la historia</li>
                <li><strong>Personajes:</strong> Quienes participan</li>
                <li><strong>Trama:</strong> Desarrollo de los acontecimientos</li>
                <li><strong>Ambiente:</strong> Lugar y tiempo</li>
              </ul>
              
              <p><strong>Tipos de narrador:</strong></p>
              <ul>
                <li><strong>Primera persona:</strong> Participa en la historia (yo)</li>
                <li><strong>Tercera persona:</strong> No participa, observa (él/ella)</li>
                <li><strong>Omnisciente:</strong> Conoce todo, pensamientos incluidos</li>
              </ul>
              
              <p><strong>Subgéneros narrativos:</strong></p>
              <ul>
                <li><strong>Cuento:</strong> Relato breve, pocos personajes</li>
                <li><strong>Novela:</strong> Relato extenso, más personajes</li>
                <li><strong>Fábula:</strong> Relato con moraleja, personajes animales</li>
                <li><strong>Leyenda:</strong> Relato popular, mezcla realidad y fantasía</li>
              </ul>
              
              <h4>2. Género Lírico (Poesía)</h4>
              
              <p><strong>Características:</strong></p>
              <ul>
                <li>Expresa sentimientos y emociones</li>
                <li>Usa lenguaje artístico y bello</li>
                <li>Emplea versos y estrofas</li>
                <li>Puede tener rima</li>
              </ul>
              
              <p><strong>Elementos:</strong></p>
              <ul>
                <li><strong>Verso:</strong> Cada línea del poema</li>
                <li><strong>Estrofa:</strong> Conjunto de versos</li>
                <li><strong>Rima:</strong> Igualdad de sonidos al final</li>
                <li><strong>Ritmo:</strong> Musicalidad del poema</li>
              </ul>
              
              <p><strong>Recursos literarios:</strong></p>
              <ul>
                <li><strong>Metáfora:</strong> Comparación implícita</li>
                <li>"Tus ojos son dos luceros"</li>
                <li><strong>Símil:</strong> Comparación con "como"</li>
                <li>"Blanco como la nieve"</li>
                <li><strong>Personificación:</strong> Dar cualidades humanas</li>
                <li>"El viento susurraba"</li>
              </ul>
              
              <h4>3. Género Dramático (Teatro)</h4>
              
              <p><strong>Características:</strong></p>
              <ul>
                <li>Escrito para ser representado</li>
                <li>Solo diálogos y acotaciones</li>
                <li>Dividido en actos y escenas</li>
              </ul>
              
              <p><strong>Elementos:</strong></p>
              <ul>
                <li><strong>Diálogo:</strong> Conversaciones entre personajes</li>
                <li><strong>Acotaciones:</strong> Indicaciones escénicas</li>
                <li><strong>Monólogo:</strong> Un personaje habla solo</li>
                <li><strong>Apartes:</strong> Pensamiento en voz alta</li>
              </ul>
              
              <p><strong>Tipos de obras dramáticas:</strong></p>
              <ul>
                <li><strong>Tragedia:</strong> Final triste, temas serios</li>
                <li><strong>Comedia:</strong> Final feliz, provoca risa</li>
                <li><strong>Drama:</strong> Mezcla elementos serios y cómicos</li>
              </ul>
              
              <h4>Estructura de un relato:</h4>
              <ol>
                <li><strong>Inicio:</strong> Presentación de personajes y situación</li>
                <li><strong>Desarrollo:</strong> Conflicto y acciones</li>
                <li><strong>Clímax:</strong> Momento de mayor tensión</li>
                <li><strong>Desenlace:</strong> Resolución del conflicto</li>
              </ol>
            `,
            ejercicios: [
              {
                pregunta: "¿Qué género literario expresa sentimientos?",
                opciones: ["Narrativo", "Lírico", "Dramático", "Épico"],
                respuestaCorrecta: 1
              },
              {
                pregunta: "¿Cómo se llama cada línea de un poema?",
                opciones: ["Estrofa", "Verso", "Párrafo", "Rima"],
                respuestaCorrecta: 1
              },
              {
                pregunta: "¿Qué subgénero narrativo tiene moraleja?",
                opciones: ["Cuento", "Novela", "Fábula", "Leyenda"],
                respuestaCorrecta: 2
              }
            ]
          }
        ]
      }
    }
  },
  
  estudios_sociales: {
    nombre: "Estudios Sociales",
    color: "#F39C12",
    icono: "🌎",
    grados: {
      quinto: {
        nombre: "5to Grado",
        temas: [
          {
            id: "ss-5-1",
            titulo: "Ecuador y sus Regiones",
            descripcion: "Conoce las regiones naturales del Ecuador",
            contenido: `
              <h3>Ecuador y sus Regiones</h3>
              
              <h4>Ubicación del Ecuador:</h4>
              <ul>
                <li>Se encuentra en América del Sur</li>
                <li>Su nombre viene de la línea equinoccial (Ecuador)</li>
                <li>Limita con Colombia al norte y Perú al sur</li>
                <li>Al oeste está el Océano Pacífico</li>
              </ul>
              
              <h4>Las 4 Regiones Naturales:</h4>
              
              <p><strong>1. Región Costa o Litoral:</strong></p>
              <ul>
                <li><strong>Ubicación:</strong> Oeste del país, junto al océano</li>
                <li><strong>Clima:</strong> Cálido tropical</li>
                <li><strong>Provincias:</strong> Esmeraldas, Manabí, Santa Elena, Guayas, Los Ríos, El Oro</li>
                <li><strong>Actividades económicas:</strong></li>
                <ul>
                  <li>Agricultura (banano, cacao, arroz)</li>
                  <li>Pesca</li>
                  <li>Turismo de playa</li>
                  <li>Camaroneras</li>
                </ul>
                <li><strong>Ciudades importantes:</strong> Guayaquil, Manta, Machala</li>
              </ul>
              
              <p><strong>2. Región Sierra o Interandina:</strong></p>
              <ul>
                <li><strong>Ubicación:</strong> Centro del país, en la cordillera de los Andes</li>
                <li><strong>Clima:</strong> Templado y frío</li>
                <li><strong>Provincias:</strong> Carchi, Imbabura, Pichincha, Cotopaxi, Tungurahua, Bolívar, Chimborazo, Cañar, Azuay, Loja</li>
                <li><strong>Características:</strong></li>
                <ul>
                  <li>Montañas y volcanes</li>
                  <li>Valles fértiles</li>
                  <li>Páramos</li>
                </ul>
                <li><strong>Actividades económicas:</strong></li>
                <ul>
                  <li>Agricultura (papas, maíz, flores)</li>
                  <li>Ganadería</li>
                  <li>Artesanías</li>
                  <li>Turismo</li>
                </ul>
                <li><strong>Ciudades importantes:</strong> Quito (capital), Cuenca, Ambato, Riobamba</li>
              </ul>
              
              <p><strong>3. Región Amazónica u Oriente:</strong></p>
              <ul>
                <li><strong>Ubicación:</strong> Este del país</li>
                <li><strong>Clima:</strong> Cálido húmedo (llueve mucho)</li>
                <li><strong>Provincias:</strong> Sucumbíos, Orellana, Napo, Pastaza, Morona Santiago, Zamora Chinchipe</li>
                <li><strong>Características:</strong></li>
                <ul>
                  <li>Selva tropical</li>
                  <li>Gran biodiversidad</li>
                  <li>Ríos caudalosos</li>
                  <li>Comunidades indígenas</li>
                </ul>
                <li><strong>Actividades económicas:</strong></li>
                <ul>
                  <li>Extracción de petróleo</li>
                  <li>Turismo ecológico</li>
                  <li>Agricultura</li>
                </ul>
                <li><strong>Ciudades importantes:</strong> Lago Agrio, Tena, Puyo</li>
              </ul>
              
              <p><strong>4. Región Insular (Galápagos):</strong></p>
              <ul>
                <li><strong>Ubicación:</strong> Océano Pacífico, a 1000 km de la costa</li>
                <li><strong>Clima:</strong> Variable según la corriente marina</li>
                <li><strong>Características:</strong></li>
                <ul>
                  <li>Archipiélago de islas volcánicas</li>
                  <li>Fauna única en el mundo</li>
                  <li>Patrimonio Natural de la Humanidad</li>
                  <li>Laboratorio natural de evolución</li>
                </ul>
                <li><strong>Especies famosas:</strong></li>
                <ul>
                  <li>Tortugas gigantes</li>
                  <li>Iguanas marinas</li>
                  <li>Piqueros de patas azules</li>
                  <li>Lobos marinos</li>
                </ul>
                <li><strong>Actividad principal:</strong> Turismo controlado</li>
              </ul>
              
              <h4>Datos importantes del Ecuador:</h4>
              <ul>
                <li><strong>Capital:</strong> Quito</li>
                <li><strong>Ciudad más poblada:</strong> Guayaquil</li>
                <li><strong>Idioma oficial:</strong> Español</li>
                <li><strong>Moneda:</strong> Dólar estadounidense</li>
                <li><strong>Total de provincias:</strong> 24</li>
              </ul>
            `,
            ejercicios: [
              {
                pregunta: "¿Cuántas regiones naturales tiene Ecuador?",
                opciones: ["2", "3", "4", "5"],
                respuestaCorrecta: 2
              },
              {
                pregunta: "¿En qué región está ubicada Quito?",
                opciones: ["Costa", "Sierra", "Oriente", "Galápagos"],
                respuestaCorrecta: 1
              },
              {
                pregunta: "¿Qué región tiene clima cálido húmedo y selva tropical?",
                opciones: ["Costa", "Sierra", "Amazonía", "Insular"],
                respuestaCorrecta: 2
              }
            ]
          }
        ]
      },
      sexto: {
        nombre: "6to Grado",
        temas: [
          {
            id: "ss-6-1",
            titulo: "Culturas Precolombinas",
            descripcion: "Las culturas ancestrales del Ecuador",
            contenido: `
              <h3>Culturas Precolombinas del Ecuador</h3>
              
              <h4>¿Qué significa "precolombino"?</h4>
              <p>Se refiere a las culturas que existieron en América antes de la llegada de Cristóbal Colón en 1492.</p>
              
              <h4>Período Paleoindio (13000 - 4200 a.C.):</h4>
              <ul>
                <li>Primeros pobladores del Ecuador</li>
                <li>Eran cazadores y recolectores</li>
                <li>Nómadas (se movían de un lugar a otro)</li>
                <li>Usaban herramientas de piedra</li>
              </ul>
              
              <h4>Período Formativo (4200 - 300 a.C.):</h4>
              
              <p><strong>Cultura Valdivia (3500 - 1800 a.C.):</strong></p>
              <ul>
                <li>Una de las más antiguas de América</li>
                <li>Ubicación: Costa ecuatoriana</li>
                <li>Primeros agricultores (maíz, fréjol)</li>
                <li>Famosas "Venus de Valdivia" (figuras de cerámica)</li>
                <li>Pescadores y recolectores</li>
                <li>Primeros en usar cerámica en América</li>
              </ul>
              
              <p><strong>Cultura Machalilla (1800 - 1500 a.C.):</strong></p>
              <ul>
                <li>Sucesores de Valdivia</li>
                <li>Mejoraron la cerámica</li>
                <li>Navegantes (uso de balsas)</li>
                <li>Comercio con otras regiones</li>
              </ul>
              
              <p><strong>Cultura Chorrera (1300 - 300 a.C.):</strong></p>
              <ul>
                <li>Cerámica muy fina y decorada</li>
                <li>Figuras de animales y personas</li>
                <li>Botellas silbato</li>
                <li>Agricultura desarrollada</li>
              </ul>
              
              <h4>Período de Desarrollo Regional (300 a.C. - 800 d.C.):</h4>
              
              <p><strong>Cultura Bahía:</strong></p>
              <ul>
                <li>Costa central</li>
                <li>Grandes navegantes</li>
                <li>Comercio marítimo</li>
                <li>Uso de la concha Spondylus</li>
                <li>Figuras ceremoniales</li>
              </ul>
              
              <p><strong>Cultura Jama-Coaque:</strong></p>
              <ul>
                <li>Costa norte</li>
                <li>Figuras humanas detalladas</li>
                <li>Uso de oro y platino</li>
                <li>Complejos tocados (adornos de cabeza)</li>
              </ul>
              
              <p><strong>Cultura La Tolita:</strong></p>
              <ul>
                <li>Esmeraldas</li>
                <li>Excelente trabajo en oro</li>
                <li>Máscaras ceremoniales</li>
                <li>Contacto con culturas mesoamericanas</li>
              </ul>
              
              <h4>Período de Integración (800 - 1500 d.C.):</h4>
              
              <p><strong>Cultura Manteña:</strong></p>
              <ul>
                <li>Costa central</li>
                <li>Grandes comerciantes marítimos</li>
                <li>Usaban monedas (hachas de cobre)</li>
                <li>Sillas de piedra ("sillas manteñas")</li>
                <li>Navegaban hasta México</li>
              </ul>
              
              <p><strong>Cultura Milagro-Quevedo:</strong></p>
              <ul>
                <li>Región litoral</li>
                <li>Agricultores</li>
                <li>Uso de terrazas</li>
                <li>Cerámica utilitaria</li>
              </ul>
              
              <h4>Culturas de la Sierra:</h4>
              
              <p><strong>Los Cañaris:</strong></p>
              <ul>
                <li>Sur de Ecuador (Azuay, Cañar)</li>
                <li>Guerreros valientes</li>
                <li>Resistieron a los Incas</li>
                <li>Leyenda de origen: laguna de Culebrillas</li>
              </ul>
              
              <p><strong>Los Caras:</strong></p>
              <ul>
                <li>Costa y sierra norte</li>
                <li>Reino de Quito</li>
                <li>Organización política avanzada</li>
              </ul>
              
              <h4>El Imperio Inca en Ecuador:</h4>
              <ul>
                <li>Llegaron al Ecuador alrededor de 1463</li>
                <li>Conquistados por Túpac Yupanqui</li>
                <li>Resistencia de culturas locales</li>
                <li>Construcción de Tomebamba (actual Cuenca)</li>
                <li>Camino del Inca (Qhapaq Ñan)</li>
                <li>El último emperador Inca, Atahualpa, nació en Ecuador</li>
              </ul>
              
              <h4>Importancia:</h4>
              <p>Estas culturas nos dejaron:</p>
              <ul>
                <li>Conocimientos agrícolas</li>
                <li>Técnicas artesanales</li>
                <li>Arte y cerámica</li>
                <li>Sistemas de organización social</li>
                <li>Parte de nuestra identidad</li>
              </ul>
            `,
            ejercicios: [
              {
                pregunta: "¿Cuál es una de las culturas más antiguas del Ecuador?",
                opciones: ["Manteña", "Valdivia", "Inca", "Cañari"],
                respuestaCorrecta: 1
              },
              {
                pregunta: "¿Qué cultura es famosa por sus 'Venus'?",
                opciones: ["Chorrera", "Valdivia", "Bahía", "Tolita"],
                respuestaCorrecta: 1
              },
              {
                pregunta: "¿Qué pueblo resistió a los Incas en el sur del Ecuador?",
                opciones: ["Manteños", "Caras", "Cañaris", "Valdivia"],
                respuestaCorrecta: 2
              }
            ]
          }
        ]
      },
      septimo: {
        nombre: "7mo Grado",
        temas: [
          {
            id: "ss-7-1",
            titulo: "Independencia del Ecuador",
            descripcion: "El proceso de independencia ecuatoriana",
            contenido: `
              <h3>Independencia del Ecuador</h3>
              
              <h4>Época Colonial (1534-1809):</h4>
              <ul>
                <li>Ecuador era parte del Imperio Español</li>
                <li>División: Real Audiencia de Quito</li>
                <li>Sistema de explotación a indígenas</li>
                <li>Control político y económico español</li>
              </ul>
              
              <h4>Causas de la Independencia:</h4>
              
              <p><strong>Externas:</strong></p>
              <ul>
                <li>Independencia de Estados Unidos (1776)</li>
                <li>Revolución Francesa (1789)</li>
                <li>Ideas de libertad e igualdad</li>
                <li>Invasión de Napoleón a España</li>
              </ul>
              
              <p><strong>Internas:</strong></p>
              <ul>
                <li>Explotación y malos tratos</li>
                <li>Impuestos excesivos</li>
                <li>Discriminación social</li>
                <li>Deseo de autogobierno</li>
              </ul>
              
              <h4>Primer Grito de Independencia (10 de Agosto de 1809):</h4>
              
              <p><strong>En Quito:</strong></p>
              <ul>
                <li>Grupo de criollos forma una Junta de Gobierno</li>
                <li>Destituyen al presidente de la Audiencia</li>
                <li>No proclaman independencia total (lealtad a Fernando VII)</li>
              </ul>
              
              <p><strong>Personajes importantes:</strong></p>
              <ul>
                <li>Juan Pío Montúfar (Marqués de Selva Alegre)</li>
                <li>Manuela Cañizares</li>
                <li>Juan de Salinas</li>
                <li>Quiroga</li>
              </ul>
              
              <p><strong>Consecuencias:</strong></p>
              <ul>
                <li>Represión española</li>
                <li>Encarcelamiento de líderes</li>
                <li>Masacre del 2 de Agosto de 1810</li>
                <li>Inspiración para otros movimientos</li>
              </ul>
              
              <h4>La Revolución de Octubre (9 de Octubre de 1820):</h4>
              
              <p><strong>En Guayaquil:</strong></p>
              <ul>
                <li>Proclamación de independencia de Guayaquil</li>
                <li>Formación de gobierno propio</li>
                <li>Base para liberación de la Sierra</li>
              </ul>
              
              <p><strong>Personajes importantes:</strong></p>
              <ul>
                <li>José Joaquín de Olmedo</li>
                <li>José de Antepara</li>
                <li>Gregorio Escobedo</li>
              </ul>
              
              <h4>Batalla de Pichincha (24 de Mayo de 1822):</h4>
              
              <p><strong>Antecedentes:</strong></p>
              <ul>
                <li>Ejército libertador desde el sur</li>
                <li>Antonio José de Sucre lidera tropas</li>
                <li>Apoyo de tropas grancolombianas</li>
              </ul>
              
              <p><strong>La batalla:</strong></p>
              <ul>
                <li>Lugar: Faldas del volcán Pichincha</li>
                <li>Fecha: 24 de mayo de 1822</li>
                <li>General: Antonio José de Sucre</li>
                <li>Victoria independentista</li>
                <li>Capitulación española</li>
              </ul>
              
              <p><strong>Héroes:</strong></p>
              <ul>
                <li>Antonio José de Sucre (Gran Mariscal de Ayacucho)</li>
                <li>Abdón Calderón (mártir de Pichincha)</li>
                <li>Manuela Sáenz (apoyó la causa)</li>
              </ul>
              
              <p><strong>Resultado:</strong></p>
              <ul>
                <li>Liberación definitiva de Quito</li>
                <li>Fin del dominio español en Ecuador</li>
                <li>Quito se une a la Gran Colombia</li>
              </ul>
              
              <h4>La Gran Colombia (1822-1830):</h4>
              <ul>
                <li>Unión de Ecuador, Colombia y Venezuela</li>
                <li>Presidente: Simón Bolívar</li>
                <li>Distrito del Sur: territorio ecuatoriano</li>
                <li>Capital: Bogotá</li>
              </ul>
              
              <h4>Separación de la Gran Colombia (13 de Mayo de 1830):</h4>
              
              <p><strong>Causas:</strong></p>
              <ul>
                <li>Distancias geográficas</li>
                <li>Diferencias regionales</li>
                <li>Deseos de autonomía</li>
                <li>Problemas de comunicación</li>
              </ul>
              
              <p><strong>Creación del Ecuador:</strong></p>
              <ul>
                <li>Asamblea Constituyente en Riobamba</li>
                <li>Primera Constitución</li>
                <li>Nombre oficial: República del Ecuador</li>
                <li>Primer Presidente: Juan José Flores</li>
              </ul>
              
              <h4>Personajes Importantes:</h4>
              
              <p><strong>Simón Bolívar:</strong></p>
              <ul>
                <li>Libertador de varios países</li>
                <li>Visitó Ecuador</li>
                <li>Entrevista con San Martín en Guayaquil</li>
              </ul>
              
              <p><strong>Antonio José de Sucre:</strong></p>
              <ul>
                <li>Ganador de Batalla de Pichincha</li>
                <li>Gran estratega militar</li>
                <li>Intendente de Quito</li>
              </ul>
              
              <p><strong>Juan José Flores:</strong></p>
              <ul>
                <li>Primer Presidente del Ecuador</li>
                <li>Militar venezolano</li>
                <li>Tres períodos presidenciales</li>
              </ul>
              
              <h4>Fechas Importantes:</h4>
              <ul>
                <li><strong>10 de agosto de 1809:</strong> Primer Grito de Independencia</li>
                <li><strong>9 de octubre de 1820:</strong> Independencia de Guayaquil</li>
                <li><strong>24 de mayo de 1822:</strong> Batalla de Pichincha</li>
                <li><strong>13 de mayo de 1830:</strong> Creación de la República del Ecuador</li>
              </ul>
            `,
            ejercicios: [
              {
                pregunta: "¿En qué fecha se dio el Primer Grito de Independencia?",
                opciones: ["9 de octubre", "10 de agosto", "24 de mayo", "13 de mayo"],
                respuestaCorrecta: 1
              },
              {
                pregunta: "¿Quién lideró la Batalla de Pichincha?",
                opciones: ["Simón Bolívar", "Juan José Flores", "Antonio José de Sucre", "José de San Martín"],
                respuestaCorrecta: 2
              },
              {
                pregunta: "¿Cuándo se creó la República del Ecuador?",
                opciones: ["1809", "1820", "1822", "1830"],
                respuestaCorrecta: 3
              }
            ]
          }
        ]
      }
    }
  }
};

module.exports = contenidoEducativo;